import {Variable, VariablesApi} from '../api'
import {ILabel, IVariable, ServiceOptions} from '../types'
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
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new VariablesApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async get(id: string): Promise<IVariable> {
    const {data: variable} = await this.service.variablesVariableIDGet(
      id,
      undefined,
      this.serviceOptions
    )

    return addDefaults(variable)
  }

  public async update(
    id: string,
    props: Partial<Variable>
  ): Promise<IVariable> {
    const original = await this.get(id)
    const {data} = await this.service.variablesVariableIDPatch(
      id,
      {
        ...original,
        ...props,
      },
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async getAllByOrg(org: string): Promise<IVariable[]> {
    const {
      data: {variables},
    } = await this.service.variablesGet(
      undefined,
      org,
      undefined,
      this.serviceOptions
    )

    return (variables || []).map(v => addDefaults(v))
  }

  public async getAll(orgID?: string): Promise<IVariable[]> {
    const {
      data: {variables},
    } = await this.service.variablesGet(
      undefined,
      undefined,
      orgID,
      this.serviceOptions
    )

    return (variables || []).map(v => addDefaults(v))
  }

  public async create(variable: Variable): Promise<IVariable> {
    const {data} = await this.service.variablesPost(
      variable,
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async createAll(variables: Variable[]): Promise<IVariable[]> {
    const pendingVariables = variables.map(v => this.create(v))
    const createdVars = await Promise.all(pendingVariables)

    return createdVars.map(v => addDefaults(v))
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.variablesVariableIDDelete(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async addLabel(variableID: string, labelID: string): Promise<ILabel> {
    const {data} = await this.service.variablesVariableIDLabelsPost(
      variableID,
      {
        labelID,
      },
      undefined,
      this.serviceOptions
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
      labelID,
      undefined,
      this.serviceOptions
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
