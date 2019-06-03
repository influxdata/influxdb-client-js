import {Bucket, BucketsApi} from '../api'
import {IBucket, ServiceOptions} from '../types'
import {addLabelDefaults} from './labels'

type BucketPicked = Pick<Bucket, 'orgID' | 'name'>
type BucketRest = Pick<Bucket, Exclude<keyof Bucket, keyof BucketPicked>>
type BucketRequired = {[P in keyof BucketPicked]-?: BucketPicked[P]}
type BucketCreate = BucketRequired & BucketRest

const addDefaults = (bucket: Bucket): IBucket => ({
  ...bucket,
  labels: (bucket.labels || []).map(addLabelDefaults),
})

const addDefaultsToAll = (buckets: Bucket[]): IBucket[] =>
  buckets.map(addDefaults)

export default class {
  private service: BucketsApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new BucketsApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async get(id: string): Promise<IBucket> {
    const {data} = await this.service.getBucketsID(
      id,
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async getAll(orgID?: string): Promise<IBucket[]> {
    const {
      data: {buckets},
    } = await this.service.getBuckets(
      undefined,
      undefined,
      undefined,
      undefined,
      orgID,
      undefined,
      this.serviceOptions
    )

    return addDefaultsToAll(buckets || [])
  }

  public async create(bucket: BucketCreate): Promise<IBucket> {
    const {data} = await this.service.postBuckets(
      bucket,
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async update(id: string, bucket: Partial<Bucket>): Promise<IBucket> {
    const original = await this.get(id)
    const {data} = await this.service.patchBucketsID(
      id,
      {
        ...original,
        ...bucket,
      },
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.deleteBucketsID(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }
}
