import FluxResultObserver from '../../../src/query/FluxResultObserver'
import FluxTableMetaData from '../../../src/query/FluxTableMetaData'

export class CollectTablesObserver implements FluxResultObserver<string[]> {
  tables: Array<{index: number; meta: FluxTableMetaData}> = []
  rows: Array<{index: number; row: string[]}> = []
  completed = 0
  failed = 0
  cancellableSet = false
  index = 0
  lastMeta: FluxTableMetaData

  resolve?: (value?: void) => void
  reject?: (reason?: any) => void

  next(row: string[], meta: FluxTableMetaData): void {
    if (this.lastMeta !== meta) {
      this.tables.push({index: this.index++, meta})
      this.lastMeta = meta
    }
    this.rows.push({index: this.index++, row})
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
  ): CollectTablesObserver {
    this.resolve = resolve
    this.reject = reject
    return this
  }
}
