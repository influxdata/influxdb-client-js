import {ChecksApi} from '../api'
import {Check, Checks, ServiceOptions} from '../types'
import {addLabelDefaults} from './labels'
import {AxiosResponse} from 'axios'

const addDefaults = (check: Check): Check => ({
  ...check,
  labels: (check.labels || []).map(addLabelDefaults),
})

const addDefaultsToAll = (checks: Check[]): Check[] => checks.map(addDefaults)

export default class {
  private service: ChecksApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new ChecksApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async get(id: string): Promise<Check> {
    const {data} = (await this.service.getChecksID(
      id,
      undefined,
      this.serviceOptions
    )) as AxiosResponse<Check>

    return addDefaults(data)
  }

  public async getAll(orgID: string): Promise<Check[]> {
    const {
      data: {checks},
    } = (await this.service.getChecks(
      orgID,
      undefined,
      undefined,
      this.serviceOptions
    )) as AxiosResponse<Checks>

    return addDefaultsToAll(checks || [])
  }

  public async create(check: Check): Promise<Check> {
    const {data} = (await this.service.createCheck(
      check,
      this.serviceOptions
    )) as AxiosResponse<Check>

    return addDefaults(data)
  }

  public async update(id: string, check: Partial<Check>): Promise<Check> {
    const {data} = (await this.service.patchChecksID(
      id,
      check,
      undefined,
      this.serviceOptions
    )) as AxiosResponse<Check>

    return addDefaults(data)
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.deleteChecksID(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }
}
