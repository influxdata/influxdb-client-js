import { User } from '../api';
export default class {
    private service;
    constructor(basePath: string);
    me(): Promise<User>;
    get(id: string): Promise<User>;
    getAll(): Promise<User[]>;
}
