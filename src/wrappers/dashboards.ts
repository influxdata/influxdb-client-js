import {
  Cell,
  CellsApi,
  CreateDashboardRequest,
  Dashboard,
  DashboardsApi,
  Label,
  LabelsApi,
  ProtosApi,
  View,
} from "../api";
import {
  ICellIncluded,
  IDashboard,
  IDashboardTemplate,
  ILabel,
  ILabelIncluded,
  TemplateType,
} from "../types";
import { addLabelDefaults } from "./labels";

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
  return dashboards.map((dashboard) => addDefaults(dashboard));
};

export default class {
  private service: DashboardsApi;
  private cellsService: CellsApi;
  private protosService: ProtosApi;
  private labelsService: LabelsApi;

  constructor(basePath: string) {
    this.cellsService = new CellsApi({ basePath });
    this.protosService = new ProtosApi({ basePath });
    this.service = new DashboardsApi({ basePath });
    this.labelsService = new LabelsApi({ basePath });
  }

  public async get(id: string): Promise<IDashboard> {
    const { data } = await this.service.dashboardsDashboardIDGet(id);

    return addDefaults(data);
  }

  public async getAll(): Promise<IDashboard[]> {
    const { data } = await this.service.dashboardsGet(undefined);

    return addDefaultsToAll(data.dashboards || []);
  }

  public async getAllByOrg(org: string): Promise<IDashboard[]> {
    const { data } = await this.service.dashboardsGet(org);

    return addDefaultsToAll(data.dashboards || []);
  }

  public async getAllByOrgID(orgID: string): Promise<Dashboard[]> {
    const { data } = await this.service.dashboardsGet(
      undefined,
      undefined,
      undefined,
      undefined,
      orgID,
    );

    return addDefaultsToAll(data.dashboards || []);
  }

  public async create(props: CreateDashboardRequest): Promise<IDashboard> {
    const { data } = await this.service.dashboardsPost(props);

    return addDefaults(data);
  }

  public async update(
    id: string,
    props: Partial<Dashboard>,
  ): Promise<IDashboard> {
    const original = await this.get(id);
    const { data } = await this.service.dashboardsDashboardIDPatch(id, {
      ...original,
      ...props,
    });

    return addDefaults(data);
  }

  public async delete(id: string): Promise<Response> {
    const { data } = await this.service.dashboardsDashboardIDDelete(id);

    return data;
  }

  public async createFromProto(protoID: string, orgID?: string): Promise<IDashboard[]> {
    let request = {};

    if (orgID) {
      request = { orgID };
    }

    const { data } = await this.protosService.protosProtoIDDashboardsPost(
      protoID,
      request,
    );

    return addDefaultsToAll(data.dashboards || []);
  }

  public async deleteCell(
    dashboardID: string,
    cellID: string,
  ): Promise<Response> {
    const {
      data: response,
    } = await this.cellsService.dashboardsDashboardIDCellsCellIDDelete(
      dashboardID,
      cellID,
    );

    return response;
  }

  public async createCell(dashboardID: string, cell: Cell): Promise<Cell> {
    const { data } = await this.cellsService.dashboardsDashboardIDCellsPost(
      dashboardID,
      cell,
    );

    return data;
  }

  public async updateAllCells(
    dashboardID: string,
    cells: Cell[],
  ): Promise<Cell[]> {
    const { data } = await this.cellsService.dashboardsDashboardIDCellsPut(
      dashboardID,
      cells,
    );

    return data.cells || [];
  }

  public async addLabel(dashboardID: string, labelID: string): Promise<ILabel> {
    const { data } = await this.service.dashboardsDashboardIDLabelsPost(
      dashboardID,
      {
        labelID,
      },
    );

    if (!data.label) {
      throw new Error("Failed to add label");
    }

    return addLabelDefaults(data.label);
  }

  public async addLabels(
    dashboardID: string,
    labelIDs: string[],
  ): Promise<ILabel[]> {
    return Promise.all(
      labelIDs.map((labelID) => {
        return this.addLabel(dashboardID, labelID);
      }),
    );
  }

  public async removeLabel(
    dashboardID: string,
    labelID: string,
  ): Promise<Response> {
    const {
      data,
    } = await this.service.dashboardsDashboardIDLabelsLabelIDDelete(
      dashboardID,
      labelID,
    );

    return data;
  }

  public async getView(dashboardID: string, cellID: string): Promise<View> {
    const { data } = await this.service.dashboardsDashboardIDCellsCellIDViewGet(
      dashboardID,
      cellID,
    );

    return data;
  }

  public async updateView(
    dashboardID: string,
    cellID: string,
    view: Partial<View>,
  ): Promise<View> {
    const {
      data,
    } = await this.service.dashboardsDashboardIDCellsCellIDViewPatch(
      dashboardID,
      cellID,
      view,
    );

    return data;
  }

  public async clone(dashboardID: string, cloneName: string): Promise<IDashboard | null> {

    const original = await this.get(dashboardID);

    const { name, description, orgID } = original;

    const dashboardWithoutCells = { name, description, orgID };

    const createdDashboard = await this.create({
      ...dashboardWithoutCells,
      name: cloneName,
    });

    if (!createdDashboard || !createdDashboard.id) {
      throw new Error("Could not create dashboard");
    }

    await this.cloneViews(original, createdDashboard);
    await this.cloneLabels(original, createdDashboard);

    return this.get(createdDashboard.id);
  }

