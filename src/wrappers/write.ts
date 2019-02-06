import { WriteApi, WritePrecision } from "../api";

interface ICreateOptions {
  precision: WritePrecision;
}

export default class {
  private service: WriteApi;

  constructor(basePath: string) {
    this.service = new WriteApi({basePath});
  }

  public get WritePrecision(): typeof WritePrecision {
    return WritePrecision;
  }

  public async create(
    org: string,
    bucket: string,
    data: string,
    options: Partial<ICreateOptions> = {},
  ): Promise<Response> {
    const precision = options.precision || WritePrecision.Ns;

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
    );

    return response;
  }
}
