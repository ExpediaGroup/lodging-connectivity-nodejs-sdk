import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'es',
        entryFileNames: 'index.esm.js',
      },
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: 'index.cjs.js',
      },
    ],
    plugins: [
      typescript({ declaration: false }),
      nodeResolve(),
      commonjs(),
      json()
    ],
    external: ['@apollo/client', 'axios', 'graphql', 'lodash', 'winston', 'node-fetch'],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      entryFileNames: 'index.d.ts',
    },
    plugins: [dts()]
  }
];
