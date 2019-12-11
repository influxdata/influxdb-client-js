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
   * Executes the query and asynchronously stream all result lines to consumer.
   * @param record single line in the query result
   */
  queryRaw(query: string, consumer: CommunicationObserver<string>): void
}
