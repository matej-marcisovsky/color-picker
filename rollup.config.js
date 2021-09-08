import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

const CONFIG = {
  output: {
    dir: './dist',
    format: 'iife'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript()
  ]
};

export default [
  Object.assign({ input: './src/Content.tsx' }, CONFIG),
  Object.assign({ input: './src/Background.ts' }, CONFIG),
];
