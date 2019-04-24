import { WritePrecision } from '../api';
import { ServiceOptions } from '../types';
interface ICreateOptions {
    precision: WritePrecision;
}
export default class {
    private service;
    private serviceOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    readonly WritePrecision: typeof WritePrecision;
    create(orgID: string, bucket: string, data: string, options?: Partial<ICreateOptions>): Promise<Response>;
}
export {};
