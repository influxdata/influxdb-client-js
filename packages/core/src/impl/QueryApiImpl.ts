import {Observable} from '../observable'
import FluxResultObserver from '../query/FluxResultObserver'
import QueryApi, {QueryOptions, Row, defaultRowMapping} from '../QueryApi'
import {CommunicationObserver, Transport} from '../transport'
import ChunksToLines from './ChunksToLines'
import {toLineObserver} from './linesToTables'
import ObservableQuery, {QueryExecutor} from './ObservableQuery'
import {ParameterizedQuery} from '../query/flux'
import {FluxTableMetaData} from '../query'

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
  constructor(private transport: Transport, org: string | QueryOptions) {
    this.options = typeof org === 'string' ? {org} : org
  }

  with(options: Partial<QueryOptions>): QueryApi {
    return new QueryApiImpl(this.transport, {...this.options, ...options})
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

  collectRows<T>(
    query: string | ParameterizedQuery,
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
      this.queryRows(query, {
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

  collectLines(query: string | ParameterizedQuery): Promise<Array<string>> {
    const retVal: Array<string> = []
    return new Promise((resolve, reject) => {
      this.queryLines(query, {
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

  queryRaw(query: string | ParameterizedQuery): Promise<string> {
    const {org, type, gzip} = this.options
    return this.transport.request(
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
          accept: 'text/csv',
          'accept-encoding': gzip ? 'gzip' : 'identity',
          'content-type': 'application/json; encoding=utf-8',
        },
      }
    )
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
    request.type = this.options.type ?? 'flux'
    return request
  }
}

export default QueryApiImpl
