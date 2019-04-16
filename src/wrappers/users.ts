import {User, UsersApi} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: UsersApi

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new UsersApi({basePath, baseOptions})
  }

  public async me(): Promise<User> {
    const {data} = await this.service.meGet()

    return data
  }

  public async get(id: string): Promise<User> {
    const {data} = await this.service.usersUserIDGet(id)

    return data
  }

  public async getAll(): Promise<User[]> {
    const {data} = await this.service.usersGet()

    return data.users || []
  }
}
