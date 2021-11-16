import {Observable} from '../observable'
import QueryApi, {QueryOptions} from '../QueryApi'
import {Transport} from '../transport'
import {
  CommunicationObserver,
  FluxResultObserver,
  FluxTableMetaData,
  Row,
  AnnotatedCSVResponse,
} from '../results'
import {ParameterizedQuery} from '../query/flux'
import {APIExecutor} from '../results/ObservableQuery'

const DEFAULT_dialect: any = {
  header: true,
  delimiter: ',',
  quoteChar: '"',
  commentPrefix: '#',
  annotations: ['datatype', 'group', 'default'],
}

export class QueryApiImpl implements QueryApi {
  private options: QueryOptions
  constructor(
    private transport: Transport,
    private createCSVResponse: (executor: APIExecutor) => AnnotatedCSVResponse,
    org: string | QueryOptions
  ) {
    this.options = typeof org === 'string' ? {org} : org
  }

  with(options: Partial<QueryOptions>): QueryApi {
    return new QueryApiImpl(this.transport, this.createCSVResponse, {
      ...this.options,
      ...options,
    })
  }

  response(query: string | ParameterizedQuery): AnnotatedCSVResponse {
    return this.createCSVResponse(this.createExecutor(query))
  }

  lines(query: string | ParameterizedQuery): Observable<string> {
    return this.response(query).lines()
  }

  rows(query: string | ParameterizedQuery): Observable<Row> {
    return this.response(query).rows()
  }

  queryLines(
    query: string | ParameterizedQuery,
    consumer: CommunicationObserver<string>
  ): void {
    return this.response(query).consumeLines(consumer)
  }

  queryRows(
    query: string | ParameterizedQuery,
    consumer: FluxResultObserver<string[]>
  ): void {
    return this.response(query).consumeRows(consumer)
  }

  collectRows<T>(
    query: string | ParameterizedQuery,
    rowMapper?: (
      values: string[],
      tableMeta: FluxTableMetaData
    ) => T | undefined
  ): Promise<Array<T>> {
    return this.response(query).collectRows(rowMapper)
  }

  collectLines(query: string | ParameterizedQuery): Promise<Array<string>> {
    return this.response(query).collectLines()
  }

  queryRaw(query: string | ParameterizedQuery): Promise<string> {
    const {org, type, gzip, headers} = this.options
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
          ...headers,
        },
      }
    )
  }

  private createExecutor(query: string | ParameterizedQuery): APIExecutor {
    const {org, type, gzip, headers} = this.options

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
            ...headers,
          },
        },
        consumer
      )
    }
  }
  private decorateRequest(request: any): any {
    if (typeof this.options.now === 'function') {
      request.now = this.options.now()
    }
    // https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostQuery requires type
    request.type = this.options.type ?? 'flux'
    return request
  }
}

export default QueryApiImpl
