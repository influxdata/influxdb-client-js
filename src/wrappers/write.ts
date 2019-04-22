import {WriteApi, WritePrecision} from '../api'
import {ServiceOptions} from '../types'

interface ICreateOptions {
  precision: WritePrecision
}

export default class {
  private service: WriteApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new WriteApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public get WritePrecision(): typeof WritePrecision {
    return WritePrecision
  }

  public async create(
    org: string,
    bucket: string,
    data: string,
    options: Partial<ICreateOptions> = {}
  ): Promise<Response> {
    const precision = options.precision || WritePrecision.Ns

    const {data: response} = await this.service.writePost(
      org,
      bucket,
      data,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      precision,
      this.serviceOptions
    )

    return response
  }
}
