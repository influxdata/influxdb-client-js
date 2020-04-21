/*
 * Keep most things private here, since we dont want custom
 * FluxExpressionAstBuilder implementations for now until a decision about query
 * variables was made
 * https://github.com/influxdata/influxdb/issues/16109#issuecomment-561697800
 */

// disable no-use-before-define to keep the exported stuff on top
/* eslint-disable @typescript-eslint/no-use-before-define */

export type FluxExpressionLike =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date
  | FluxRecord
  // flux only allows mono type arrays, but we save us the hassle here for now
  | FluxExpressionLike[]
  | FluxExpressionAstBuilder

export type FluxRecord = {[k: string]: FluxExpressionLike}

export function buildExtern(record?: FluxRecord, name = 'v'): unknown {
  if (record === undefined) {
    return undefined
  }

  return {
    type: 'File',
    package: null,
    imports: null,
    body: [
      {
        type: 'OptionStatement',
        assignment: {
          type: 'VariableAssignment',
          id: {type: 'Identifier', name},
          init: recordToExpressionAst(record),
        },
      },
    ],
  }
}

/**
 * Calls flux' [`duration`](https://v2.docs.influxdata.com/v2.0/reference/flux/stdlib/built-in/transformations/type-conversions/duration/)
 * type conversion function
 */
export function duration(v: string | number): FluxExpressionAstBuilder {
  const ast = callToExpressionAst('duration', {v})

  return {[BUILD_FLUX_EXPRESSION_AST]: (): FluxExpressionAst => ast}
}

const BUILD_FLUX_EXPRESSION_AST = Symbol('BUILD_FLUX_EXPRESSION_AST')

type FluxExpressionAst = unknown
interface FluxExpressionAstBuilder {
  [BUILD_FLUX_EXPRESSION_AST](): FluxExpressionAst
}

function isFluxExpressionAstBuilder(
  value: any
): value is FluxExpressionAstBuilder {
  return typeof value[BUILD_FLUX_EXPRESSION_AST] === 'function'
}

function toExpressionAst(value: FluxExpressionLike): FluxExpressionAst {
  switch (typeof value) {
    case 'bigint':
      throw new Error('bigint not supported')

    case 'boolean':
      return {type: 'Identifier', value: String(value)}

    case 'function':
      throw new Error('function not supported')

    case 'number':
      return numberToExpressionAst(value)

    case 'object':
      if (value === null) {
        return {type: 'Identifier', value: 'null'}
      }

      // we check for builders first to allow custom object/array/date ast builders
      if (isFluxExpressionAstBuilder(value)) {
        return value[BUILD_FLUX_EXPRESSION_AST]()
      }

      if (value instanceof Date) {
        return dateToExpressionAst(value)
      }

      if (Array.isArray(value)) {
        return arrayToExpressionAst(value)
      }

      return recordToExpressionAst(value)

    case 'string':
      return {type: 'StringLiteral', value}

    case 'symbol':
      throw new Error('symbol not supported')

    case 'undefined':
      return {type: 'Identifier', value: 'null'}
  }
}

function numberToExpressionAst(number: number): FluxExpressionAst {
  if (isNaN(number)) {
    throw new Error('NaN not supported')
  }
  if (!Number.isFinite(number)) {
    throw new Error('+/-Inf not supported')
  }

  const type = Number.isInteger(number) ? 'IntegerLiteral' : 'FloatLiteral'
  const value = String(number)

  if (value.startsWith('-')) {
    return {
      type: 'UnaryExpression',
      operator: '-',
      argument: {type, value: value.slice(1)},
    }
  }

  return {type, value}
}

function dateToExpressionAst(date: Date): FluxExpressionAst {
  const iso = date.toISOString()

  if (iso.startsWith('-')) {
    return {
      type: 'UnaryExpression',
      operator: '-',
      argument: {type: 'DateTimeLiteral', value: iso.slice(1)},
    }
  }

  return {type: 'DateTimeLiteral', value: iso}
}

function arrayToExpressionAst(values: FluxExpressionLike[]): FluxExpressionAst {
  return {type: 'ArrayExpression', elements: values.map(toExpressionAst)}
}

function recordToExpressionAst(object: FluxRecord): FluxExpressionAst {
  const properties = Object.entries(object)
    // filter out undefined, same behavior as JSON.stringify
    .filter(([_name, value]) => value !== undefined)
    .map(([name, value]) => ({
      type: 'Property',
      key: {type: 'Identifier', name},
      value: toExpressionAst(value),
    }))

  return {type: 'ObjectExpression', properties}
}

function callToExpressionAst(
  callee: string,
  args: FluxRecord
): FluxExpressionAst {
  return {
    type: 'CallExpression',
    callee: {type: 'Identifier', name: callee},
    arguments: [recordToExpressionAst(args)],
  }
}
