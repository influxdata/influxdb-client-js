import { Routes } from '../api';
import { ServiceOptions } from '../types';
export default class {
    private service;
    private serviceOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    getAll(): Promise<Routes>;
}
