import {Package, QueryApi} from '../api'
import {ServiceOptions} from '../types'

export default class {
  private service: QueryApi

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new QueryApi({basePath, baseOptions})
  }

  public async ast(query: string): Promise<Package | undefined> {
    const {data} = await this.service.queryAstPost(undefined, undefined, {
      query,
    })

    return data.ast
  }
}
