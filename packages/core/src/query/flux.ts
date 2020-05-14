const SANITIZE_FLUX_PARAMETER = Symbol.for('SANITIZE_FLUX_PARAMETER')

/**
 * A flux parameter like can print a sanitized value.
 */
export interface FluxParameterLike {
  [SANITIZE_FLUX_PARAMETER](): string
}

class FluxParameter implements FluxParameterLike {
  constructor(private value: string) {}
  toString(): string {
    return this.value
  }
  [SANITIZE_FLUX_PARAMETER](): string {
    return this.value
  }
}

/**
 * Escapes content of the supplied string so it can be wrapped into double qoutes
 * to become a [flux string literal](https://docs.influxdata.com/flux/v0.65/language/lexical-elements/#string-literals).
 * @param value string value
 * @return sanitized string
 */
function sanitizeString(value: any): string {
  // TODO sanitize string
  return value
}

/**
 * Creates a flux integer literal.
 * @param value string value
 * @return flux parameter
 */
export function fluxInteger(value: any): FluxParameterLike {
  const val = String(value)
  for (const c of val) {
    if (c < '0' || c > '9') throw new Error(`not a flux integer: ${val}`)
  }
  return new FluxParameter(val)
}

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
 * Creates flux regexp literal
 */
export function fluxRegExp(value: any): FluxParameterLike {
  // let the server decide if it can be parsed
  return new FluxParameter(sanitizeRegExp(value))
}

/**
 * Escapes content of the supplied parameter so that it can be safely embedded into flux query.
 * @param value parameter value
 * @return sanitized value
 */
export function sanitizeParameter(value: any): string {
  if (typeof value === 'string') {
    return `"${sanitizeString(value)}"`
  } else if (typeof value === 'number') {
    return sanitizeFloat(value)
  } else if (
    typeof value === 'object' &&
    typeof value[SANITIZE_FLUX_PARAMETER] === 'function'
  ) {
    return value[SANITIZE_FLUX_PARAMETER]()
  } else if (value instanceof Date) {
    return sanitizeDateTime(value)
  } else if (value instanceof RegExp) {
    return sanitizeRegExp(value)
  }
  return ''
}

/**
 * Flux is a tagged template that sanitizes parameters in a flux query to avoid injection attacks.
 */
export function flux(strings: string[], ...values: any): string {
  const parts = new Array<string>(strings.length + values.length)
  let partIndex = 0
  for (let i = 0; i < strings.length; i++) {
    const text = strings[i]
    parts[partIndex++] = text
    if (i < values.length) {
      const val = values[i]
      const sanitized = sanitizeParameter(val)
      if (sanitized === '') {
        throw new Error(
          `Unsupported parameter literal '${val}' at index: ${i}, type: ${typeof val}`
        )
      }
      parts[partIndex++] = sanitized
    } else if (i < strings.length - 1) {
      throw new Error('Too few parameters supplied!')
    }
  }
  return parts.join('')
}
