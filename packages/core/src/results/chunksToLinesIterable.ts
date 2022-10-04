import {ChunkCombiner, createTextDecoderCombiner} from './chunkCombiner'

/**
 * ChunksToLinesIterable is a transformation that accepts
 * an iterable of Uint8Array instancesand returns iterable of lines.
 * @param source - iterable of transport buffers
 * @param chunkCombiner - chunk combiner
 * @returns iterable of lines
 */
export async function* chunksToLinesIterable(
  source: AsyncIterable<Uint8Array>,
  chunkCombiner?: ChunkCombiner
): AsyncIterableIterator<string> {
  const chunks = chunkCombiner ?? createTextDecoderCombiner()
  let previous: Uint8Array | undefined
  let quoted = false

  for await (let chunk of source) {
    let index: number
    let start = 0
    if (previous) {
      index = previous.length
      chunk = chunks.concat(previous, chunk)
    } else {
      index = 0
    }
    while (index < chunk.length) {
      const c = chunk[index]
      if (c === 10) {
        if (!quoted) {
          /* do not emit CR+LR or LF line ending */
          const end = index > 0 && chunk[index - 1] === 13 ? index - 1 : index
          yield chunks.toUtf8String(chunk, start, end)
          start = index + 1
        }
      } else if (c === 34 /* " */) {
        quoted = !quoted
      }
      index++
    }
    if (start < chunk.length) {
      previous = chunks.copy(chunk, start, chunk.length)
    } else {
      previous = undefined
    }
  }
  if (previous) {
    yield chunks.toUtf8String(previous, 0, previous.length)
  }
}
