import { Authorization, AuthorizationsApi } from "../api";

export default class {
  private service: AuthorizationsApi;

  constructor(basePath: string) {
    this.service = new AuthorizationsApi({basePath});
  }

  public async get(id: string): Promise<Authorization> {
    const {data} = await this.service.authorizationsAuthIDGet(id);

    return data;
  }

  public async getAll(): Promise<Authorization[]> {
    const {data: {authorizations}} = await this.service.authorizationsGet();

    return authorizations || [];
  }

  public async update(id: string, update: Partial<Authorization>): Promise<Authorization> {
    const original = await this.get(id);
    const {data} = await this.service.authorizationsAuthIDPatch(id, {...original, ...update});

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.authorizationsAuthIDDelete(id);

    return data;
  }
}
