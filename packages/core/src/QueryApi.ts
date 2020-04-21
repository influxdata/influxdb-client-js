import {Observable} from './observable'
import {FluxResultObserver, FluxTableMetaData} from './query'
import {CommunicationObserver} from './transport'
import {FluxRecord} from './util/flux'

export interface QueryOptions {
  /**
   * Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably.
   */
  org: string
  /**
   * Type of the query, default is "flux"
   */
  type?: 'influxql' | 'flux'
  /**
   * Parameters to add to the query, when type is "flux".
   *
   * These get merged with the parameters passed to each query, with the latter
   * taking precedence.
   */
  parameters?: QueryParameters
  /**
   * Required only for "influxql" queries.
   */
  cluster?: string
  /**
   * Required only for "influxql" queries.
   */
  db?: string
  /**
   * Required only for "influxql" queries.
   */
  rp?: string
  /**
   * Requests gzip encoded response.
   */
  gzip?: boolean
}

export type QueryParameters = FluxRecord

/** Wraps values and associated metadata of a query result row */
export interface Row {
  values: string[]
  tableMeta: FluxTableMetaData
}

/**
 * Query InfluxDB 2.0. Provides methods that notify abouts result lines of the executed query.
 * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostQuery
 */
export default interface QueryApi {
  /**
   * Adds extra options for this query API.
   * @param options
   * @return this
   */
  with(options: Partial<QueryOptions>): QueryApi

  /**
   * Creates a cold observable of the lines returned by the given query.
   *
   * @param query the query text in the format specifed in `QueryOptions.type`
   * @param parameters parameters to add to the query, when `QueryOptions.type` is "flux"
   */
  lines(query: string, parameters?: QueryParameters): Observable<string>

  /**
   * Creates a cold observable of the rows returned by the given query.
   *
   * @param query the query text in the format specifed in `QueryOptions.type`
   * @param parameters parameters to add to the query, when `QueryOptions.type` is "flux"
   */
  rows(query: string, parameters?: QueryParameters): Observable<Row>

  /**
   * Executes the query and receives result lines (including empty and annotation lines)
   * through the supplied consumer. See [annotated-csv](https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/).
   *
   * @param record single line in the query result
   * @param parameters parameters to add to the query, when `QueryOptions.type` is "flux"
   * @param consumer data/error consumer
   */
  queryLines(query: string, consumer: CommunicationObserver<string>): void
  queryLines(
    query: string,
    parameters: QueryParameters,
    consumer: CommunicationObserver<string>
  ): void

  /**
   * Executes the query and receives table metadata and rows through the supplied consumer.
   *
   * @param record single line in the query result
   * @param parameters parameters to add to the query, when `QueryOptions.type` is "flux"
   * @param consumer data/error consumer
   */
  queryRows(query: string, consumer: FluxResultObserver<string[]>): void
  queryRows(
    query: string,
    parameters: QueryParameters,
    consumer: FluxResultObserver<string[]>
  ): void
}
