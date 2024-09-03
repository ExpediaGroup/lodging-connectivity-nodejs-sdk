import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
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
      sourcemap: true
    },
    {
      dir: 'dist/esm',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    tsconfigPaths(),
    resolve({
      extensions: ['.js', '.ts']
    }),
    commonjs({
      include: /node_modules/
    }),
    json(),
    typescript({ tsconfig: './tsconfig.json' })
  ]
};
