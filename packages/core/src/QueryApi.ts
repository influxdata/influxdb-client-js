import {Observable} from './observable'
import {
  FluxResultObserver,
  FluxTableMetaData,
  ParameterizedQuery,
} from './query'
import {CommunicationObserver} from './transport'

export function defaultRowMapping(
  values: string[],
  tableMeta: FluxTableMetaData
): Record<string, any> {
  return tableMeta.toObject(values)
}

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
   * @param query query
   */
  lines(query: string | ParameterizedQuery): Observable<string>

  /**
   * Creates a cold observable of the rows returned by the given query.
   *
   * @param query query
   */
  rows(query: string | ParameterizedQuery): Observable<Row>

  /**
   * Executes the query and receives result lines (including empty and annotation lines)
   * through the supplied consumer. See [annotated-csv](https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/).
   *
   * @param query query
   * @param consumer data/error consumer
   */
  queryLines(
    query: string | ParameterizedQuery,
    consumer: CommunicationObserver<string>
  ): void

  /**
   * Executes the query and receives table metadata and rows through the supplied consumer.
   *
   * @param query query
   * @param consumer data/error consumer
   */
  queryRows(
    query: string | ParameterizedQuery,
    consumer: FluxResultObserver<string[]>
  ): void

  /**
   * CollectRows executes the query and collects all the results in the returned Promise.
   * This method is suitable to collect simple results. Use with caution,
   * a possibly huge stream of results is copied to memory.
   *
   * @param query query
   * @param rowMapper maps the supplied row to an item that is then collected,
   *  undefined return values are not collected. If no rowMapper is supplied,
   *  `row => row.tableMeta.toObject(row.values)` is used.
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
   * @param query query
   */
  collectLines(query: string | ParameterizedQuery): Promise<Array<string>>
}
