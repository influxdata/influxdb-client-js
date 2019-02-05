import { Cell, CellsApi } from "../api";

export default class {
  private cellsService: CellsApi;

  constructor(basePath: string) {
    this.cellsService = new CellsApi({basePath});
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
