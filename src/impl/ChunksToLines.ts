import {CommunicationObserver, Cancellable} from '../transport'
import {Buffer} from 'buffer'
/**
 * Receives data in chunks and fires just lines
 */
export default class ChunksToLines implements CommunicationObserver<any> {
  previous?: Buffer
  finished = false

  constructor(private target: CommunicationObserver<string>) {}

  next(chunk: any): void {
    if (this.finished) return
    if (Buffer.isBuffer(chunk)) {
      this.bufferReceived(chunk)
    } else {
      this.error(new Error('Only node buffer chunks are supported!'))
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
        this.target.next(this.previous.toString('utf8'))
      }
      this.finished = true
      this.target.complete()
    }
  }
  useCancellable(cancellable: Cancellable): void {
    this.target.useCancellable && this.target.useCancellable(cancellable)
  }

  private bufferReceived(chunk: Buffer): void {
    let index: number
    let start = 0
    if (this.previous) {
      chunk = Buffer.concat([this.previous as Buffer, chunk])
      index = (this.previous as Buffer).length
    } else {
      index = 0
    }
    let quoted = false
    while (index < chunk.length) {
      const c = chunk.readInt8(index)
      if (c === 10) {
        if (!quoted) {
          /* do not emit CR+LR or LF line ending */
          const end =
            index > 0 && chunk.readInt8(index - 1) === 13 ? index - 1 : index
          this.target.next(chunk.toString('utf8', start, end))
          start = index + 1
        }
      } else if (c === 34 /* " */) {
        quoted = !quoted
      }
      index++
    }
    if (start < index) {
      this.previous = Buffer.allocUnsafe(index - start)
      chunk.copy(this.previous, 0, start, index)
    } else {
      this.previous = undefined
    }
  }
}
