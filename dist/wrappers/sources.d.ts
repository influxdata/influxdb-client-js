import { Source } from '../api';
import { ServiceOptions } from '../types';
export default class {
    private service;
    constructor(basePath: string, baseOptions: ServiceOptions);
    get(id: string): Promise<Source>;
    getAll(): Promise<Source[]>;
    getAllByOrg(org: string): Promise<Source[]>;
    create(props: Source): Promise<Source>;
    update(id: string, props: Partial<Source>): Promise<Source>;
    delete(id: string): Promise<Response>;
    health(id: string): Promise<Source>;
}
