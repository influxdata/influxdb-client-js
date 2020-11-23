import {terser} from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import dts from 'rollup-plugin-dts'

const tsBuildConfigPath = './tsconfig.build.json'

const input = 'src/index.ts'
function createConfig({format, out, name, target, noTerser}) {
  return {
    input,
    plugins: [
      typescript({
        tsconfig: tsBuildConfigPath,
        tsconfigOverride: {
          compilerOptions: {
            target: target || 'es2015',
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
    //external: browser ? undefined : externalNodeModules,
  }
}

export default [
  createConfig({format: 'cjs', out: pkg.main}),
  createConfig({format: 'esm', out: pkg.module}),
  createConfig({format: 'umd', out: pkg.browser}),
  createConfig({
    format: 'esm',
    out: pkg.browser.replace('.js', '.mjs'),
  }),
  createConfig({
    format: 'iife',
    name: 'influxdbApis',
    out: 'dist/influxdbApis.min.js',
    target: 'es5',
  }),
  createConfig({
    format: 'iife',
    name: 'influxdbApis',
    out: 'dist/influxdbApis.js',
    target: 'es5',
    noTerser: true,
  }),
  {
    input: './dist/index.d.ts',
    output: [{file: './dist/all.d.ts', format: 'es'}],
    plugins: [dts()],
  },
]
