import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'

export interface PostSignoutRequest {}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignout
 */
export class SignoutAPI extends APIBase {
  /**
   * Creates SignoutAPI
   * @param influxDB InfluxDB
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * Expire the current session.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignout
   * @param request
   * @return promise of response
   */
  postSignout(
    request?: PostSignoutRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request('POST', `/api/v2/signout`, request, requestOptions)
  }
}
