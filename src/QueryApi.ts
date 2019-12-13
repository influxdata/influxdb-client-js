import {CommunicationObserver} from './transport'
import FluxResultObserver from './query/FluxResultObserver'

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
}

/**
 * Query InfluxDB 2.0.
 */
export default interface QueryApi {
  /**
   * Adds extra options for this query API.
   * @param options
   * @return this
   */
  with(options: Partial<QueryOptions>): QueryApi

  /**
   * Executes the query and receives result lines (including empty and annotation lines)
   * through the supplied consumer. See <a href="https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/">annotated-csv</a>.
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
  queryTables(query: string, consumer: FluxResultObserver<string[]>): void
}
