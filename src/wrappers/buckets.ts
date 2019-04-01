import {Bucket, BucketsApi} from '../api'
import {IBucket} from '../types'
import {addLabelDefaults} from './labels'

type BucketPicked = Pick<Bucket, 'organizationID' | 'name'>
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

  constructor(basePath: string) {
    this.service = new BucketsApi({basePath})
  }

  public async get(id: string): Promise<IBucket> {
    const {data} = await this.service.bucketsBucketIDGet(id)

    return addDefaults(data)
  }

  public async getAll(orgID?: string): Promise<IBucket[]> {
    const {
      data: {buckets},
    } = await this.service.bucketsGet(
      undefined,
      undefined,
      undefined,
      undefined,
      orgID
    )

    return addDefaultsToAll(buckets || [])
  }

  public async create(bucket: BucketCreate): Promise<IBucket> {
    const {data} = await this.service.bucketsPost(bucket)

    return addDefaults(data)
  }

  public async update(id: string, bucket: Partial<Bucket>): Promise<IBucket> {
    const original = await this.get(id)
    const {data} = await this.service.bucketsBucketIDPatch(id, {
      ...original,
      ...bucket,
    })

    return addDefaults(data)
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.bucketsBucketIDDelete(id)

    return data
  }
}
