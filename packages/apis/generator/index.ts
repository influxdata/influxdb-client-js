/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import {Operation} from './operationType'
import {generateApi} from './generateApi'
import logger from './logger'

const operations: Array<Operation> = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      '..',
      'resources',
      process.argv[2] || 'operations.json'
    ),
    'utf-8'
  )
) as Array<Operation>

const targetDir = path.join(
  __dirname,
  '..',
  'src',
  process.argv[3] || 'generated'
)

// reduce operations to apis
const apis = operations.reduce(
  (acc: {[api: string]: Array<Operation>}, val: Operation) => {
    if (
      val.path === '/ready' ||
      val.path === '/health' ||
      val.path === '/ping'
    ) {
      // due to a bug in the swagger parser, we don't have correct server path's
      val.server = ''
    }
    const apiName = val.path.split('/')[1]
    ;(acc[apiName] || (acc[apiName] = [])).push(val)
    return acc
  },
  {} as {[api: string]: Array<Operation>}
)
const indexContent = ["export * from './types'"]
for (const key of Object.keys(apis).sort()) {
  const {apiName, code} = generateApi(key, apis[key])
  logger.info(apiName + '.ts')
  indexContent.push(`export * from './${apiName}'`)
  fs.writeFileSync(path.join(targetDir, apiName + '.ts'), code)
}
logger.info('index.ts')
fs.writeFileSync(
  path.join(targetDir, 'index.ts'),
  indexContent.join('\n') + '\n'
)
