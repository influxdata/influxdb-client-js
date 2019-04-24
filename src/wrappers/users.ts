import {User, UsersApi} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: UsersApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new UsersApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async me(): Promise<User> {
    const {data} = await this.service.meGet(undefined, this.serviceOptions)

    return data
  }

  public async get(id: string): Promise<User> {
    const {data} = await this.service.usersUserIDGet(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async getAll(): Promise<User[]> {
    const {data} = await this.service.usersGet(undefined, this.serviceOptions)

    return data.users || []
  }
}
