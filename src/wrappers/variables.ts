import {Variable, VariablesApi} from '../api'

export default class {
  private service: VariablesApi

  constructor(basePath: string) {
    this.service = new VariablesApi({basePath})
  }

  public async get(id: string): Promise<Variable> {
    const {data: variable} = await this.service.variablesVariableIDGet(id)

    return variable
  }

  public async update(id: string, props: Partial<Variable>): Promise<Variable> {
    const original = await this.get(id)
    const {data} = await this.service.variablesVariableIDPatch(id, {
      ...original,
      ...props,
    })

    return data
  }

  public async getAllByOrg(org: string): Promise<Variable[]> {
    const {
      data: {variables},
    } = await this.service.variablesGet(undefined, org)

    return variables || []
  }

  public async getAll(orgID?: string): Promise<Variable[]> {
    const {
      data: {variables},
    } = await this.service.variablesGet(undefined, undefined, orgID)

    return variables || []
  }

  public async create(variable: Variable): Promise<Variable> {
    const {data} = await this.service.variablesPost(variable)

    return data
  }

  public async createAll(variables: Variable[]): Promise<Variable[]> {
    const pendingVariables = variables.map(v => this.create(v))
    return await Promise.all(pendingVariables)
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.variablesVariableIDDelete(id)

    return data
  }
}
