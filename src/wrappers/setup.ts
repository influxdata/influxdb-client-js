import {OnboardingRequest, OnboardingResponse, SetupApi} from '../api'
import {ServiceOptions} from '../types'

interface IStatus {
  allowed: boolean
}

export default class {
  private service: SetupApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new SetupApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async create(props: OnboardingRequest): Promise<OnboardingResponse> {
    const {data: response} = await this.service.postSetup(
      props,
      undefined,
      this.serviceOptions
    )

    return response
  }

  public async status(): Promise<IStatus> {
    const {data} = await this.service.getSetup(undefined, this.serviceOptions)

    return {allowed: !!data.allowed}
  }
}
