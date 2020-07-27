import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {IsOnboarding, OnboardingRequest, OnboardingResponse} from './types'

export interface GetSetupRequest {}
export interface PostSetupRequest {
  /** Source to create */
  body: OnboardingRequest
}
export interface PostSetupUserRequest {
  /** Source to create */
  body: OnboardingRequest
}
/**
 * Setup API
 */
export class SetupAPI {
  // internal
  private base: APIBase

  /**
   * Creates SetupAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Check if database has default user, org, bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetSetup }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getSetup(
    request?: GetSetupRequest,
    requestOptions?: RequestOptions
  ): Promise<IsOnboarding> {
    return this.base.request('GET', `/api/v2/setup`, request, requestOptions)
  }
  /**
   * Set up initial user, org and bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostSetup }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postSetup(
    request: PostSetupRequest,
    requestOptions?: RequestOptions
  ): Promise<OnboardingResponse> {
    return this.base.request(
      'POST',
      `/api/v2/setup`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Set up a new user, org and bucket.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostSetupUser }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postSetupUser(
    request: PostSetupUserRequest,
    requestOptions?: RequestOptions
  ): Promise<OnboardingResponse> {
    return this.base.request(
      'POST',
      `/api/v2/setup/user`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
