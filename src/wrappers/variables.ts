import { Variable, VariablesApi } from "../api";

export default class {
  private service: VariablesApi;

  constructor(basePath: string) {
    this.service = new VariablesApi({basePath});
  }

  public async getAllByOrg(org: string): Promise<Variable[]> {
    const {data: {variables}} = await this.service.variablesGet(undefined, org);

    return variables || [];
  }

  public async create(variable: Variable): Promise<Variable> {
    const {data} = await this.service.variablesPost(variable);

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.variablesVariableIDDelete(id);

    return data;
  }
}
