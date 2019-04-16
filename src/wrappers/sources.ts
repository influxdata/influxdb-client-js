import {Source, SourcesApi} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: SourcesApi

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new SourcesApi({basePath, baseOptions})
  }

  public async get(id: string): Promise<Source> {
    const {data: source} = await this.service.sourcesSourceIDGet(id)

    return source
  }

  public async getAll(): Promise<Source[]> {
    return this.getAllByOrg('')
  }

  public async getAllByOrg(org: string): Promise<Source[]> {
    const {
      data: {sources},
    } = await this.service.sourcesGet(org)

    return sources || []
  }

  public async create(props: Source): Promise<Source> {
    const {data} = await this.service.sourcesPost(props)

    return data
  }

  public async update(id: string, props: Partial<Source>): Promise<Source> {
    const original = await this.get(id)
    const {data} = await this.service.sourcesSourceIDPatch(id, {
      ...original,
      ...props,
    })

    return data
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.sourcesSourceIDDelete(id)

    return data
  }

  public async health(id: string): Promise<Source> {
    const {data} = await this.service.sourcesSourceIDHealthGet(id)

    return data
  }
}
