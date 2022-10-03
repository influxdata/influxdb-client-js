import {
  CommunicationObserver,
  FluxResultObserver,
  FluxTableMetaData,
  Row,
  linesToTables,
  ChunkCombiner,
  chunksToLines,
  chunksToLinesIterable,
  linesToRowsIterable,
} from '../results'
import {Observable} from '../observable'
import {
  AnnotatedCSVResponse,
  IterableResultExecutor,
} from './AnnotatedCSVResponse'
import ObservableQuery, {APIExecutor} from './ObservableQuery'

export function defaultRowMapping(
  values: string[],
  tableMeta: FluxTableMetaData
): Record<string, any> {
  return tableMeta.toObject(values)
}

/**
 * AnnotatedCsvResponseImpl is an implementation AnnotatedCsvResponse
 * that uses the supplied executor to supply a response data stream.
 */
export class AnnotatedCSVResponseImpl implements AnnotatedCSVResponse {
  constructor(
    private executor: APIExecutor,
    private iterableResultExecutor: IterableResultExecutor,
    private chunkCombiner: ChunkCombiner
  ) {}
  iterateLines(): AsyncIterable<string> {
    return chunksToLinesIterable(this.iterableResultExecutor())
  }
  iterateRows(): AsyncIterable<Row> {
    return linesToRowsIterable(
      chunksToLinesIterable(this.iterableResultExecutor())
    )
  }
  lines(): Observable<string> {
    return new ObservableQuery(this.executor, (observer) =>
      chunksToLines(observer, this.chunkCombiner)
    )
  }

  rows(): Observable<Row> {
    return new ObservableQuery(this.executor, (observer) => {
      return chunksToLines(
        linesToTables({
          next(values, tableMeta) {
            observer.next({values, tableMeta})
          },
          error(e) {
            observer.error(e)
          },
          complete() {
            observer.complete()
          },
        }),
        this.chunkCombiner
      )
    })
  }

  consumeLines(consumer: CommunicationObserver<string>): void {
    this.executor(chunksToLines(consumer, this.chunkCombiner))
  }

  consumeRows(consumer: FluxResultObserver<string[]>): void {
    this.executor(chunksToLines(linesToTables(consumer), this.chunkCombiner))
  }

  collectRows<T>(
    rowMapper: (
      values: string[],
      tableMeta: FluxTableMetaData
    ) => T | undefined = defaultRowMapping as (
      values: string[],
      tableMeta: FluxTableMetaData
    ) => T | undefined
  ): Promise<Array<T>> {
    const retVal: Array<T> = []
    return new Promise((resolve, reject) => {
      this.consumeRows({
        next(values: string[], tableMeta: FluxTableMetaData): void {
          const toAdd = rowMapper.call(this, values, tableMeta)
          if (toAdd !== undefined) {
            retVal.push(toAdd)
          }
        },
        error(error: Error): void {
          reject(error)
        },
        complete(): void {
          resolve(retVal)
        },
      })
    })
  }

  collectLines(): Promise<Array<string>> {
    const retVal: Array<string> = []
    return new Promise((resolve, reject) => {
      this.consumeLines({
        next(line: string): void {
          retVal.push(line)
        },
        error(error: Error): void {
          reject(error)
        },
        complete(): void {
          resolve(retVal)
        },
      })
    })
  }
}
