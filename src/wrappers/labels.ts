import {Label as APILabel, LabelsApi} from '../api'
import {ILabel} from '../types'
import {ILabelProperties} from '../types'

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

  constructor(basePath: string) {
    this.service = new LabelsApi({basePath})
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

  public async getAll(): Promise<ILabel[]> {
    const {
      data: {labels},
    } = await this.service.labelsGet()

    return (labels || []).map(addLabelDefaults)
  }

  public async create(
    name: string,
    properties: ILabelProperties
  ): Promise<ILabel> {
    const {
      data: {label},
    } = await this.service.labelsPost({name, properties})

    if (!label) {
      throw new Error('Failed to create label')
    }

    return addLabelDefaults(label)
  }

  public async update(
    id: string,
    properties: ILabelProperties
  ): Promise<ILabel> {
    const {
      data: {label},
    } = await this.service.labelsLabelIDPatch(id, {properties})

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
