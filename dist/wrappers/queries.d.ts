import { Package } from '../api';
import { ServiceOptions } from '../types';
export default class {
    private service;
    constructor(basePath: string, baseOptions: ServiceOptions);
    ast(query: string): Promise<Package | undefined>;
}
