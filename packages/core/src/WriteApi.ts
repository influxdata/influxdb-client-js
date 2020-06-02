import Point from './Point'

/**
 * The asynchronous buffering API to Write time-series data into InfluxDB 2.0.
 * This API always buffers points/lines to create batches under the hood
 * to optimize data transfer to InfluxDB server, use `flush` to send
 * the buffered data to InfluxDB immediately.
 * <p>
 * The data are formatted in [Line Protocol](https://bit.ly/2QL99fu).
 * <p>
 */
export default interface WriteApi {
  /**
   * Instructs to use the following default tags  when writing points.
   * Not applicable for writing records/lines.
   * @param tags
   */
  useDefaultTags(tags: {[key: string]: string}): WriteApi

  /**
   * Write a line of [Line Protocol](https://bit.ly/2QL99fu).
   *
   * @param record line in InfluxDB Line Protocol.
   */
  writeRecord(record: string): void

  /**
   * Write lines of [Line Protocol](https://bit.ly/2QL99fu).
   *
   * @param records lines in InfluxDB Line Protocol
   */
  writeRecords(records: Array<string>): void

  /**
   * Write point.
   *
   * @param point point to write
   */
  writePoint(point: Point): void

  /**
   * Write points.
   *
   * @param points points to write
   */
  writePoints(points: ArrayLike<Point>): void

  /**
   * Flushes pending writes to the server.
   * @return completition promise
   */
  flush(): Promise<void>

  /**
   * Flushes this writer and cancels retries of write operations that failed.
   * @return completition promise
   */
  close(): Promise<void>

  /**
   * Unlike close, dispose simply quits without trying to flush
   * the buffered data.
   */
  dispose(): void
}
