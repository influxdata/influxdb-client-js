import { User } from '../api';
import { ServiceOptions } from '../types';
export default class {
    private service;
    constructor(basePath: string, baseOptions: ServiceOptions);
    me(): Promise<User>;
    get(id: string): Promise<User>;
    getAll(): Promise<User[]>;
}
