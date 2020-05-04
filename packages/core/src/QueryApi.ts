import {Observable} from './observable'
import {FluxResultObserver, FluxTableMetaData} from './query'
import {CommunicationObserver} from './transport'

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
  /**
   * Specifies the time that should be reported as "now" in the query. RFC3339 value must be returned,
   * for example `new Date().toISOString()`.
   */
  now?: () => string
}

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
   */
  lines(query: string): Observable<string>

  /**
   * Creates a cold observable of the rows returned by the given query.
   *
   * @param query the query text in the format specifed in `QueryOptions.type`
   */
  rows(query: string): Observable<Row>

  /**
   * Executes the query and receives result lines (including empty and annotation lines)
   * through the supplied consumer. See [annotated-csv](https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/).
   *
   * @param record single line in the query result
   * @param consumer data/error consumer
   */
  queryLines(query: string, consumer: CommunicationObserver<string>): void

  /**
   * Executes the query and receives table metadata and rows through the supplied consumer.
   *
   * @param record single line in the query result
   * @param consumer data/error consumer
   */
  queryRows(query: string, consumer: FluxResultObserver<string[]>): void
}
