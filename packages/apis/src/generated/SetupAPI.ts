import {APIBase, RequestOptions} from '../APIBase'
import {IsOnboarding, OnboardingRequest, OnboardingResponse} from './types'

export interface GetSetupRequest {}
export interface PostSetupRequest {
  /** Source to create */
  body: OnboardingRequest
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSetup
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSetup
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetSetup
   */
  getSetup(
    request?: GetSetupRequest,
    requestOptions?: RequestOptions
  ): Promise<IsOnboarding> {
    return this.request('GET', `/api/v2/setup`, request, requestOptions)
  }
  /**
   * Set up initial user, org and bucket.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostSetup
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
