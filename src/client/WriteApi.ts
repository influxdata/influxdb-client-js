/**
 * The asynchronous non-blocking API to Write time-series data into InfluxDB 2.0.
 * <p>
 * The data are formatted in <a href="https://bit.ly/2QL99fu">Line Protocol</a>.
 * <p>
 */
export default interface WriteApi {
  /**
   * Write Line Protocol record.
   *
   * @param record line in InfluxDB Line Protocol.
   */
  writeRecord(record: string): void

  /**
   * Write Line Protocol record.
   *
   * @param records lines in InfluxDB Line Protocol
   */
  writeRecords(records: Array<string>): void

  /**
   * Flushes pending writes to the server.
   * @return completition promise
   */
  flush(): Promise<void>

  /**
   * Closes this writer.
   * @return completition promise
   */
  close(): Promise<void>
}
