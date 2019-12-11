import {CommunicationObserver} from '../../../src/transport'

export class CollectLinesObserver implements CommunicationObserver<string> {
  lines: string[] = []
  completed = 0
  failed = 0
  cancellableSet = false
  resolve?: (value?: void) => void
  reject?: (reason?: any) => void

  next(data: string): void {
    this.lines.push(data)
  }
  error(error: Error): void {
    this.failed++
    if (this.reject) this.reject(error)
  }
  complete(): void {
    this.completed++
    if (this.resolve) this.resolve()
  }

  attach(
    resolve?: (value?: void) => void,
    reject?: (reason?: any) => void
  ): CollectLinesObserver {
    this.resolve = resolve
    this.reject = reject
    return this
  }
}
