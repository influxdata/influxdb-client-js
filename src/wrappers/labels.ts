import {Label as APILabel, LabelsApi} from '../api'
import {ILabel, ServiceOptions} from '../types'
import {ILabelProperties} from '../types'
import saga from '../utils/sagas'

const DEFAULT_LABEL_COLOR = '#326BBA'

export const addLabelDefaults = (l: APILabel): ILabel => ({
  ...l,
  properties: {
    ...l.properties,
    // add defualt color hex if missing
    color: (l.properties || {}).color || DEFAULT_LABEL_COLOR,
    description: (l.properties || {}).description || '',
  },
})

export default class {
  private service: LabelsApi

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new LabelsApi({basePath, baseOptions})
  }

  public async get(id: string): Promise<ILabel> {
    const {
      data: {label},
    } = await this.service.labelsLabelIDGet(id)

    if (!label) {
      throw new Error('Failed to get label')
    }

    return addLabelDefaults(label)
  }

  public async getAll(orgID: string): Promise<ILabel[]> {
    const {
      data: {labels},
    } = await this.service.labelsGet(orgID)

    return (labels || []).map(addLabelDefaults)
  }

  public async create(request: {
    orgID: string
    name: string
    properties: ILabelProperties
  }): Promise<ILabel> {
    const {
      data: {label},
    } = await this.service.labelsPost(request)

    if (!label) {
      throw new Error('Failed to create label')
    }

    return addLabelDefaults(label)
  }

  public async createAll(
    labels: {
      orgID: string
      name: string
      properties: ILabelProperties
    }[]
  ): Promise<ILabel[]> {
    const pendingLabels = labels.map(r => {
      return {
        action: async () => {
          return await this.create(r)
        },
        rollback: async (r?: ILabel) => {
          if (r && r.id) {
            this.delete(r.id)
          }
        },
      }
    })

    return await saga(pendingLabels)
  }

  public async update(id: string, updates: Partial<ILabel>): Promise<ILabel> {
    const original = await this.get(id)
    const {
      data: {label},
    } = await this.service.labelsLabelIDPatch(id, {
      ...original,
      ...updates,
    })

    if (!label) {
      throw new Error('Failed to update label')
    }

    return addLabelDefaults(label)
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.labelsLabelIDDelete(id)

    return data
  }
}
