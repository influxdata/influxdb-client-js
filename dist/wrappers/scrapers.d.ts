import { ScraperTargetRequest, ScraperTargetResponse } from '../api';
export default class {
    private service;
    constructor(basePath: string);
    getAll(orgID: string): Promise<ScraperTargetResponse[]>;
    create(request: ScraperTargetRequest): Promise<ScraperTargetResponse>;
    update(id: string, changes: ScraperTargetRequest): Promise<ScraperTargetResponse>;
    delete(id: string): Promise<Response>;
}
