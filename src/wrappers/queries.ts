import {Package, QueryApi} from '../api'
import {ServiceOptions, File} from '../types'
import {isInBrowser} from '../utils/platform'
import {Stream} from 'stream'
import nodeQuery from '../utils/request/node'
import browserQuery from '../utils/request/browser'

export default class {
  private service: QueryApi
  private basePath: string
  private baseOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new QueryApi({basePath, baseOptions})
    this.basePath = basePath
    this.baseOptions = baseOptions
  }

  public async ast(query: string): Promise<Package | undefined> {
    const {data} = await this.service.queryAstPost(undefined, undefined, {
      query,
    })

    return data.ast
  }

  public execute(
    orgID: string,
    query: string,
    extern?: File
  ): {stream: Stream; cancel: () => void} {
    if (isInBrowser()) {
      return browserQuery(orgID, this.basePath, this.baseOptions, query, extern)
    } else {
      return nodeQuery(orgID, this.basePath, this.baseOptions, query, extern)
    }
  }
}
