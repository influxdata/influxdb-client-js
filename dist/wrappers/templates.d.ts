import { DocumentCreate } from '../api';
import { ITemplate, TemplateSummary, ILabel, ServiceOptions } from '../types';
export default class {
    private service;
    private serviceOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    getAll(orgID?: string): Promise<TemplateSummary[]>;
    get(templateID: string): Promise<ITemplate>;
    update(id: string, props: Partial<ITemplate>): Promise<ITemplate>;
    create(templateCreate: DocumentCreate): Promise<ITemplate>;
    delete(templateID: string): Promise<Response>;
    addLabel(templateID: string, labelID: string): Promise<ILabel>;
    removeLabel(templateID: string, labelID: string): Promise<Response>;
    addLabels(templateID: string, labelIDs: string[]): Promise<ILabel[]>;
    removeLabels(templateID: string, labelIDs: string[]): Promise<Response[]>;
    clone(templateID: string, orgID: string): Promise<ITemplate>;
}
