import {ChunkCombiner, createTextDecoderCombiner} from './chunkCombiner'
import {CommunicationObserver} from './CommunicationObserver'
import {Cancellable} from './Cancellable'

/**
 * ChunksToLines is a transformation that accepts Uint8Array instances
 * and emmits strings representing CSV lines.
 * @param target - target to emmit CSV lines to
 * @param chunks - chunk combiner
 * @returns communication obrver to accept Uint8Arrays
 */
export function chunksToLines(
  target: CommunicationObserver<string>,
  chunkCombiner?: ChunkCombiner
): CommunicationObserver<Uint8Array> {
  const chunks = chunkCombiner ?? createTextDecoderCombiner()
  let previous: Uint8Array | undefined
  let finished = false
  let quoted = false

  function bufferReceived(chunk: Uint8Array): void {
    let index: number
    let start = 0
    if (previous) {
      chunk = chunks.concat(previous, chunk)
      index = (previous as Buffer).length
    } else {
      index = 0
    }
    while (index < chunk.length) {
      const c = chunk[index]
      if (c === 10) {
        if (!quoted) {
          /* do not emit CR+LR or LF line ending */
          const end = index > 0 && chunk[index - 1] === 13 ? index - 1 : index
          // do not emmit more lines if the processing is already finished
          if (finished) {
            return
          }
          target.next(chunks.toUtf8String(chunk, start, end))
          start = index + 1
        }
      } else if (c === 34 /* " */) {
        quoted = !quoted
      }
      index++
    }
    if (start < index) {
      previous = chunks.copy(chunk, start, index)
    } else {
      previous = undefined
    }
  }

  return {
    next(chunk: Uint8Array): void {
      if (finished) return
      try {
        bufferReceived(chunk)
      } catch (e) {
        this.error(e as Error)
      }
    },
    error(error: Error): void {
      if (!finished) {
        finished = true
        target.error(error)
      }
    },
    complete(): void {
      if (!finished) {
        if (previous) {
          target.next(chunks.toUtf8String(previous, 0, previous.length))
        }
        finished = true
        target.complete()
      }
    },
    useCancellable(cancellable: Cancellable): void {
      if (target.useCancellable) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this
        target.useCancellable({
          cancel(): void {
            cancellable.cancel()
            previous = undefined // do not emit more lines
            self.complete()
          },
          isCancelled(): boolean {
            return cancellable.isCancelled()
          },
        })
      }
    },
  }
}
