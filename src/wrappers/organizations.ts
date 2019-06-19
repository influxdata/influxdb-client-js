import {
  AddResourceMemberRequestBody,
  Organization,
  OrganizationsApi,
  ResourceMember,
  ResourceOwner,
} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: OrganizationsApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new OrganizationsApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async get(id: string): Promise<Organization> {
    const {data} = await this.service.getOrgsID(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async getAll(): Promise<Organization[]> {
    const {
      data: {orgs},
    } = await this.service.getOrgs(
      undefined,
      undefined,
      undefined,
      this.serviceOptions
    )

    return orgs || []
  }

  public async create(org: Organization): Promise<Organization> {
    const {data} = await this.service.postOrgs(
      org,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.deleteOrgsID(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async update(
    id: string,
    org: Partial<Organization>
  ): Promise<Organization> {
    const original = await this.get(id)
    const {data} = await this.service.patchOrgsID(
      id,
      {
        ...original,
        ...org,
      },
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async members(id: string): Promise<ResourceMember[]> {
    const {
      data: {users},
    } = await this.service.getOrgsIDMembers(id, undefined, this.serviceOptions)

    return users || []
  }

  public async owners(id: string): Promise<ResourceOwner[]> {
    const {
      data: {users},
    } = await this.service.getOrgsIDOwners(id, undefined, this.serviceOptions)

    return users || []
  }

  public async createOwner(
    id: string,
    user: AddResourceMemberRequestBody
  ): Promise<ResourceOwner> {
    const {data} = await this.service.postOrgsIDOwners(
      id,
      user,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async addMember(
    id: string,
    user: AddResourceMemberRequestBody
  ): Promise<ResourceMember> {
    const {data} = await this.service.postOrgsIDMembers(
      id,
      user,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async removeMember(orgID: string, userID: string): Promise<Response> {
    const {data} = await this.service.deleteOrgsIDMembersID(
      userID,
      orgID,
      undefined,
      this.serviceOptions
    )
    return data
  }
}
