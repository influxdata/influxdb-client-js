/* eslint-disable no-console */
import {Operation} from './operationType'
import logger from './logger'

export function capitalize1(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
export function decapitalize1(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1)
}
// remember what was computed to issue at most one warning
const computedIds: {[key: string]: string} = {}
export function getOperationId(operation: Operation): string {
  if (operation.operationId) return operation.operationId as string
  else {
    let retVal = computedIds[operation.path]
    if (!retVal) {
      retVal = operation.path
        .split('/')
        .map((v: string, i: number) => (i ? v : operation.operation))
        .map(capitalize1)
        .join('')
      logger.warn(
        `no operationId defined for: ${operation.operation} ${operation.path} , using: ${retVal})`
      )
      computedIds[operation.path] = retVal
    }
    return retVal
  }
}
