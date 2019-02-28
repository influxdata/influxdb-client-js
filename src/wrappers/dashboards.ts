import { Cell, CellsApi, Dashboard, DashboardsApi, ProtosApi, View } from "../api";
import {IDashboard, ILabel} from "../types";
import {addLabelDefaults} from "./labels";

const addDefaults = (dashboard: Dashboard): IDashboard => {
  return {
    ...dashboard,
    cells: dashboard.cells || [],
    id: dashboard.id || "",
    labels: (dashboard.labels || []).map(addLabelDefaults),
    name: dashboard.name || "",
    orgID: dashboard.orgID || "",
  };
};

const addDefaultsToAll = (dashboards: Dashboard[]): IDashboard[] => {
  return dashboards.map((dashboard) => (
    addDefaults(dashboard)
  ));
};

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

    return addDefaultsToAll(data.dashboards || []);
  }

  public async getAllByOrg(org: string): Promise<Dashboard[]> {
    const {data} = await this.service.dashboardsGet(org);

    return addDefaultsToAll(data.dashboards || []);
  }

  public async create(props: Dashboard): Promise<IDashboard> {
    const {data} = await this.service.dashboardsPost(props);

    return addDefaults(data);
  }

  public async update(id: string, props: Partial<Dashboard>): Promise<IDashboard> {
    const original = await this.get(id);
    const {data} = await this.service.dashboardsDashboardIDPatch(id, {...original, ...props});

    return addDefaults(data);
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

  public async createLabel(dashboardID: string, labelID: string): Promise<ILabel> {
    const {data} = await this.service.dashboardsDashboardIDLabelsPost(dashboardID, {
      labelID,
    });

    if (!data.label) {
      throw new Error("Failed to create label");
    }

    return addLabelDefaults(data.label);
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

    if (!createdDashboard || !createdDashboard.id) {
      throw new Error("Could not create dashboard");
    }

    await this.cloneViews(original, createdDashboard);
    await this.cloneLabels(original, createdDashboard);

    return this.get(createdDashboard.id);

  }

  private async cloneLabels(originalDashboard: Dashboard, newDashboard: Dashboard): Promise<ILabel[]> {
    if (!newDashboard || !newDashboard.id) {
      throw new Error("Cannot create labels on invalid dashboard");
    }

    const labels = originalDashboard.labels || [];
    const pendingLabels = labels.map(async (label) => this.createLabel(newDashboard.id || "", label.id || ""));

    const newLabels = await Promise.all(pendingLabels);

    return newLabels.filter((l) => !!l).map(addLabelDefaults);
  }

  private async cloneViews(originalDashboard: Dashboard, newDashboard: Dashboard ): Promise<View[]>  {
    if (!newDashboard || !newDashboard.id) {
      throw new Error("Cannot create views on invalid dashboard");
    }
    const cells = originalDashboard.cells || [];

    const pendingViews = cells.map((c) => this.getView(originalDashboard.id || "", c.id || ""));
    const views = await Promise.all(pendingViews);

    const pendingUpdatedViews = views.map(async (view) => {
      const cell = cells.find((c) => c.id === view.id);

      if (cell && newDashboard.id) {
        const newCell = await this.createCell(newDashboard.id, cell);
        if (newCell && newCell.id) {
          return this.updateView(newDashboard.id, newCell.id, view);
        }
      }
    });

    const newViews = await Promise.all(pendingUpdatedViews);
    return newViews.filter((v): v is View => !!v);
  }
}
