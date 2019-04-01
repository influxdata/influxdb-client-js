import {Organization, Telegraf, TelegrafRequest, TelegrafsApi} from '../api'
import {ILabel, ITelegraf} from '../types'
import {addLabelDefaults} from './labels'
import saga from '../utils/sagas'

const addDefaults = (telegraf: Telegraf): ITelegraf => {
  return {
    ...telegraf,
    labels: (telegraf.labels || []).map(addLabelDefaults),
  }
}

const addDefaultsToAll = (telegrafs: Telegraf[]): ITelegraf[] =>
  telegrafs.map(telegraf => addDefaults(telegraf))

export default class {
  private service: TelegrafsApi

  constructor(basePath: string) {
    this.service = new TelegrafsApi({basePath})
  }

  public async getAll(): Promise<ITelegraf[]> {
    const {
      data: {configurations},
    } = await this.service.telegrafsGet('')
    return addDefaultsToAll(configurations || [])
  }

  public async getAllByOrg(org: Organization): Promise<ITelegraf[]> {
    if (!org.id) {
      throw new Error('organization must have an id')
    }

    const {
      data: {configurations},
    } = await this.service.telegrafsGet(org.id)

    return addDefaultsToAll(configurations || [])
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

  public async get(id: string): Promise<ITelegraf> {
    const {data} = await this.service.telegrafsTelegrafIDGet(id)

    return addDefaults(data)
  }

  public async create(props: Telegraf): Promise<ITelegraf> {
    const {data} = await this.service.telegrafsPost(props)

    return addDefaults(data)
  }

  public async update(
    id: string,
    props: Partial<Telegraf>
  ): Promise<ITelegraf> {
    const original = await this.get(id)
    const update = {...original, ...props} as TelegrafRequest

    const {data: updated} = await this.service.telegrafsTelegrafIDPut(
      id,
      update
    )

    return addDefaults(updated)
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

  public async addLabels(id: string, labels: ILabel[]): Promise<ILabel[]> {
    const pendingLabels = labels.map(l => {
      return {
        action: async () => {
          return await this.addLabel(id, l)
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

  public async removeLabels(id: string, labels: ILabel[]): Promise<Response[]> {
    const promises = labels.map(l => this.removeLabel(id, l))

    return Promise.all(promises)
  }
}
