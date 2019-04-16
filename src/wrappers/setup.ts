import {OnboardingRequest, OnboardingResponse, SetupApi} from '../api'
import {ServiceOptions} from '../types'

interface IStatus {
  allowed: boolean
}

export default class {
  private service: SetupApi

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new SetupApi({basePath, baseOptions})
  }

  public async create(props: OnboardingRequest): Promise<OnboardingResponse> {
    const {data: response} = await this.service.setupPost(props)

    return response
  }

  public async status(): Promise<IStatus> {
    const {data} = await this.service.setupGet()

    return {allowed: !!data.allowed}
  }
}
