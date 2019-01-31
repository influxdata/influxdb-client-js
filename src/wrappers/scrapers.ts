import { ScraperTargetRequest, ScraperTargetResponse, ScraperTargetsApi } from "../api";

export default class {
  private service: ScraperTargetsApi;

  constructor(basePath: string) {
    this.service = new ScraperTargetsApi({basePath});
  }

  public async getAll(): Promise<ScraperTargetResponse[]> {
    const {data: {configurations}} = await this.service.scrapersGet();

    return configurations || [];
  }

  public async create(request: ScraperTargetRequest): Promise<ScraperTargetResponse> {
    const {data} = await this.service.scrapersPost(request);

    return data;
  }

  public async update(id: string, changes: ScraperTargetRequest): Promise<ScraperTargetResponse> {
    const {data} = await this.service.scrapersScraperTargetIDPatch(id, changes);

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.scrapersScraperTargetIDDelete(id);

    return data;
  }
}
