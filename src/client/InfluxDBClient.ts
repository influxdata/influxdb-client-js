import WriteApi from './WriteApi'
import {ClientOptions} from './options'
import WriteApiImpl from './impl/WriteApiImpl'

/**
 * InfluxDB 2.0 client that uses HTTP API described in https://v2.docs.influxdata.com/v2.0/reference/api/ .
 */
export class InfluxDBClient {
  constructor(private options: ClientOptions) {}
  getWriteApi(): WriteApi {
    return new WriteApiImpl(this.options)
  }
}
