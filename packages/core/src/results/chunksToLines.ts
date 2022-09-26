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
  let paused = false
  let resumeChunks: (() => void) | undefined

  function bufferReceived(chunk: Uint8Array): void {
    let index: number
    let start = 0
    if (previous) {
      // inspect the whole remaining data upon empty chunk
      // empty chunk signalizes to restart of receiving
      index = chunk.length === 0 ? 0 : (previous as Uint8Array).length
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
          // do not emmit more lines if the processing is already finished
          if (finished) {
            return
          }
          paused = target.next(chunks.toUtf8String(chunk, start, end)) === false
          start = index + 1
          if (paused) {
            break
          }
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
    if (paused) {
      if (target.useResume) {
        target.useResume(() => {
          paused = false
          bufferReceived(new Uint8Array(0))
        })
        return
      }
      retVal.error(new Error('Unable to pause, useResume is not configured!'))
      paused = false // consume remaining data
    }
    if (resumeChunks) {
      resumeChunks()
      resumeChunks = undefined
    }
  }

  const retVal: CommunicationObserver<Uint8Array> = {
    next(chunk: Uint8Array): boolean {
      if (!finished) {
        try {
          bufferReceived(chunk)
          return !paused
        } catch (e) {
          this.error(e as Error)
        }
      }
      return true
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
  }
  if (target.useCancellable) {
    retVal.useCancellable = (cancellable: Cancellable) => {
      target.useCancellable &&
        target.useCancellable({
          cancel(): void {
            cancellable.cancel()
            previous = undefined // do not emit more lines
            retVal.complete()
          },
          isCancelled(): boolean {
            return cancellable.isCancelled()
          },
        })
    }
  }
  if (target.useResume) {
    retVal.useResume = (x: () => void) => {
      resumeChunks = x
    }
  }

  return retVal
}
