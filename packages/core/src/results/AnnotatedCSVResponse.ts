import {Observable} from '../observable'
import {FluxTableMetaData, Row} from './FluxTableMetaData'
import {CommunicationObserver} from './CommunicationObserver'
import {FluxResultObserver} from './FluxResultObserver'

/**
 * AnnotatedCSVResponse provides various ways of how to
 * process data from an annotated CSV response stream,
 * which is returned as a result of a flux script execution.
 */
export interface AnnotatedCSVResponse {
  /**
   * Lines creates a cold observable of the CSV response lines.
   * @returns observable of CSV result lines
   */
  lines(): Observable<string>
  /**
   * Rows creates a cold observable of the CSV response rows.
   * @returns observable of CSV result rows
   */
  rows(): Observable<Row>
  /**
   * ConsumesLines consumes result lines (including empty and annotation lines)
   * through the supplied consumer. See [annotated-csv](https://docs.influxdata.com/influxdb/latest/reference/syntax/annotated-csv/).
   * @param consumer - csv result lines and error consumer
   */
  consumeLines(consumer: CommunicationObserver<string>): void
  /**
   * ConsumeRows consumes result rows through the supplied consumer.
   *
   * @param consumer - csv result lines and error consumer
   */
  consumeRows(consumer: FluxResultObserver<string[]>): void
  /**
   * CollectRows collects all the result rows in the returned Promise.
   * This method is suitable to collect simple results. Use with caution,
   * a possibly huge stream of results is copied to memory.
   *
   * @param rowMapper - maps the supplied row to an item that is then collected,
   *  undefined return values are not collected. If no rowMapper is supplied,
   *  `row => tableMeta.toObject(row.values)` is used.
   * @returns Promise of mapped results
   */
  collectRows<T>(
    rowMapper?: (
      values: string[],
      tableMeta: FluxTableMetaData
    ) => T | undefined
  ): Promise<Array<T>>

  /**
   * CollectLines collects all result lines in the returned Promise.
   * This method is suitable to collect simple results. Use with caution,
   * a possibly huge stream of lines is copied to memory.
   *
   * @returns Promise of returned csv lines
   */
  collectLines(): Promise<Array<string>>
}
