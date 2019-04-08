import { Cell, CreateDashboardRequest, Dashboard, View } from '../api';
import { IDashboard, ILabel } from '../types';
export default class {
    private service;
    private cellsService;
    constructor(basePath: string);
    get(id: string): Promise<IDashboard>;
    getAll(orgID?: string): Promise<IDashboard[]>;
    getAllByOrg(org: string): Promise<IDashboard[]>;
    create(props: CreateDashboardRequest): Promise<IDashboard>;
    update(id: string, props: Partial<Dashboard>): Promise<IDashboard>;
    delete(id: string): Promise<Response>;
    deleteCell(dashboardID: string, cellID: string): Promise<Response>;
    createCell(dashboardID: string, cell: Cell): Promise<Cell>;
    updateAllCells(dashboardID: string, cells: Cell[]): Promise<Cell[]>;
    addLabel(dashboardID: string, labelID: string): Promise<ILabel>;
    addLabels(dashboardID: string, labelIDs: string[]): Promise<ILabel[]>;
    removeLabel(dashboardID: string, labelID: string): Promise<Response>;
    removeLabels(dashboardID: string, labelIDs: string[]): Promise<Response[]>;
    getView(dashboardID: string, cellID: string): Promise<View>;
    updateView(dashboardID: string, cellID: string, view: Partial<View>): Promise<View>;
    clone(dashboardID: string, cloneName: string, orgID: string): Promise<IDashboard | null>;
    private cloneLabels;
    private cloneViews;
}
