import { Bucket } from '../api';
import { IBucket } from '../types';
declare type BucketPicked = Pick<Bucket, 'organizationID' | 'name'>;
declare type BucketRest = Pick<Bucket, Exclude<keyof Bucket, keyof BucketPicked>>;
declare type BucketRequired = {
    [P in keyof BucketPicked]-?: BucketPicked[P];
};
declare type BucketCreate = BucketRequired & BucketRest;
export default class {
    private service;
    constructor(basePath: string);
    get(id: string): Promise<IBucket>;
    getAll(orgID?: string): Promise<IBucket[]>;
    create(bucket: BucketCreate): Promise<IBucket>;
    update(id: string, bucket: Partial<Bucket>): Promise<IBucket>;
    delete(id: string): Promise<Response>;
}
export {};
