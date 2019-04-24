import { Variable } from '../api';
import { ILabel, IVariable, ServiceOptions } from '../types';
export default class {
    private service;
    private serviceOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    get(id: string): Promise<IVariable>;
    update(id: string, props: Partial<Variable>): Promise<IVariable>;
    getAllByOrg(org: string): Promise<IVariable[]>;
    getAll(orgID?: string): Promise<IVariable[]>;
    create(variable: Variable): Promise<IVariable>;
    createAll(variables: Variable[]): Promise<IVariable[]>;
    delete(id: string): Promise<Response>;
    addLabel(variableID: string, labelID: string): Promise<ILabel>;
    addLabels(variableID: string, labelIDs: string[]): Promise<ILabel[]>;
    removeLabel(variableID: string, labelID: string): Promise<Response>;
    removeLabels(variableID: string, labelIDs: string[]): Promise<Response[]>;
}
