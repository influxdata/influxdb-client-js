import { Macro, MacrosApi } from "../api";

export default class {
  private service: MacrosApi;

  constructor(basePath: string) {
    this.service = new MacrosApi({basePath});
  }

  public async getAllByOrg(org: string): Promise<Macro[]> {
    const {data: {macros}} = await this.service.macrosGet(undefined, org);

    return macros || [];
  }

  public async create(macro: Macro): Promise<Macro> {
    const {data} = await this.service.macrosPost(macro);

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.macrosMacroIDDelete(id);

    return data;
  }
}
