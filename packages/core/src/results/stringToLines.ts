import {CommunicationObserver} from './CommunicationObserver'

/**
 * StringToLines is a transformation that emmits strings for each CSV
 * line in the supplied source string.
 * @param source - source string
 * @param target - target to emmit CSV lines to
 * @returns communication obrver to accept Uint8Arrays
 */
export function stringToLines(
  source: string,
  target: CommunicationObserver<string>
): void {
  let quoted = false
  let start = 0
  let index = 0

  while (index < source.length) {
    const c = source.charCodeAt(index)
    if (c === 10) {
      if (!quoted) {
        /* do not emit CR+LR or LF line ending */
        const end =
          index > 0 && source.charCodeAt(index - 1) === 13 ? index - 1 : index
        // do not emmit more lines if the processing is already finished
        target.next(source.substring(start, end))
        start = index + 1
      }
    } else if (c === 34 /* " */) {
      quoted = !quoted
    }
    index++
  }
  if (start < index) {
    target.next(source.substring(start, index))
  }
  target.complete()
}
