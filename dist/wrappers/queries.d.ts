import { Package } from '../api';
export default class {
    private service;
    constructor(basePath: string);
    ast(query: string): Promise<Package | undefined>;
}
