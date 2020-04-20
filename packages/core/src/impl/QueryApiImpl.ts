import {Observable} from '../observable'
import FluxResultObserver from '../query/FluxResultObserver'
import QueryApi, {QueryOptions, Row} from '../QueryApi'
import {CommunicationObserver, Transport} from '../transport'
import ChunksToLines from './ChunksToLines'
import {toLineObserver} from './linesToTables'
import ObservableQuery, {QueryExecutor} from './ObservableQuery'

const DEFAULT_dialect: any = {
  header: true,
  delimiter: ',',
  quoteChar: '"',
  commentPrefix: '#',
  annotations: ['datatype', 'group', 'default'],
}
const identity = <T>(value: T): T => value

export class QueryApiImpl implements QueryApi {
  private options: QueryOptions
  constructor(private transport: Transport, org: string) {
    this.options = {org}
  }

  with(options: Partial<QueryOptions>): QueryApi {
    this.options = {...this.options, ...options}
    return this
  }

  lines(query: string): Observable<string> {
    return new ObservableQuery(this.createExecutor(query), identity)
  }

  rows(query: string): Observable<Row> {
    return new ObservableQuery(this.createExecutor(query), observer => {
      return toLineObserver({
        next(values, tableMeta) {
          observer.next({values, tableMeta})
        },
        error(e) {
          observer.error(e)
        },
        complete() {
          observer.complete()
        },
      })
    })
  }

  queryLines(query: string, consumer: CommunicationObserver<string>): void {
    this.createExecutor(query)(consumer)
  }

  queryRows(query: string, consumer: FluxResultObserver<string[]>): void {
    this.createExecutor(query)(toLineObserver(consumer))
  }

  private createExecutor(query: string): QueryExecutor {
    const {org, type, gzip} = this.options

    return (consumer): void => {
      this.transport.send(
        `/api/v2/query?org=${encodeURIComponent(org)}`,
        JSON.stringify({
          query,
          dialect: DEFAULT_dialect,
          type,
        }),
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json; encoding=utf-8',
            'accept-encoding': gzip ? 'gzip' : 'identity',
          },
        },
        new ChunksToLines(consumer, this.transport.chunkCombiner)
      )
    }
  }
}

export default QueryApiImpl
