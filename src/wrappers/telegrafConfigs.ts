import {
  Organization,
  Telegraf,
  TelegrafPluginConfig,
  TelegrafRequest,
  TelegrafsApi,
} from '../api'
import {ILabel} from '../types'
import {addLabelDefaults} from './labels'

export default class {
  private service: TelegrafsApi

  constructor(basePath: string) {
    this.service = new TelegrafsApi({basePath})
  }

  public async getAll(): Promise<TelegrafPluginConfig[]> {
    const {
      data: {configurations},
    } = await this.service.telegrafsGet('')
    return configurations || []
  }

  public async getAllByOrg(org: Organization): Promise<TelegrafPluginConfig[]> {
    if (!org.id) {
      throw new Error('organization must have an id')
    }

    const {
      data: {configurations},
    } = await this.service.telegrafsGet(org.id)

    return configurations || []
  }

  public async getTOML(id: string): Promise<string> {
    const options = {
      headers: {
        Accept: 'application/toml',
      },
    }

    const {data} = await this.service.telegrafsTelegrafIDGet(
      id,
      undefined,
      options
    )

    return data as string
  }

  public async get(id: string): Promise<Telegraf> {
    const {data} = await this.service.telegrafsTelegrafIDGet(id)

    return data
  }

  public async create(props: Telegraf): Promise<Telegraf> {
    const {data} = await this.service.telegrafsPost(props)

    return data
  }

  public async update(id: string, props: Partial<Telegraf>): Promise<Telegraf> {
    const original = await this.get(id)
    const update = {...original, ...props} as TelegrafRequest

    const {data: updated} = await this.service.telegrafsTelegrafIDPut(
      id,
      update
    )

    return updated
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.telegrafsTelegrafIDDelete(id)

    return data as Response
  }

  public async addLabel(id: string, label: ILabel): Promise<ILabel> {
    if (!label.id) {
      throw new Error('label must have id')
    }

    const {data} = await this.service.telegrafsTelegrafIDLabelsPost(id, {
      labelID: label.id,
    })

    if (!data.label) {
      throw new Error('Failed to add label')
    }

    return addLabelDefaults(data.label)
  }

  public async addLabels(id: string, labels: ILabel[]): Promise<ILabel[]> {
    const pendingLabels = labels.map(l => this.addLabel(id, l))

    return Promise.all(pendingLabels)
  }

  public async removeLabel(id: string, label: ILabel): Promise<Response> {
    if (!label.id) {
      throw new Error('label must have id')
    }

    const {data} = await this.service.telegrafsTelegrafIDLabelsLabelIDDelete(
      id,
      label.id
    )

    return data
  }
}
