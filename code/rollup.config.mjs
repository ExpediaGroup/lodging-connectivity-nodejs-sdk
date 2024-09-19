import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const modules = {
  supply: 'src/supply/index.ts',
  sandbox: 'src/sandbox/index.ts',
  payment: 'src/payment/index.ts'
};

export default [
  {
    input: modules,
    output: [
      {
        dir: 'dist', // Output directory for all chunks
        format: 'es', // Use 'es' for module splitting or 'cjs' for CommonJS
        entryFileNames: '[name]/index.esm.js', // Separate output for each entry point
        chunkFileNames: 'shared/[name].esm.js', // Shared chunks go into 'shared'
      },
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name]/index.cjs.js',
        chunkFileNames: 'shared/[name].cjs.js',
      },
    ],
    plugins: [
      typescript({ declaration: false }),
      nodeResolve(), 
      commonjs(), 
      terser(), 
      json()
    ],
    external: ['@apollo/client', 'axios', 'graphql', 'lodash', 'winston', 'node-fetch'],
  },
  {
    input: modules,
    output: {
      dir: 'dist',
      entryFileNames: '[name]/index.d.ts', // Separate output for each entry point
      chunkFileNames: 'shared/[name].d.ts',
    },
    plugins: [dts()]
  }
];
