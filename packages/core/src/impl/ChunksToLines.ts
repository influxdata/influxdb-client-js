import {CommunicationObserver, ChunkCombiner} from '../transport'
import Cancellable from '../util/Cancellable'

/**
 * Converts lines to table calls
 */
export default class ChunksToLines
  implements CommunicationObserver<Uint8Array> {
  previous?: Uint8Array
  finished = false
  quoted = false

  constructor(
    private target: CommunicationObserver<string>,
    private chunks: ChunkCombiner
  ) {}

  next(chunk: Uint8Array): void {
    if (this.finished) return
    try {
      this.bufferReceived(chunk)
    } catch (e) {
      this.error(e)
    }
  }
  error(error: Error): void {
    if (!this.finished) {
      this.finished = true
      this.target.error(error)
    }
  }
  complete(): void {
    if (!this.finished) {
      if (this.previous) {
        this.target.next(
          this.chunks.toUtf8String(this.previous, 0, this.previous.length)
        )
      }
      this.finished = true
      this.target.complete()
    }
  }
  useCancellable(cancellable: Cancellable): void {
    if (this.target.useCancellable) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self = this
      let cancelled = false
      this.target.useCancellable({
        cancel(): void {
          cancellable.cancel()
          self.previous = undefined // do not emit more lines
          cancelled = true
          self.complete()
        },
        isCancelled(): boolean {
          return cancelled
        },
      })
    }
  }

  private bufferReceived(chunk: Uint8Array): void {
    let index: number
    let start = 0
    if (this.previous) {
      chunk = this.chunks.concat(this.previous, chunk)
      index = (this.previous as Buffer).length
    } else {
      index = 0
    }
    while (index < chunk.length) {
      const c = chunk[index]
      if (c === 10) {
        if (!this.quoted) {
          /* do not emit CR+LR or LF line ending */
          const end = index > 0 && chunk[index - 1] === 13 ? index - 1 : index
          // do not emmit more lines if the processing is already finished
          if (this.finished) {
            return
          }
          this.target.next(this.chunks.toUtf8String(chunk, start, end))
          start = index + 1
        }
      } else if (c === 34 /* " */) {
        this.quoted = !this.quoted
      }
      index++
    }
    if (start < index) {
      this.previous = this.chunks.copy(chunk, start, index)
    } else {
      this.previous = undefined
    }
  }
}
