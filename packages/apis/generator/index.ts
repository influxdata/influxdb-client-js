/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import _operations from '../resources/operations.json'
import {Operation} from './operationType'
import {generateApi} from './generateApi'
import logger from './logger'

const targetDir = path.join(__dirname, '..', 'src', 'generated')
const operations: Array<Operation> = _operations

// reduce operations to apis
const apis = operations.reduce(
  (acc: {[api: string]: Array<Operation>}, val: Operation) => {
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
