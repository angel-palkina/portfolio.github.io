import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";

export default {
    input: ['src/comic.ts'],

    output: {
      dir: 'dist/bundle.js',
      format: 'cjs'
    },
    plugins: [typescript(),terser(), nodeResolve({browser: true})],
};


