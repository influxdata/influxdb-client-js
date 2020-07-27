/** Property that offers a function that returns flux-sanitized value of an object.  */
export const FLUX_VALUE = Symbol('FLUX_VALUE')

/**
 * A flux parameter can print its (sanitized) flux value.
 */
export interface FluxParameterLike {
  [FLUX_VALUE](): string
}

/**
 * Represents a parameterized query.
 */
export interface ParameterizedQuery {
  /**
   * Returns flux query with sanitized parameters.
   */
  toString(): string
}

class FluxParameter implements FluxParameterLike, ParameterizedQuery {
  constructor(private fluxValue: string) {}
  toString(): string {
    return this.fluxValue
  }
  [FLUX_VALUE](): string {
    return this.fluxValue
  }
}

/**
 * Escapes content of the supplied string so it can be wrapped into double qoutes
 * to become a [flux string literal](https://docs.influxdata.com/flux/v0.65/language/lexical-elements/#string-literals).
 * @param value - string value
 * @returns sanitized string
 */
function sanitizeString(value: any): string {
  if (value === null || value === undefined) return ''
  value = value.toString()
  let retVal: any = undefined
  let i = 0
  function prepareRetVal(): void {
    if (retVal === undefined) {
      retVal = value.substring(0, i)
    }
  }
  for (; i < value.length; i++) {
    const c = value.charAt(i)
    switch (c) {
      case '\r':
        prepareRetVal()
        retVal += '\\r'
        break
      case '\n':
        prepareRetVal()
        retVal += '\\n'
        break
      case '\t':
        prepareRetVal()
        retVal += '\\t'
        break
      case '"':
      case '\\':
        prepareRetVal()
        retVal = retVal + '\\' + c
        break
      case '$':
        // escape ${
        if (i + 1 < value.length && value.charAt(i + 1) === '{') {
          prepareRetVal()
          i++
          retVal += '\\${'
          break
        }
        // append $
        if (retVal != undefined) {
          retVal += c
        }
        break
      default:
        if (retVal != undefined) {
          retVal += c
        }
    }
  }
  if (retVal !== undefined) {
    return retVal
  }
  return value
}

/**
 * Creates a flux string literal.
 */
export function fluxString(value: any): FluxParameterLike {
  return new FluxParameter(`"${sanitizeString(value)}"`)
}

/**
 * Creates a flux integer literal.
 */
export function fluxInteger(value: any): FluxParameterLike {
  const val = String(value)
  for (const c of val) {
    if (c < '0' || c > '9') throw new Error(`not a flux integer: ${val}`)
  }
  return new FluxParameter(val)
}

/**
 * Sanitizes float value to avoid injections.
 * @param value - InfluxDB float literal
 * @returns sanitized float value
 * @throws Error if the the value cannot be sanitized
 */
export function sanitizeFloat(value: any): string {
  const val = String(value)
  let dot = false
  for (const c of val) {
    if (c === '.') {
      if (dot) throw new Error(`not a flux float: ${val}`)
      dot = !dot
    }
    if (c !== '.' && (c < '0' || c > '9'))
      throw new Error(`not a flux float: ${val}`)
  }
  return val
}
/**
 * Creates a flux float literal.
 */
export function fluxFloat(value: any): FluxParameterLike {
  return new FluxParameter(sanitizeFloat(value))
}

function sanitizeDateTime(value: any): string {
  return `time(v: "${sanitizeString(value)}")`
}

/**
 * Creates flux date-time literal.
 */
export function fluxDateTime(value: any): FluxParameterLike {
  return new FluxParameter(sanitizeDateTime(value))
}

/**
 * Creates flux date-time literal.
 */
export function fluxDuration(value: any): FluxParameterLike {
  return new FluxParameter(`duration(v: "${sanitizeString(value)}")`)
}

function sanitizeRegExp(value: any): string {
  return `regexp.compile(v: "${sanitizeString(value)}")`
}

/**
 * Creates flux regexp literal.
 */
export function fluxRegExp(value: any): FluxParameterLike {
  // let the server decide if it can be parsed
  return new FluxParameter(sanitizeRegExp(value))
}

/**
 * Creates flux boolean literal.
 */
export function fluxBool(value: any): FluxParameterLike {
  if (value === 'true' || value === 'false') {
    return new FluxParameter(value)
  }
  return new FluxParameter((!!value).toString())
}

/**
 * Assumes that the supplied value is flux expression or literal that does not need sanitizing.
 *
 * @param value - any value
 * @returns the supplied value as-is
 */
export function fluxExpression(value: any): FluxParameterLike {
  return new FluxParameter(String(value))
}

/**
 * Escapes content of the supplied parameter so that it can be safely embedded into flux query.
 * @param value - parameter value
 * @returns sanitized flux value or an empty string if it cannot be converted
 */
export function toFluxValue(value: any): string {
  if (value === undefined) {
    return ''
  } else if (value === null) {
    return 'null'
  } else if (typeof value === 'boolean') {
    return value.toString()
  } else if (typeof value === 'string') {
    return `"${sanitizeString(value)}"`
  } else if (typeof value === 'number') {
    return sanitizeFloat(value)
  } else if (typeof value === 'object') {
    if (typeof value[FLUX_VALUE] === 'function') {
      return value[FLUX_VALUE]()
    } else if (value instanceof Date) {
      return value.toISOString()
    } else if (value instanceof RegExp) {
      return sanitizeRegExp(value)
    } else if (Array.isArray(value)) {
      return `[${value.map(toFluxValue).join(',')}]`
    }
  }
  // use toString value for unrecognized object, bigint, symbol
  return toFluxValue(value.toString())
}

/**
 * Flux is a tagged template that sanitizes supplied parameters
 * to avoid injection attacks in flux.
 */
export function flux(
  strings: TemplateStringsArray,
  ...values: any
): ParameterizedQuery {
  if (strings.length == 1 && (!values || values.length === 0)) return strings[0] // the simplest case
  const parts = new Array<string>(strings.length + values.length)
  let partIndex = 0
  for (let i = 0; i < strings.length; i++) {
    const text = strings[i]
    parts[partIndex++] = text
    if (i < values.length) {
      const val = values[i]
      let sanitized: string
      if (
        text.endsWith('"') &&
        i + 1 < strings.length &&
        strings[i + 1].startsWith('"')
      ) {
        // parameter is wrapped into flux double quotes
        sanitized = sanitizeString(val)
      } else {
        sanitized = toFluxValue(val)
        if (sanitized === '') {
          throw new Error(
            `Unsupported parameter literal '${val}' at index: ${i}, type: ${typeof val}`
          )
        }
      }
      parts[partIndex++] = sanitized
    } else if (i < strings.length - 1) {
      throw new Error('Too few parameters supplied!')
    }
  }
  // return flux expression so that flux can be embedded into another flux as-is
  return fluxExpression(parts.join(''))
}
