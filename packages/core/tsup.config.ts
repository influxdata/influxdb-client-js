import {defineConfig} from 'tsup'
import {esbuildGzipOutJsPlugin} from '../../scripts/esbuild-gzip-js'
import pkg from './package.json'

const minify = !(process.env.ESBUILD_MINIFY === '0')

const outFiles = {
  esm: pkg.exports['.'].import,
  cjs: pkg.exports['.'].require,
}
export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
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
    'process.env.BUILD_BROWSER': 'false',
  },
  esbuildPlugins: [esbuildGzipOutJsPlugin],
})
