import { Bucket, BucketsApi, Organization } from "../api";

export default class {
  private service: BucketsApi;

  constructor(basePath: string) {
    this.service = new BucketsApi({basePath});
  }

  public async get(id: string): Promise<Bucket> {
    const {data} = await this.service.bucketsBucketIDGet(id);

    return data;
  }

  public async getAllByOrg({name}: Organization): Promise<Bucket[]> {
    const {data: {buckets}} = await this.service.bucketsGet(name);

    return buckets || [];
  }

  public async create({name}: Organization, bucket: Bucket): Promise<Bucket> {
    const {data} = await this.service.bucketsPost(name, bucket);

    return data;
  }

  public async update(id: string, bucket: Partial<Bucket>): Promise<Bucket> {
    const original = await this.get(id);
    const {data} = await this.service.bucketsBucketIDPatch(id, {...original, ...bucket});

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.bucketsBucketIDDelete(id);

    return data;
  }
}
