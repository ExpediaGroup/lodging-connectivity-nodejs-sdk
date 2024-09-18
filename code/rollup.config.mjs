import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: './dist/index.esm.js',
        format: 'es'
      },
      {
        file: './dist/index.cjs.js',
        format: 'cjs'
      },
    ],
    plugins: [
      typescript({
        declaration: false,
      }),
      commonjs(),
      nodeResolve(),
      json(),
      terser()
    ]
  },
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.d.ts'
    },
    plugins: [dts()],
  },

];
