import { Cell, CellsApi, Dashboard, DashboardsApi, Label, ProtosApi, View } from "../api";

export default class {
  private service: DashboardsApi;
  private cellsService: CellsApi;
  private protosService: ProtosApi;

  constructor(basePath: string) {
    this.cellsService = new CellsApi({basePath});
    this.protosService = new ProtosApi({basePath});
    this.service = new DashboardsApi({basePath});
  }

  public async get(id: string): Promise<Dashboard> {
    const {data} = await this.service.dashboardsDashboardIDGet(id);

    return data;
  }

  public async getAll(): Promise<Dashboard[]> {
    const {data} = await this.service.dashboardsGet(undefined);

    return data.dashboards || [];
  }

  public async getAllByOrg(org: string): Promise<Dashboard[]> {
    const {data} = await this.service.dashboardsGet(org);

    return data.dashboards || [];
  }

  public async create(props: Dashboard): Promise<Dashboard> {
    const {data} = await this.service.dashboardsPost(props);

    return data;
  }

  public async update(id: string, props: Partial<Dashboard>): Promise<Dashboard> {
    const original = await this.get(id);
    const {data} = await this.service.dashboardsDashboardIDPatch(id, {...original, ...props});

    return data;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.dashboardsDashboardIDDelete(id);

    return data;
  }

  public async createFromProto(protoID: string, orgID?: string): Promise<Dashboard[]> {
    let request = {};

    if (orgID) {
      request = {orgID};
    }

    const { data } = await this.protosService.protosProtoIDDashboardsPost(protoID, request);

    return data.dashboards || [];
  }

  public async deleteCell(dashboardID: string, cellID: string): Promise<Response> {
    const {data: response} = await this.cellsService.dashboardsDashboardIDCellsCellIDDelete(dashboardID, cellID);

    return response;
  }

  public async createCell(dashboardID: string, cell: Cell): Promise<Cell> {
    const {data} = await this.cellsService.dashboardsDashboardIDCellsPost(dashboardID, cell);

    return data;
  }

  public async updateAllCells(dashboardID: string, cells: Cell[]): Promise<Cell[]> {
    const {data} = await this.cellsService.dashboardsDashboardIDCellsPut(dashboardID, cells);

    return data.cells || [];
  }

  public async createLabel(dashboardID: string, labelID: string): Promise<Label> {
    const {data} = await this.service.dashboardsDashboardIDLabelsPost(dashboardID, {
      labelID,
    });

    if (!data.label) {
      throw new Error("Failed to create label");
    }

    return data.label;
  }

  public async deleteLabel(dashboardID: string, labelID: string): Promise<Response> {
    const {data} = await this.service.dashboardsDashboardIDLabelsLabelIDDelete(dashboardID, labelID);

    return data;
  }

  public async getView(dashboardID: string, cellID: string): Promise<View> {
    const {data} = await this.service.dashboardsDashboardIDCellsCellIDViewGet(dashboardID, cellID);

    return data;
  }

  public async updateView(dashboardID: string, cellID: string, view: Partial<View>): Promise<View> {
    const {data} = await this.service.dashboardsDashboardIDCellsCellIDViewPatch(dashboardID, cellID, view);

    return data;
  }

  public async clone(dashboardID: string, cloneName: string): Promise<Dashboard | null> {
    const original = await this.get(dashboardID);

    const createdDashboard = await this.create({
      ...original,
      cells: [],
      name: cloneName,
    });

    const cells = original.cells || [];
    const pendingViews = cells.map((c) => this.getView(dashboardID, c.id || ""));
    const views = await Promise.all(pendingViews);

    const pendingUpdatedViews = views.map(async (view) => {
      const cell = cells.find((c) => c.id === view.id);

      if (cell && createdDashboard.id) {
        const newCell = await this.createCell(createdDashboard.id, cell);
        if (newCell.id) {
          return this.updateView(createdDashboard.id, newCell.id, view);
        }
      }
    });

    await Promise.all(pendingUpdatedViews);

    if (createdDashboard.id) {
      return await this.get(createdDashboard.id);
    }

    return null;
  }
}
