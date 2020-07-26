import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {Routes} from './types'

export interface GetRoutesRequest {}
/**
 * See
 *- {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetRoutes }
 */
export class RootAPI {
  // internal
  private base: APIBase

  /**
   * Creates RootAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Map of all top level routes available.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetRoutes }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getRoutes(
    request?: GetRoutesRequest,
    requestOptions?: RequestOptions
  ): Promise<Routes> {
    return this.base.request('GET', `/api/v2/`, request, requestOptions)
  }
}
