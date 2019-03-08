import {Proto, ProtosApi} from '../api'

export default class {
  private service: ProtosApi

  constructor(basePath: string) {
    this.service = new ProtosApi({basePath})
  }

  public async getAll(): Promise<Proto[]> {
    const {data} = await this.service.protosGet()

    return data.protos || []
  }
}
