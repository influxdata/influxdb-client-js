import { ServiceOptions } from '../types';
export default class {
    private service;
    private serviceOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    signout(): Promise<Response>;
    signin(username: string, password: string): Promise<Response>;
}
