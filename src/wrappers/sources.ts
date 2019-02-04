import { Source, SourcesApi } from "../api";

export default class {
  private service: SourcesApi;

  constructor(basePath: string) {
    this.service = new SourcesApi({basePath});
  }

  public async get(id: string): Promise<Source> {
    const {data: source} = await this.service.sourcesSourceIDGet(id);

    return source;
  }

  public async getAll(): Promise<Source[]> {
    return this.getAllByOrg("");
  }

  public async getAllByOrg(org: string): Promise<Source[]> {
    const {data: {sources}} = await this.service.sourcesGet("");

    return sources || [];
  }

  public async create(org: string, props: Source): Promise<Source> {
    const {data} = await this.service.sourcesPost(org, props);

    return data;
  }

  public async update(id: string, props: Partial<Source>): Promise<Source> {
    const original = this.get(id);
    const {data} = await this.service.sourcesSourceIDPatch(id, {...original, ...props});

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.sourcesSourceIDDelete(id);

    return data;
  }

  public async health(id: string): Promise<Source> {
    const {data} = await this.service.sourcesSourceIDHealthGet(id);

    return data;
  }
}
