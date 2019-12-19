import SetupApi from '../SetupApi'
import {Transport} from '../transport'
import {
  IsOnboarding,
  OnboardingResponse,
  OnboardingRequest,
} from '../generated/types'

export default class SetupApiImpl implements SetupApi {
  constructor(private transport: Transport) {}
  isOnboarded(): Promise<IsOnboarding> {
    return this.transport.request('/api/v2/setup', '', {method: 'GET'})
  }
  setup(
    request: OnboardingRequest,
    token?: string | undefined
  ): Promise<OnboardingResponse> {
    // token in not documented in open-api description
    const requestBody: any = token ? {...request, token} : request
    return this.transport.request('/api/v2/setup', requestBody, {
      method: 'POST',
      headers: {'content-type': 'application/json', accept: 'application/json'},
    })
  }
}
