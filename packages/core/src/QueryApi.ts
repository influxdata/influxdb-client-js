import {Observable} from './observable'
import {ParameterizedQuery} from './query'
import {
  AnnotatedCSVResponse,
  CommunicationObserver,
  FluxResultObserver,
  FluxTableMetaData,
  Row,
} from './results'

/** QueryOptions contains QueryApi configuration options. */
export interface QueryOptions {
  /**
   * Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably.
   */
  org: string
  /**
   * Type of the query, default is "flux"
   */
  type?: 'flux'
  /**
   * Requests gzip encoded response.
   */
  gzip?: boolean
  /**
   * Specifies the time that should be reported as "now" in the query. RFC3339 value must be returned,
   * for example `new Date().toISOString()`.
   */
  now?: () => string
  /**
   * HTTP headers that will be sent with every query request.
   */
  headers?: {[key: string]: string}
}

/**
 * Query InfluxDB 2.0. Provides methods that notify abouts result lines of the executed query.
 * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostQuery }
 */
export default interface QueryApi {
  /**
   * Returns a new query API with extra options applied.
   * @param options - query options to use
   * @returns queryApi instance with the supplied options
   */
  with(options: Partial<QueryOptions>): QueryApi

  /**
   * Response returns an AnnotatedCSVResponse instance that executes
   * the query when asked for data.
   *
   * @param query - query
   * @returns response with various methods to process data from the returned annotated
   * CSV response data stream
   */
  response(query: string | ParameterizedQuery): AnnotatedCSVResponse

  /**
   * Creates a cold observable of the lines returned by the given query.
   *
   * @param query - query
   * @returns observable of CSV result lines
   */
  lines(query: string | ParameterizedQuery): Observable<string>

  /**
   * Creates a cold observable of the rows returned by the given query.
   *
   * @param query - query
   * @returns observable of result rows
   */
  rows(query: string | ParameterizedQuery): Observable<Row>

  /**
   * Executes the query and receives result lines (including empty and annotation lines)
   * through the supplied consumer. See [annotated-csv](https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/).
   *
   * @param query - query
   * @param consumer - csv result lines and error consumer
   */
  queryLines(
    query: string | ParameterizedQuery,
    consumer: CommunicationObserver<string>
  ): void

  /**
   * Executes the query and receives table metadata and rows through the supplied consumer.
   *
   * @param query - query
   * @param consumer - result rows and error consumer
   */
  queryRows(
    query: string | ParameterizedQuery,
    consumer: FluxResultObserver<string[]>
  ): void

  /**
   * QueryRaw executes a query and returns the full response as a string.
   * Use with caution, a possibly huge stream is copied to memory.
   *
   * @param query - query
   * @returns Promise of response text
   */
  queryRaw(query: string | ParameterizedQuery): Promise<string>

  /**
   * CollectRows executes the query and collects all the results in the returned Promise.
   * This method is suitable to collect simple results. Use with caution,
   * a possibly huge stream of results is copied to memory.
   *
   * @param query - query
   * @param rowMapper - maps the supplied row to an item that is then collected,
   *  undefined return values are not collected. If no rowMapper is supplied,
   *  `row => row.tableMeta.toObject(row.values)` is used.
   * @returns Promise of mapped results
   */
  collectRows<T>(
    query: string | ParameterizedQuery,
    rowMapper?: (
      values: string[],
      tableMeta: FluxTableMetaData
    ) => T | undefined
  ): Promise<Array<T>>

  /**
   * CollectLines executes the query and collects all result lines in the returned Promise.
   * This method is suitable to collect simple results. Use with caution,
   * a possibly huge stream of lines is copied to memory.
   *
   * @param query - query
   * @returns Promise of returned csv lines
   */
  collectLines(query: string | ParameterizedQuery): Promise<Array<string>>
}
