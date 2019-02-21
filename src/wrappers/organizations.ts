import {
  AddResourceMemberRequestBody,
  Organization,
  OrganizationsApi,
  ResourceMember,
  ResourceOwner,
} from "../api";

export default class {
  private service: OrganizationsApi;

  constructor(basePath: string) {
    this.service = new OrganizationsApi({ basePath });
  }

  public async get(id: string): Promise<Organization> {
    const { data } = await this.service.orgsOrgIDGet(id);

    return data;
  }

  public async getAll(): Promise<Organization[]> {
    const {
      data: { orgs },
    } = await this.service.orgsGet();

    return orgs || [];
  }

  public async create(org: Organization): Promise<Organization> {
    const { data } = await this.service.orgsPost(org);

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const { data } = await this.service.orgsOrgIDDelete(id);

    return data;
  }

  public async update(
    id: string,
    org: Partial<Organization>,
  ): Promise<Organization> {
    const original = await this.get(id);
    const { data } = await this.service.orgsOrgIDPatch(id, {
      ...original,
      ...org,
    });

    return data;
  }

  public async members(id: string): Promise<ResourceMember[]> {
    const {
      data: { users },
    } = await this.service.orgsOrgIDMembersGet(id);

    return users || [];
  }

  public async owners(id: string): Promise<ResourceOwner[]> {
    const {
      data: { users },
    } = await this.service.orgsOrgIDOwnersGet(id);

    return users || [];
  }

  public async createOwner(
    id: string,
    user: AddResourceMemberRequestBody,
  ): Promise<ResourceOwner> {
    const { data } = await this.service.orgsOrgIDOwnersPost(id, user);

    return data;
  }
}
