import {capitalize1, decapitalize1, getOperationId} from './format'
import {Operation, Response} from './operationType'
import TypesCollector from './typesCollector'
import logger from './logger'

function getResponse(operation: Operation): Response {
  const validResponse: Array<Response> = operation.responses.filter(
    (x) => x.code === 'default' || x.code < '300'
  )
  if (validResponse.length > 1) {
    if (
      validResponse.length == 2 &&
      validResponse.sort()[1].code !== 'default'
    ) {
      logger.warn(
        `more OK responses available for ${operation.path}: ${validResponse
          .map((x) => x.code)
          .join(',')}`
      )
    }
  }
  return validResponse[0]
}
function getReturnType(operation: Operation): string {
  const response = getResponse(operation)

  if (response.mediaTypes && response.mediaTypes.length) {
    return response.mediaTypes[0].type || 'any'
  } else {
    return 'void'
  }
}
function getBodyType(operation: Operation): string {
  if (operation.bodyParam) {
    return operation.bodyParam.type || 'any'
  } else {
    return 'void'
  }
}
function generateTypes(operation: Operation): string {
  const opId = getOperationId(operation)
  let retVal = `export interface ${opId}Request {\n`
  if (operation.positionalParams && operation.positionalParams.length) {
    for (const param of operation.positionalParams) {
      if (param.description) {
        retVal += `    /** ${param.description} */\n`
      }
      retVal += `    ${param.name}${param.required ? '' : '?'}: ${
        param.type ? param.type : 'string'
      }\n`
    }
  }

  if (operation.basicAuth) {
    retVal += '  auth?: {user: string, password: string}\n'
  }
  if (operation.bodyParam) {
    if (operation.bodyParam.description) {
      retVal += `  /** ${operation.bodyParam.description} */\n`
    } else {
      retVal += `  /** entity body */\n`
    }
    const bodyType = getBodyType(operation)
    retVal += `  body: ${bodyType}\n`
  }
  if (operation.queryParams && operation.queryParams.length) {
    for (const param of operation.queryParams) {
      if (param.description) {
        retVal += `  /** ${param.description} */\n`
      }
      retVal += `    ${param.name}${param.required ? '' : '?'}: ${
        param.type ? param.type : 'string'
      }\n`
    }
  }
  retVal += '}'
  return retVal
}
function requestRequired(operation: Operation): boolean {
  if (operation.basicAuth || operation.bodyParam) return true
  if (operation.positionalParams && operation.positionalParams.length) {
    return true
  }
  if (
    operation.queryParams &&
    operation.queryParams.length &&
    operation.queryParams.some((x) => x.required)
  ) {
    return true
  }
  return false
}

const CLOUD_APIS = ['ScriptsAPI']
function apiDocLink(apiName: string, opID: string): string {
  if (CLOUD_APIS.includes(apiName)) {
    return `https://docs.influxdata.com/influxdb/cloud/api/#operation/${opID}`
  }
  return `https://docs.influxdata.com/influxdb/v2.4/api/#operation/${opID}`
}

function generateClass(
  apiKey: string,
  apiName: string,
  operations: Operation[],
  apiLabel: string
): string {
  let classDef = `/**
 * ${apiLabel} API
 */
export class ${apiName} {
  // internal
  private base: APIBase

  /**
   * Creates ${apiName}
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }`

  for (const operation of operations) {
    const opId = getOperationId(operation)
    if (operation.summary) {
      classDef += `\n  /**
   * ${
     operation.summary
       ? operation.summary.endsWith('.')
         ? operation.summary
         : operation.summary + '.'
       : ''
   }`
    } else {
      classDef += '\n  /**'
    }
    classDef += `
   * See {@link ${apiDocLink(apiName, opId)} }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  ${decapitalize1(opId)}(request${
      requestRequired(operation) ? '' : '?'
    }: ${opId}Request, requestOptions?: RequestOptions): Promise<${getReturnType(
      operation
    )}> {
    return this.base.request('${operation.operation.toUpperCase()}', \`${
      operation.server
    }${operation.path.replace(
      /\{([^}]*)\}/g,
      (_match, param) => '${request.' + param + '}'
    )}${
      operation.queryParams.length
        ? '${this.base.queryString(request,[' +
          operation.queryParams.map((x) => "'" + x.name + "'").join(',') +
          '])}'
        : ''
    }\`, request, requestOptions${
      operation.bodyParam && operation.bodyParam.mediaType
        ? ", '" + operation.bodyParam.mediaType + "'"
        : ''
    })
  }`
  }

  classDef += '\n}\n'

  return classDef
}

export function generateApi(
  apiKey: string,
  operations: Operation[]
): {apiName: string; code: string} {
  const apiLabel = apiKey ? capitalize1(apiKey) : 'Root'
  const apiName = apiLabel + 'API'
  let code = `import {InfluxDB} from '@influxdata/influxdb-client'\n`
  code += `import {APIBase, RequestOptions} from '../APIBase'\n`
  const typesCollector = new TypesCollector()
  for (const operation of operations) {
    typesCollector.add(getReturnType(operation))
    typesCollector.add(getBodyType(operation))
  }
  if (typesCollector.hasTypes()) {
    code += `import {${typesCollector.toString()}} from './types'\n`
  }
  code += '\n'
  for (const operation of operations) {
    code += generateTypes(operation)
    code += '\n'
  }
  code += generateClass(apiKey, apiName, operations, apiLabel)
  return {apiName, code}
}
