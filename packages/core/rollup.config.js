import sourceMaps from 'rollup-plugin-sourcemaps'
import {terser} from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import typescript from 'rollup-plugin-typescript2'
import externalBuiltins from 'builtin-modules'
import pkg from './package.json'
// import builtins from 'rollup-plugin-node-builtins'
// import globals from 'rollup-plugin-node-globals'

const plugins = [
  sourceMaps(),
  typescript({
    tsconfig: './tsconfig.build.json',
  }),
  terser(),
  gzip(),
]

const input = 'src/index.ts'
export default [
  {
    input,
    plugins,
    output: {
      name: pkg.name,
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    external: externalBuiltins,
  },
  {
    input,
    plugins,
    output: {
      name: pkg.name,
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    external: externalBuiltins,
  },
]
