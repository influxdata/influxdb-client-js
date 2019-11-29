import WriteApi from './WriteApi'

/**
 * InfluxDB 2.0 client that uses HTTP API described in https://v2.docs.influxdata.com/v2.0/reference/api/ .
 */
export default interface InfluxDBClient {
  getWriteApi(): WriteApi
}
