import {Package, QueryApi} from '../api'

export default class {
  private service: QueryApi

  constructor(basePath: string) {
    this.service = new QueryApi({basePath})
  }

  public async ast(query: string): Promise<Package | undefined> {
    const {data} = await this.service.queryAstPost(undefined, undefined, {
      query,
    })

    return data.ast
  }
}
