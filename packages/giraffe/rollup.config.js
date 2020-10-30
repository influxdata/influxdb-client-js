import {terser} from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const tsBuildConfigPath = './tsconfig.build.json'
const externalNodeModules = ['buffer', 'http', 'https', 'url', 'zlib']

const input = 'src/index.ts'
function createConfig({browser, format, out, name, target, noTerser}) {
  return {
    input,
    plugins: [
      typescript({
        tsconfig: tsBuildConfigPath,
        tsconfigOverride: {
          compilerOptions: {
            target: target || 'es2015',
            lib: ['es2015'],
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
  createConfig({browser: false, format: 'umd', out: pkg.main}),
  createConfig({browser: false, format: 'esm', out: pkg.module}),
  createConfig({
    browser: true,
    format: 'iife',
    name: 'influxdbToGiraffe',
    out: 'dist/influxdbToGiraffe.min.js',
    target: 'es5',
  }),
  createConfig({
    browser: true,
    format: 'iife',
    name: 'influxdbToGiraffe',
    out: 'dist/influxdbToGiraffe.js',
    target: 'es5',
    noTerser: true,
  }),
]
