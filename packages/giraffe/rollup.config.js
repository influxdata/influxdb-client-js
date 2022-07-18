import {terser} from 'rollup-plugin-terser'
import gzip from 'rollup-plugin-gzip'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import resolve from '@rollup/plugin-node-resolve'
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
            lib: ['es2015'],
          },
        },
      }),
      // @influxdata/influxdb-client (core) package uses `module:browser`
      // property in its package.json to point to an ES module created for the browser
      resolve({browser: true}),
      noTerser ? undefined : terser(),
      gzip(),
    ],
    output: {
      name: name || pkg.name,
      file: out,
      format: format,
      sourcemap: true,
    },
  }
}

export default [
  createConfig({format: 'umd', out: pkg.main}),
  createConfig({format: 'esm', out: pkg.module}),
  {
    input: './dist/index.d.ts',
    output: [{file: './dist/all.d.ts', format: 'es'}],
    plugins: [dts()],
  },
]
