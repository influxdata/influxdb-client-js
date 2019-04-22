import {DefaultApi, Routes} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: DefaultApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new DefaultApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async getAll(): Promise<Routes> {
    const {data} = await this.service.rootGet(undefined, this.serviceOptions)

    return data
  }
}
