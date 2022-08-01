import {defineConfig} from 'tsup'
import pkg from './package.json'

const minify = true

const outFiles = {
  esm: pkg.exports['.'].import,
  cjs: pkg.exports['.'].require,
}
export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify,
  target: ['es2015'],
  platform: 'node',
  splitting: false,
  esbuildOptions(options, {format}) {
    options.outdir = undefined
    options.outfile = outFiles[format]
  },
  define: {
    'process.env.ROLLUP_BROWSER': 'false',
  },
})
