import path from 'path';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import tsconfigPaths from 'rollup-plugin-tsconfig-paths';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    supply: './src/supply/index.ts',
    sandbox: './src/sandbox/index.ts',
    payment: './src/payment/index.ts'
  },
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      entryFileNames: '[name]/index.js'
    },
    {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name]/index.js'
    }
  ],
  plugins: [
    tsconfigPaths(),
    resolve({
      extensions: ['.js', '.ts']
    }),
    alias({
      entries: [
        // eslint-disable-next-line no-undef
        { find: '@expediagroup/lodging-connectivity-sdk/supply', replacement: path.resolve(__dirname, 'src/supply/index.ts') },
        // eslint-disable-next-line no-undef
        { find: '@expediagroup/lodging-connectivity-sdk/sandbox', replacement: path.resolve(__dirname, 'src/sandbox/index.ts') },
        // eslint-disable-next-line no-undef
        { find: '@expediagroup/lodging-connectivity-sdk/payment', replacement: path.resolve(__dirname, 'src/payment/index.ts') },
      ]
    }),
    commonjs({
      include: /node_modules/
    }),
    json(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser() // Minify the output
  ]
};
