import {Observable} from '../observable'
import FluxResultObserver from '../query/FluxResultObserver'
import QueryApi, {QueryOptions, Row} from '../QueryApi'
import {CommunicationObserver, Transport} from '../transport'
import ChunksToLines from './ChunksToLines'
import {toLineObserver} from './linesToTables'
import ObservableQuery, {QueryExecutor} from './ObservableQuery'
import {ParameterizedQuery} from '../query/flux'

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

  lines(query: string | ParameterizedQuery): Observable<string> {
    return new ObservableQuery(this.createExecutor(query), identity)
  }

  rows(query: string | ParameterizedQuery): Observable<Row> {
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

  queryLines(
    query: string | ParameterizedQuery,
    consumer: CommunicationObserver<string>
  ): void {
    this.createExecutor(query)(consumer)
  }

  queryRows(
    query: string | ParameterizedQuery,
    consumer: FluxResultObserver<string[]>
  ): void {
    this.createExecutor(query)(toLineObserver(consumer))
  }

  private createExecutor(query: string | ParameterizedQuery): QueryExecutor {
    const {org, type, gzip} = this.options

    return (consumer): void => {
      this.transport.send(
        `/api/v2/query?org=${encodeURIComponent(org)}`,
        JSON.stringify(
          this.decorateRequest({
            query: query.toString(),
            dialect: DEFAULT_dialect,
            type,
          })
        ),
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
  private decorateRequest(request: any): any {
    if (typeof this.options.now === 'function') {
      request.now = this.options.now()
    }
    // https://v2.docs.influxdata.com/v2.0/api/#operation/PostQuery requires type
    request.type = this.options.type || 'flux'
    return request
  }
}

export default QueryApiImpl
