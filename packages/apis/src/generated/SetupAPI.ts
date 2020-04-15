import {APIBase, RequestOptions} from '../APIBase'
import {IsOnboarding, OnboardingRequest, OnboardingResponse} from './types'

export interface GetSetupRequest {}
export interface PostSetupRequest {
  /** Source to create */
  body: OnboardingRequest
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetSetup
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostSetup
 */
export class SetupAPI extends APIBase {
  /**
   * Creates SetupAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Check if database has default user, org, bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetSetup
   * @param request
   * @return promise of response
   */
  getSetup(
    request?: GetSetupRequest,
    requestOptions?: RequestOptions
  ): Promise<IsOnboarding> {
    return this.request('GET', `/api/v2/setup`, request, requestOptions)
  }
  /**
   * Set up initial user, org and bucket.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostSetup
   * @param request
   * @return promise of response
   */
  postSetup(
    request: PostSetupRequest,
    requestOptions?: RequestOptions
  ): Promise<OnboardingResponse> {
    return this.request(
      'POST',
      `/api/v2/setup`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
