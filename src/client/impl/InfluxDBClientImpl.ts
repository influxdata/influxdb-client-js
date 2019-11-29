import InfluxDBClient from '../InfluxDBClient'
import {ClientOptions} from '../options'
import WriteApi from '../WriteApi'
import WriteApiImpl from './WriteApiImpl'

export class InfluxDBClientImpl implements InfluxDBClient {
  constructor(private options: ClientOptions) {}
  public getWriteApi(): WriteApi {
    return new WriteApiImpl(this.options)
  }
}
