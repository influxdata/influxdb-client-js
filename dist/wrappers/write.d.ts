import { WritePrecision } from '../api';
interface ICreateOptions {
    precision: WritePrecision;
}
export default class {
    private service;
    constructor(basePath: string);
    readonly WritePrecision: typeof WritePrecision;
    create(org: string, bucket: string, data: string, options?: Partial<ICreateOptions>): Promise<Response>;
}
export {};
