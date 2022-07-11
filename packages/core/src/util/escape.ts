function createEscaper(
  characters: string,
  replacements: string[]
): (value: string) => string {
  return function (value: string): string {
    let retVal = ''
    let from = 0
    let i = 0
    while (i < value.length) {
      const found = characters.indexOf(value[i])
      if (found >= 0) {
        retVal += value.substring(from, i)
        retVal += replacements[found]
        from = i + 1
      }
      i++
    }
    if (from == 0) {
      return value
    } else if (from < value.length) {
      retVal += value.substring(from, value.length)
    }
    return retVal
  }
}
function createQuotedEscaper(
  characters: string,
  replacements: string[]
): (value: string) => string {
  const escaper = createEscaper(characters, replacements)
  return (value: string): string => '"' + escaper(value) + '"'
}

/**
 * Provides functions escape specific parts in InfluxDB line protocol.
 */
export const escape = {
  /**
   * Measurement escapes measurement names.
   */
  measurement: createEscaper(', \n\r\t', ['\\,', '\\ ', '\\n', '\\r', '\\t']),
  /**
   * Quoted escapes quoted values, such as database names.
   */
  quoted: createQuotedEscaper('"\\', ['\\"', '\\\\']),

  /**
   * TagEscaper escapes tag keys, tag values, and field keys.
   */
  tag: createEscaper(', =\n\r\t', ['\\,', '\\ ', '\\=', '\\n', '\\r', '\\t']),
}
