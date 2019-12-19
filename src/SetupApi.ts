import {
  IsOnboarding,
  OnboardingResponse,
  OnboardingRequest,
} from './generated/types'

/**
 * See <a href="https://v2.docs.influxdata.com/v2.0/api/#tag/Setup">https://v2.docs.influxdata.com/v2.0/api/#tag/Setup</a>.
 */
export default interface SetupApi {
  isOnboarded(): Promise<IsOnboarding>
  setup(request: OnboardingRequest, token?: string): Promise<OnboardingResponse>
}
