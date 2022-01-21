/**
 * Utf8Length returns an expected length of a string when UTF-8 encoded.
 * @param s - input string
 * @returns expected count of bytes
 */
export default function utf8Length(s: string): number {
  let retVal = s.length
  // extends the size with code points (https://en.wikipedia.org/wiki/UTF-8#Encoding)
  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i)
    /* istanbul ignore else - JS does not count with 4-bytes UNICODE characters at the moment */
    if (code < 0x80) {
      continue
    } else if (code >= 0x80 && code <= 0x7ff) {
      retVal++
    } else if (code >= 0x800 && code <= 0xffff) {
      if (code >= 0xd800 && code <= 0xdfff) {
        // node.js represents unicode characters above 0xffff by two UTF-16 surrogate halves
        // see https://en.wikipedia.org/wiki/UTF-8#Codepage_layout
        retVal++
      } else {
        retVal += 2
      }
    } else {
      // never happens in node.js 14, the situation can vary in the futures or in deno/browsers
      retVal += 3
    }
  }
  return retVal
}
