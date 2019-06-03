import {Package, QueryApi} from '../api'
import {ServiceOptions, File} from '../types'
import {isInBrowser} from '../utils/platform'
import {Stream} from 'stream'
import nodeQuery from '../utils/request/node'
import browserQuery from '../utils/request/browser'

export default class {
  private service: QueryApi
  private serviceOptions: ServiceOptions
  private basePath: string

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new QueryApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
    this.basePath = basePath
  }

  public async ast(query: string): Promise<Package | undefined> {
    const {data} = await this.service.postQueryAst(
      undefined,
      undefined,
      {
        query,
      },
      this.serviceOptions
    )

    return data.ast
  }

  public execute(
    orgID: string,
    query: string,
    extern?: File
  ): {stream: Stream; cancel: () => void} {
    if (isInBrowser()) {
      return browserQuery(
        orgID,
        this.basePath,
        this.serviceOptions,
        query,
        extern
      )
    } else {
      return nodeQuery(orgID, this.basePath, this.serviceOptions, query, extern)
    }
  }
}
