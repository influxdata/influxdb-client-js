import {Variable, VariablesApi} from '../api'
import {ILabel, IVariable} from '../types'
import {addLabelDefaults} from './labels'
import saga from '../utils/sagas'

const addDefaults = (variable: Variable): IVariable => {
  return {
    ...variable,
    labels: (variable.labels || []).map(addLabelDefaults),
  }
}

export default class {
  private service: VariablesApi

  constructor(basePath: string) {
    this.service = new VariablesApi({basePath})
  }

  public async get(id: string): Promise<IVariable> {
    const {data: variable} = await this.service.variablesVariableIDGet(id)

    return addDefaults(variable)
  }

  public async update(
    id: string,
    props: Partial<Variable>
  ): Promise<IVariable> {
    const original = await this.get(id)
    const {data} = await this.service.variablesVariableIDPatch(id, {
      ...original,
      ...props,
    })

    return addDefaults(data)
  }

  public async getAllByOrg(org: string): Promise<IVariable[]> {
    const {
      data: {variables},
    } = await this.service.variablesGet(undefined, org)

    return (variables || []).map(v => addDefaults(v))
  }

  public async getAll(orgID?: string): Promise<IVariable[]> {
    const {
      data: {variables},
    } = await this.service.variablesGet(undefined, undefined, orgID)

    return (variables || []).map(v => addDefaults(v))
  }

  public async create(variable: Variable): Promise<IVariable> {
    const {data} = await this.service.variablesPost(variable)

    return addDefaults(data)
  }

  public async createAll(variables: Variable[]): Promise<IVariable[]> {
    const pendingVariables = variables.map(v => this.create(v))
    const createdVars = await Promise.all(pendingVariables)

    return createdVars.map(v => addDefaults(v))
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
