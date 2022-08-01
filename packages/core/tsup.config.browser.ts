import {defineConfig} from 'tsup'
import {readFile} from 'fs/promises'
import pkg from './package.json'

const minify = false

const outFiles = {
  esm: pkg.exports['.'].browser.import,
  cjs: pkg.exports['.'].browser.require,
  iife: pkg.exports['.'].browser.script,
}

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  format: ['cjs', 'esm', 'iife'],
  globalName: 'influxdb',
  dts: false,
  minify,
  target: ['es2015'],
  platform: 'browser',
  splitting: false,
  define: {
    'process.env.ROLLUP_BROWSER': 'true',
  },
  esbuildOptions(options, {format}) {
    options.outdir = undefined
    options.outfile = outFiles[format]
  },
  esbuildPlugins: [
    {
      name: 'replace',
      setup: (build) => {
        build.onLoad({filter: /InfluxDB.ts$/}, async (args) => {
          const source = await readFile(args.path, 'utf8')
          const contents = source.replace(
            './impl/node/NodeHttpTransport',
            './impl/browser/FetchTransport'
          )
          return {
            contents,
            loader: 'ts',
          }
        })
      },
    },
  ],
})