  public async createFromTemplate(
    template: IDashboardTemplate,
    orgID: string,
  ): Promise<IDashboard> {
    const { content } = template;

    if (
      content.data.type !== TemplateType.Dashboard ||
      template.meta.version !== "1"
    ) {
      throw new Error("Can not create dashboard from this template");
    }

    const { name, description } = content.data.attributes;

    const createdDashboard = await this.create({ orgID, name, description });

    if (!createdDashboard || !createdDashboard.id) {
      throw new Error("Failed to create dashboard");
    }

    await Promise.all([
      await this.createLabelsFromTemplate(template, createdDashboard),
      await this.createCellsFromTemplate(template, createdDashboard),
    ]);

    const dashboard = await this.get(createdDashboard.id);

    return addDefaults(dashboard);
  }

  private async createLabelsFromTemplate(
    template: IDashboardTemplate,
    dashboard: IDashboard,
  ) {

    if (!dashboard || !dashboard.id) {
      throw new Error("Can not add labels to undefined Dashboard");
    }

    const { content } = template;

    if (
      !content.data.relationships ||
      !content.data.relationships[TemplateType.Label]
    ) {
      return;
    }

    const labelRelationships =
      content.data.relationships[TemplateType.Label].data;

    const includedResources = content.included || [];

    const labelsIncluded = includedResources.reduce((acc, ir) => {
      if (ir.type === TemplateType.Label) {
        const found = labelRelationships.some((lr) => lr.type === TemplateType.Label && lr.id === ir.id);
        if (found) {
          acc = [...acc, ir];
        }
      }
      return acc;
    }, [] as ILabelIncluded[]);

    const {labelsToCreate, labelIDsToAdd} = await this.separateExistingLabels(labelsIncluded);

    const createdLabels = await this.createLabels(labelsToCreate);
    const createdLabelIDs = createdLabels.map((l) => l.id).filter((id): id is string => !!id);

    await this.addLabels(dashboard.id, [...createdLabelIDs, ...labelIDsToAdd]);
  }

  private async createLabels(labelsToCreate: ILabelIncluded[]): Promise<Label[]> {
    const pendingLabels = labelsToCreate.map((l) => {
      const { attributes: { name, properties } } = l;
      return this.labelsService.labelsPost({ name, properties });
    });

    const labelsResponse = await Promise.all(pendingLabels);

    return labelsResponse
      .map((lr) => lr.data.label)
      .filter((cl): cl is Label => !!cl);
  }

  private async separateExistingLabels(labelsFromTemplate: ILabelIncluded[])  {
    const {data} = await this.labelsService.labelsGet();
    const existingLabels = data.labels || [];

    return labelsFromTemplate.reduce((acc, l) => {
      const existingLabel = existingLabels.find((el) => el.name === l.attributes.name);

      if (!existingLabel || !existingLabel.id) {
        acc.labelsToCreate = [...acc.labelsToCreate, l];
        return acc;
      }

      acc.labelIDsToAdd = [...acc.labelIDsToAdd, existingLabel.id];
      return acc;
    }, {labelIDsToAdd: [] as string[], labelsToCreate: [] as ILabelIncluded[]});
  }

  private async createCellsFromTemplate(template: IDashboardTemplate, createdDashboard: IDashboard) {
    const { content } = template;

    if (
      !content.data.relationships ||
      !content.data.relationships[TemplateType.Cell]
    ) {
      return;
    }

    const cellRelationships =
      content.data.relationships[TemplateType.Cell].data;

    const includedResources = content.included || [];

    const cellsToCreate = includedResources.reduce((acc, ir) => {
      if (ir.type === TemplateType.Cell) {
        const found = cellRelationships.some((cr) => cr.type === TemplateType.Cell && cr.id === ir.id);
        if (found) {
          acc = [...acc, ir];
        }
      }
      return acc;
    }, [] as ICellIncluded[]);

    const pendingCells = cellsToCreate.map((c) => {
      const { attributes: { name, x, y, w, h } } = c;
      return this.createCell(createdDashboard.id, { name, x, y, w, h });
    });

    const cellResponses = await Promise.all(pendingCells);

    this.createViewsFromTemplate(template, cellResponses, cellsToCreate, createdDashboard);
  }

  private async createViewsFromTemplate(
    template: IDashboardTemplate,
    createdCells: Cell[],
    originalCellsIncluded: ICellIncluded[],
    createdDashboard: IDashboard,
  ) {
    const pendingViews = createdCells.map((c, i) => {
      const cellFromTemplate = originalCellsIncluded[i];
      const viewRelationship = cellFromTemplate.relationships[TemplateType.View].data;
      const includedResources = template.content.included || [];

      const includedView = includedResources.find((ir) => {
        return (ir.type === TemplateType.View && ir.id === viewRelationship.id);
      });

      if (includedView) {
        return this.updateView(createdDashboard.id, c.id || "", includedView.attributes);
      }
    });

    const definedPendingViews = pendingViews.filter((pv): pv is Promise<View> => !!pv);

    await Promise.all(definedPendingViews);
  }

  private async cloneLabels(
    originalDashboard: Dashboard,
    newDashboard: Dashboard,
  ): Promise<ILabel[]> {
    if (!newDashboard || !newDashboard.id) {
      throw new Error("Cannot create labels on invalid dashboard");
    }

    const labels = originalDashboard.labels || [];
    const newLabels = await this.addLabels(
      newDashboard.id,
      labels.map((label) => label.id || ""),
    );

    return newLabels.filter((l) => !!l).map(addLabelDefaults);
  }

  private async cloneViews(
    originalDashboard: Dashboard,
    newDashboard: Dashboard,
  ): Promise<View[]> {
    if (!newDashboard || !newDashboard.id) {
      throw new Error("Cannot create views on invalid dashboard");
    }
    const cells = originalDashboard.cells || [];

    const pendingViews = cells.map((c) =>
      this.getView(originalDashboard.id || "", c.id || ""),
    );
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
