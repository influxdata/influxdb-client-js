import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {Flags} from './types'

export interface GetFlagsRequest {}
/**
 * See
 *- {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetFlags }
 */
export class FlagsAPI {
  // internal
  private base: APIBase

  /**
   * Creates FlagsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Return the feature flags for the currently authenticated user.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetFlags }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getFlags(
    request?: GetFlagsRequest,
    requestOptions?: RequestOptions
  ): Promise<Flags> {
    return this.base.request('GET', `/api/v2/flags`, request, requestOptions)
  }
}
