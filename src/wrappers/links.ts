import { DefaultApi, Routes } from "../api";

export default class {
  private service: DefaultApi

  constructor(basePath: string) {
    this.service = new DefaultApi({ basePath })
  }

  public async getAll(): Promise<Routes> {
    const {data} = await this.service.rootGet()

    return data
  }
}