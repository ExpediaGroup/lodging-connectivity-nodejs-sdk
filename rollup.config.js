import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
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
