import {APIBase, RequestOptions} from '../APIBase'

export interface PostSignoutRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignout
 */
export class SignoutAPI extends APIBase {
  /**
   * Creates SignoutAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Expire the current session.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSignout
   */
  postSignout(
    request?: PostSignoutRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request('POST', `/api/v2/signout`, request, requestOptions)
  }
}
