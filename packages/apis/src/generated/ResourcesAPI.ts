import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'

export interface GetResourcesRequest {}
/**
 * Resources API
 */
export class ResourcesAPI {
  // internal
  private base: APIBase

  /**
   * Creates ResourcesAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all known resources.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetResources }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getResources(
    request?: GetResourcesRequest,
    requestOptions?: RequestOptions
  ): Promise<string[]> {
    return this.base.request(
      'GET',
      `/api/v2/resources`,
      request,
      requestOptions
    )
  }
}
