import builtins from 'rollup-plugin-node-builtins'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import {terser} from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import typescript from 'rollup-plugin-typescript2'
import tsc from 'typescript'

const pkg = require('./package.json')

let plugins = [
  resolve({preferBuiltins: true}),
  commonjs(),
  builtins(),
  sourceMaps(),
  typescript({
    typescript: tsc,
    tsconfigDefaults: {
      sourceMap: true,
    },
  }),
]

if (process.env.NODE_ENV === 'production') {
  plugins = [...plugins, terser(), gzip()]
}

const input = 'src/index.ts'

export default [
  {
    input,
    plugins,
    output: {
      name: pkg.name,
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
    },
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
  },
]
