import {Variable, VariablesApi} from '../api'
import {ILabel} from '../types'
import {addLabelDefaults} from './labels'
import saga from '../utils/sagas'

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

  public async addLabel(variableID: string, labelID: string): Promise<ILabel> {
    const {data} = await this.service.variablesVariableIDLabelsPost(
      variableID,
      {
        labelID,
      }
    )

    if (!data.label) {
      throw new Error('Failed to add label')
    }

    return addLabelDefaults(data.label)
  }

  public async addLabels(
    variableID: string,
    labelIDs: string[]
  ): Promise<ILabel[]> {
    const pendingLabels = labelIDs.map(l => {
      return {
        action: async () => {
          return await this.addLabel(variableID, l)
        },
        rollback: async (r?: ILabel) => {
          if (r && r.id) {
            this.removeLabel(variableID, r.id)
          }
        },
      }
    })

    return await saga(pendingLabels)
  }

  public async removeLabel(
    variableID: string,
    labelID: string
  ): Promise<Response> {
    const {data} = await this.service.variablesVariableIDLabelsLabelIDDelete(
      variableID,
      labelID
    )

    return data
  }

  public removeLabels(
    variableID: string,
    labelIDs: string[]
  ): Promise<Response[]> {
    const promises = labelIDs.map(l => this.removeLabel(variableID, l))

    return Promise.all(promises)
  }
}
