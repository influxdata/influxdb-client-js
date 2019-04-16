import {DefaultApi, Routes} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: DefaultApi

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new DefaultApi({basePath, baseOptions})
  }

  public async getAll(): Promise<Routes> {
    const {data} = await this.service.rootGet()

    return data
  }
}
