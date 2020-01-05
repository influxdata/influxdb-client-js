import SetupApi from '../SetupApi'
import {Transport} from '../transport'
import {OnboardingResponse, OnboardingRequest} from '../generated/types'

export default class SetupApiImpl implements SetupApi {
  constructor(private transport: Transport) {}
  async isOnboarding(): Promise<boolean> {
    const x = await this.transport.request('/api/v2/setup', '', {method: 'GET'})
    return x.allowed as boolean
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
