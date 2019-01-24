import { ScraperTargetsApi, ScraperTargetResponse } from "../api";

export default class {
  private service: ScraperTargetsApi

  constructor(basePath: string) {
    this.service = new ScraperTargetsApi({basePath})
  }

  public async getAll(): Promise<ScraperTargetResponse[]> {
    const {data: {configurations}} = await this.service.scrapersGet()

    return configurations || []
  }

  public async deleteScraper(id: string): Promise<Response> {
    const {data} = await this.service.scrapersScraperTargetIDDelete(id)

    return data
  }
}