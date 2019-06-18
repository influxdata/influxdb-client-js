import { Package } from '../api';
import { ServiceOptions, File } from '../types';
interface ExecuteOptions {
    limitChars: number;
    extern?: File;
}
export default class {
    private service;
    private serviceOptions;
    private basePath;
    constructor(basePath: string, baseOptions: ServiceOptions);
    ast(query: string): Promise<Package | undefined>;
    execute(orgID: string, query: string, options?: ExecuteOptions): {
        promise: Promise<string>;
        cancel: () => void;
    };
}
export {};
