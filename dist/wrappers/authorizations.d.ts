import { Authorization } from '../api';
import { ServiceOptions } from '../types';
export default class {
    private service;
    constructor(basePath: string, baseOptions: ServiceOptions);
    get(id: string): Promise<Authorization>;
    getAuthorizationToken(username: string): Promise<string | null>;
    getAll(orgID?: string): Promise<Authorization[]>;
    getAllByUsername(username: string): Promise<Authorization[]>;
    create(auth: Authorization): Promise<Authorization>;
    update(id: string, update: Partial<Authorization>): Promise<Authorization>;
    delete(id: string): Promise<Response>;
}
