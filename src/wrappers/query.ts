import {ServiceOptions} from '../types'
import {isInBrowser} from '../utils/platform'
import {Stream} from 'stream'

export default class {
  private basePath: string
  private baseOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.basePath = basePath
    this.baseOptions = baseOptions
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
