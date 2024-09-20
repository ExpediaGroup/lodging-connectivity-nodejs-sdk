import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

// Utility to get all directories within the source folder and check for index.ts
function getModulesWithIndexTs(source) {
  const entries = {};

  // Check for root-level index.ts
  const rootIndex = join(source, 'index.ts');
  if (existsSync(rootIndex)) {
    entries['.'] = rootIndex;  // Add root index.ts
  }

  // Check for index.ts in each subdirectory
  const subDirs = readdirSync(source);
  subDirs.forEach(name => {
    const folderPath = join(source, name);
    const indexPath = join(folderPath, 'index.ts');

    // Check if the path is a directory and contains an index.ts file
    if (statSync(folderPath).isDirectory() && existsSync(indexPath)) {
      entries[name] = indexPath;  // Add module if index.ts exists
    }
  });

  return entries;
}

const srcDir = 'src/modules';
const modules = getModulesWithIndexTs(srcDir);

export default [
  {
    input: modules,
    output: [
      {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name]/index.esm.js',
        chunkFileNames: 'shared/[name]-[hash].esm.js',
      },
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name]/index.cjs.js',
        chunkFileNames: 'shared/[name]-[hash].cjs.js',
      },
    ],
    plugins: [
      typescript({ declaration: false }),
      nodeResolve(), 
      commonjs(), 
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_console: true
        },
      }),
      json()
    ],
    external: ['@apollo/client', 'axios', 'graphql', 'lodash', 'winston', 'node-fetch'],
  },
  {
    input: modules,
    output: {
      dir: 'dist',
      entryFileNames: '[name]/index.d.ts',
      chunkFileNames: 'shared/[name].d.ts',
    },
    plugins: [dts()]
  }
];
