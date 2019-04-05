import { Organization, Telegraf } from '../api';
import { ILabel, ITelegraf } from '../types';
export default class {
    private service;
    constructor(basePath: string);
    getAll(orgID?: string): Promise<ITelegraf[]>;
    getAllByOrg(org: Organization): Promise<ITelegraf[]>;
    getTOML(id: string): Promise<string>;
    get(id: string): Promise<ITelegraf>;
    create(props: Telegraf): Promise<ITelegraf>;
    update(id: string, props: Partial<Telegraf>): Promise<ITelegraf>;
    delete(id: string): Promise<Response>;
    addLabel(id: string, label: ILabel): Promise<ILabel>;
    removeLabel(id: string, label: ILabel): Promise<Response>;
    addLabels(id: string, labels: ILabel[]): Promise<ILabel[]>;
    removeLabels(id: string, labels: ILabel[]): Promise<Response[]>;
}
