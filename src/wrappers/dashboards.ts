import { Cell, CellsApi, Dashboard, ProtosApi } from "../api";

export default class {
  private cellsService: CellsApi;
  private protosService: ProtosApi;

  constructor(basePath: string) {
    this.cellsService = new CellsApi({basePath});
    this.protosService = new ProtosApi({basePath});
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
}
