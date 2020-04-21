import {Observable} from '../observable'
import FluxResultObserver from '../query/FluxResultObserver'
import QueryApi, {QueryOptions, Row, QueryParameters} from '../QueryApi'
import {CommunicationObserver, Transport} from '../transport'
import {buildExtern} from '../util/flux'
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

  lines(query: string, parameters?: QueryParameters): Observable<string> {
    return new ObservableQuery(this.createExecutor(query, parameters), identity)
  }

  rows(query: string, parameters?: QueryParameters): Observable<Row> {
    return new ObservableQuery(
      this.createExecutor(query, parameters),
      observer => {
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
      }
    )
  }

  queryLines(
    query: string,
    parametersOrConsumer: QueryParameters | CommunicationObserver<string>,
    maybeConsumer?: CommunicationObserver<string>
  ): void {
    const [parameters, consumer] =
      arguments.length > 2
        ? [
            parametersOrConsumer as QueryParameters,
            maybeConsumer as CommunicationObserver<string>,
          ]
        : [undefined, parametersOrConsumer as CommunicationObserver<string>]

    this.createExecutor(query, parameters)(consumer)
  }

  queryRows(
    query: string,
    parametersOrConsumer: QueryParameters | FluxResultObserver<string[]>,
    maybeConsumer?: FluxResultObserver<string[]>
  ): void {
    const [parameters, consumer] =
      arguments.length > 2
        ? [
            parametersOrConsumer as QueryParameters,
            maybeConsumer as FluxResultObserver<string[]>,
          ]
        : [undefined, parametersOrConsumer as FluxResultObserver<string[]>]

    this.createExecutor(query, parameters)(toLineObserver(consumer))
  }

  private createExecutor(
    query: string,
    parameters?: QueryParameters
  ): QueryExecutor {
    const {org, type, gzip} = this.options
    const extern = buildExtern({...this.options.parameters, ...parameters})

    return (consumer): void => {
      this.transport.send(
        `/api/v2/query?org=${encodeURIComponent(org)}`,
        JSON.stringify({
          query,
          dialect: DEFAULT_dialect,
          type,
          extern,
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
