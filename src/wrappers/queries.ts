import { QueryApi } from "../api";
import { IPackage } from "../types";

export default class {
  private service: QueryApi;

  constructor(basePath: string) {
    this.service = new QueryApi({basePath});
  }

  public async ast(query: string): Promise<IPackage> {
    const { data } = await this.service.queryAstPost(undefined, undefined, { query });

    return data.ast;
  }
}
