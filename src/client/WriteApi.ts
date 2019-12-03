/**
 * The asynchronous non-blocking API to Write time-series data into InfluxDB 2.0.
 * <p>
 * The data are formatted in <a href="https://bit.ly/2QL99fu">Line Protocol</a>.
 * <p>
 */
export default interface WriteApi {
  /**
   * Write Line Protocol record into specified bucket.
   *
   * @param record    specifies the record in InfluxDB Line Protocol.
   */
  writeRecord(record: string): void

  /**
   * Write Line Protocol record into specified bucket.
   *
   * @param record    specifies the record in InfluxDB Line Protocol.
   * @param precision specifies the precision for the generated timestamp
   * @param bucket    specifies the destination bucket for writes
   * @param org       specifies the destination organization for writes
   */
  writeRecords(records: Array<string>): void
}
