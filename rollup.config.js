import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.js',
    output: {
      dir: 'output',
      format: 'cjs'
    },
    plugins: [typescript(), nodeResolve()],
};


