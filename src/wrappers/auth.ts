import {DefaultApi} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: DefaultApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new DefaultApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async signout(): Promise<Response> {
    const {data} = await this.service.postSignout(
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async signin(username: string, password: string): Promise<Response> {
    const {data} = await this.service.postSignin(undefined, {
      ...this.serviceOptions,
      auth: {username, password},
    })

    return data
  }
}
