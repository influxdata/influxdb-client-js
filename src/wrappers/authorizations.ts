import {Authorization, AuthorizationsApi} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: AuthorizationsApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new AuthorizationsApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async get(id: string): Promise<Authorization> {
    const {data} = await this.service.getAuthorizationsID(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async getAuthorizationToken(username: string): Promise<string | null> {
    const authorizations = await this.getAllByUsername(username)

    if (authorizations[0]) {
      return authorizations[0].token || null
    }

    return null
  }

  public async getAll(orgID?: string): Promise<Authorization[]> {
    const {
      data: {authorizations},
    } = await this.service.getAuthorizations(
      undefined,
      undefined,
      undefined,
      orgID,
      undefined,
      this.serviceOptions
    )

    return authorizations || []
  }

  public async getAllByUsername(username: string): Promise<Authorization[]> {
    const {
      data: {authorizations},
    } = await this.service.getAuthorizations(
      undefined,
      undefined,
      username,
      undefined,
      undefined,
      this.serviceOptions
    )

    return authorizations || []
  }

  public async create(auth: Authorization): Promise<Authorization> {
    const {data} = await this.service.postAuthorizations(
      auth,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async update(
    id: string,
    update: Partial<Authorization>
  ): Promise<Authorization> {
    const original = await this.get(id)
    const {data} = await this.service.patchAuthorizationsID(
      id,
      {
        ...original,
        ...update,
      },
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.deleteAuthorizationsID(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }
}
