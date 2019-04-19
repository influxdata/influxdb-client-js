import {Package, QueryApi} from '../api'
import {ServiceOptions, File} from '../types'
import {isInBrowser} from '../utils/platform'
import {Stream} from 'stream'

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
      return require('../utils/request/browser')(
        orgID,
        this.basePath,
        this.baseOptions,
        query,
        extern
      )
    } else {
      return require('../utils/request/node')(
        orgID,
        this.basePath,
        this.baseOptions,
        query,
        extern
      )
    }
  }
}
