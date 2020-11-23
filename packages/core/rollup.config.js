import {terser} from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import dts from 'rollup-plugin-dts'

const tsBuildConfigPath = './tsconfig.build.json'
const externalNodeModules = ['buffer', 'http', 'https', 'url', 'zlib']

const input = 'src/index.ts'
function createConfig({browser, format, out, name, target, noTerser}) {
  return {
    input,
    plugins: [
      replace(
        browser
          ? {
              './impl/node/NodeHttpTransport': './impl/browser/FetchTransport',
              'process.env.ROLLUP_BROWSER': 'true',
              delimiters: ['', ''],
            }
          : {
              'process.env.ROLLUP_BROWSER': 'false',
              delimiters: ['', ''],
            }
      ),
      typescript({
        tsconfig: tsBuildConfigPath,
        tsconfigOverride: {
          compilerOptions: {
            target: target || 'es2015',
            lib: browser ? ['DOM', 'es2015'] : ['es2015'],
          },
        },
      }),
      noTerser ? undefined : terser(),
      gzip(),
    ],
    output: {
      name: name || pkg.name,
      file: out,
      format: format,
      sourcemap: true,
    },
    external: browser ? undefined : externalNodeModules,
  }
}

export default [
  createConfig({browser: false, format: 'cjs', out: pkg.main}),
  createConfig({browser: false, format: 'esm', out: pkg.module}),
  createConfig({browser: true, format: 'umd', out: pkg.browser}),
  createConfig({
    browser: true,
    format: 'esm',
    out: pkg.browser.replace('.js', '.mjs'),
  }),
  createConfig({
    browser: true,
    format: 'iife',
    name: 'influxdb',
    out: 'dist/influxdb.min.js',
    target: 'es5',
  }),
  createConfig({
    browser: true,
    format: 'iife',
    name: 'influxdb',
    out: 'dist/influxdb.js',
    target: 'es5',
    noTerser: true,
  }),
  {
    input: './dist/index.d.ts',
    output: [{file: './dist/all.d.ts', format: 'es'}],
    plugins: [dts()],
  },
]
