/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import operations from './operations.json'
const targetDir = path.join(__dirname, '..', 'build', 'generated')

function capitalize(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
function decapitalize(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1)
}
function operationId(operation: any): string {
  if (operation.operationId) return operation.operationId as string
  else {
    const retVal = operation.path
      .split('/')
      .map((v: string, i: number) => (i ? v : operation.operation))
      .map(capitalize)
      .join('')
    console.warn(
      `no operationId defined for: ${operation.operation} ${operation.path} , using: ${retVal}`
    )
    return retVal
  }
}

// reduce operations to apis
const apis = operations.reduce((acc: any, val: any) => {
  const apiName = val.path.split('/')[1]
  ;(acc[apiName] || (acc[apiName] = [])).push(val)
  return acc
}, {})
const apiKeys = Object.keys(apis).sort()

for (const key of apiKeys) {
  const apiName = (key ? capitalize(key) : 'Root') + 'API'
  let apiDef = `import APIBase from '../APIBase'

export class ${apiName} extends APIBase{
  /**
   * Creates ${apiName} from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }`

  for (const operation of apis[key]) {
    apiDef += `
  /**
   * ${operation.summary ? operation.summary : ''}
   */
  ${decapitalize(operationId(operation))}(): void {}`
  }

  apiDef += '\n}\n'

  fs.writeFileSync(path.join(targetDir, apiName + '.ts'), apiDef)
}
