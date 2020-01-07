import SetupApi from '../SetupApi'
import {Transport} from '../transport'

export default class SetupApiImpl implements SetupApi {
  constructor(private transport: Transport) {}
  async isOnboarding(): Promise<boolean> {
    const x = await this.transport.request('/api/v2/setup', '', {method: 'GET'})
    return x.allowed as boolean
  }
  setup(request: {
    username: string
    password: string
    org: string
    bucket: string
    retentionPeriodHrs?: number
    token?: string
  }): Promise<any> {
    // token in not documented in open-api description
    return this.transport.request('/api/v2/setup', request, {
      method: 'POST',
      headers: {'content-type': 'application/json', accept: 'application/json'},
    })
  }
}
