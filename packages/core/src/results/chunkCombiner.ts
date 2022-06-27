/**
 * ChunkCombiner is a simplified platform-neutral manipulation of Uint8arrays
 * that allows to process text data on the fly. The implementation can be optimized
 * for the target platform (node vs browser).
 */
export interface ChunkCombiner {
  /**
   * Concatenates first and second chunk.
   * @param first - first chunk
   * @param second - second chunk
   * @returns first + second
   */
  concat(first: Uint8Array, second: Uint8Array): Uint8Array

  /**
   * Converts chunk into a string.
   * @param chunk - chunk
   * @param start - start index
   * @param end - end index
   * @returns string representation of chunk slice
   */
  toUtf8String(chunk: Uint8Array, start: number, end: number): string

  /**
   * Creates a new chunk from the supplied chunk.
   * @param chunk - chunk to copy
   * @param start - start index
   * @param end - end index
   * @returns a copy of a chunk slice
   */
  copy(chunk: Uint8Array, start: number, end: number): Uint8Array
}

// TextDecoder is available since node v8.3.0 and in all modern browsers
declare class TextDecoder {
  constructor(encoding: string)
  decode(chunk: Uint8Array): string
}

/**
 * Creates a chunk combiner instance that uses UTF-8
 * TextDecoder to decode Uint8Arrays into strings.
 */
export function createTextDecoderCombiner(): ChunkCombiner {
  const decoder = new TextDecoder('utf-8')
  return {
    concat(first: Uint8Array, second: Uint8Array): Uint8Array {
      const retVal = new Uint8Array(first.length + second.length)
      retVal.set(first)
      retVal.set(second, first.length)
      return retVal
    },
    copy(chunk: Uint8Array, start: number, end: number): Uint8Array {
      const retVal = new Uint8Array(end - start)
      retVal.set(chunk.subarray(start, end))
      return retVal
    },
    toUtf8String(chunk: Uint8Array, start: number, end: number): string {
      return decoder.decode(chunk.subarray(start, end))
    },
  }
}
