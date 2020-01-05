import {OnboardingResponse, OnboardingRequest} from './generated/types'

/**
 * See <a href="https://v2.docs.influxdata.com/v2.0/api/#tag/Setup">https://v2.docs.influxdata.com/v2.0/api/#tag/Setup</a>.
 */
export default interface SetupApi {
  /**
   * Is on-boarding still allowed.
   * @return false if it was already performed
   */
  isOnboarding(): Promise<boolean>
  /**
   * Setups a (new) influx DB instance.
   * @param request default user and password, organization, bucket
   * @param token optional authentication token to be used with that user
   */
  setup(request: OnboardingRequest, token?: string): Promise<OnboardingResponse>
}
