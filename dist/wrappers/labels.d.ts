import { Label as APILabel } from '../api';
import { ILabel } from '../types';
import { ILabelProperties } from '../types';
export declare const addLabelDefaults: (l: APILabel) => ILabel;
export default class {
    private service;
    constructor(basePath: string);
    get(id: string): Promise<ILabel>;
    getAll(orgID: string): Promise<ILabel[]>;
    create(request: {
        orgID: string;
        name: string;
        properties: ILabelProperties;
    }): Promise<ILabel>;
    createAll(labels: {
        orgID: string;
        name: string;
        properties: ILabelProperties;
    }[]): Promise<ILabel[]>;
    update(id: string, updates: Partial<ILabel>): Promise<ILabel>;
    delete(id: string): Promise<Response>;
}
