import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  Cell,
  CellUpdate,
  Cells,
  CreateCell,
  CreateDashboardRequest,
  Dashboard,
  DashboardWithViewProperties,
  Dashboards,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  OperationLogs,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
  View,
} from './types'

export interface GetDashboardsRequest {
  query: {
    /** The owner ID. */
    owner?: string
    /** The column to sort by. */
    sortBy?: string
    /** List of dashboard IDs to return. If both `id and `owner` are specified, only `id` is used. */
    id?: any
    /** The organization ID. */
    orgID?: string
    /** The organization name. */
    org?: string
  }
}
export interface PostDashboardsRequest {
  /** Dashboard to create */
  body: CreateDashboardRequest
}
export interface GetDashboardsIDRequest {
  query: {
    /** Includes the cell view properties in the response if set to `properties` */
    include?: string
  }
}
export interface PatchDashboardsIDRequest {
  /** Patching of a dashboard */
  body: Dashboard
}
export interface DeleteDashboardsIDRequest {}
export interface PostDashboardsIDCellsRequest {
  /** Cell that will be added */
  body: CreateCell
}
export interface PutDashboardsIDCellsRequest {
  body: Cells
}
export interface PatchDashboardsIDCellsIDRequest {
  body: CellUpdate
}
export interface DeleteDashboardsIDCellsIDRequest {}
export interface GetDashboardsIDCellsIDViewRequest {}
export interface PatchDashboardsIDCellsIDViewRequest {
  body: View
}
export interface GetDashboardsIDLabelsRequest {}
export interface PostDashboardsIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteDashboardsIDLabelsIDRequest {}
export interface GetDashboardsIDMembersRequest {}
export interface PostDashboardsIDMembersRequest {
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteDashboardsIDMembersIDRequest {}
export interface GetDashboardsIDOwnersRequest {}
export interface PostDashboardsIDOwnersRequest {
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteDashboardsIDOwnersIDRequest {}
export interface GetDashboardsIDLogsRequest {
  query: {
    offset?: number
    limit?: number
  }
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboards
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboards
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDCells
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutDashboardsIDCells
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDCellsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDCellsIDView
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsIDView
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDMembersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDOwnersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLogs
 */
export class DashboardsAPI extends APIBase {
  /**
   * Creates DashboardsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * Get all dashboards.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboards
   */
  getDashboards(
    request?: GetDashboardsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboards> {
    return this.request(
      'GET',
      `/api/v2/dashboards${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboards
   */
  postDashboards(
    request: PostDashboardsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard | DashboardWithViewProperties> {
    return this.request(
      'POST',
      `/api/v2/dashboards`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a Dashboard.
   * @param dashboardID The ID of the dashboard to update.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsID
   */
  getDashboardsID(
    dashboardID: string,
    request?: GetDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard | DashboardWithViewProperties> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${dashboardID}${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a dashboard.
   * @param dashboardID The ID of the dashboard to update.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsID
   */
  patchDashboardsID(
    dashboardID: string,
    request: PatchDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard> {
    return this.request(
      'PATCH',
      `/api/v2/dashboards/${dashboardID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a dashboard.
   * @param dashboardID The ID of the dashboard to update.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsID
   */
  deleteDashboardsID(
    dashboardID: string,
    request?: DeleteDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${dashboardID}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a dashboard cell.
   * @param dashboardID The ID of the dashboard to update.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDCells
   */
  postDashboardsIDCells(
    dashboardID: string,
    request: PostDashboardsIDCellsRequest,
    requestOptions?: RequestOptions
  ): Promise<Cell> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${dashboardID}/cells`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Replace cells in a dashboard.
   * @param dashboardID The ID of the dashboard to update.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutDashboardsIDCells
   */
  putDashboardsIDCells(
    dashboardID: string,
    request: PutDashboardsIDCellsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard> {
    return this.request(
      'PUT',
      `/api/v2/dashboards/${dashboardID}/cells`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update the non-positional information related to a cell.
   * @param dashboardID The ID of the dashboard to update.
   * @param cellID The ID of the cell to update.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsID
   */
  patchDashboardsIDCellsID(
    dashboardID: string,
    cellID: string,
    request: PatchDashboardsIDCellsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Cell> {
    return this.request(
      'PATCH',
      `/api/v2/dashboards/${dashboardID}/cells/${cellID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a dashboard cell.
   * @param dashboardID The ID of the dashboard to delete.
   * @param cellID The ID of the cell to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDCellsID
   */
  deleteDashboardsIDCellsID(
    dashboardID: string,
    cellID: string,
    request?: DeleteDashboardsIDCellsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${dashboardID}/cells/${cellID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the view for a cell.
   * @param dashboardID The dashboard ID.
   * @param cellID The cell ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDCellsIDView
   */
  getDashboardsIDCellsIDView(
    dashboardID: string,
    cellID: string,
    request?: GetDashboardsIDCellsIDViewRequest,
    requestOptions?: RequestOptions
  ): Promise<View> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${dashboardID}/cells/${cellID}/view`,
      request,
      requestOptions
    )
  }
  /**
   * Update the view for a cell.
   * @param dashboardID The ID of the dashboard to update.
   * @param cellID The ID of the cell to update.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsIDView
   */
  patchDashboardsIDCellsIDView(
    dashboardID: string,
    cellID: string,
    request: PatchDashboardsIDCellsIDViewRequest,
    requestOptions?: RequestOptions
  ): Promise<View> {
    return this.request(
      'PATCH',
      `/api/v2/dashboards/${dashboardID}/cells/${cellID}/view`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * list all labels for a dashboard.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLabels
   */
  getDashboardsIDLabels(
    dashboardID: string,
    request?: GetDashboardsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${dashboardID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a dashboard.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDLabels
   */
  postDashboardsIDLabels(
    dashboardID: string,
    request: PostDashboardsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${dashboardID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a dashboard.
   * @param dashboardID The dashboard ID.
   * @param labelID The ID of the label to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDLabelsID
   */
  deleteDashboardsIDLabelsID(
    dashboardID: string,
    labelID: string,
    request?: DeleteDashboardsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${dashboardID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all dashboard members.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDMembers
   */
  getDashboardsIDMembers(
    dashboardID: string,
    request?: GetDashboardsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${dashboardID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a dashboard.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDMembers
   */
  postDashboardsIDMembers(
    dashboardID: string,
    request: PostDashboardsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${dashboardID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a dashboard.
   * @param userID The ID of the member to remove.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDMembersID
   */
  deleteDashboardsIDMembersID(
    userID: string,
    dashboardID: string,
    request?: DeleteDashboardsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${dashboardID}/members/${userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all dashboard owners.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDOwners
   */
  getDashboardsIDOwners(
    dashboardID: string,
    request?: GetDashboardsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${dashboardID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a dashboard.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDOwners
   */
  postDashboardsIDOwners(
    dashboardID: string,
    request: PostDashboardsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${dashboardID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a dashboard.
   * @param userID The ID of the owner to remove.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDOwnersID
   */
  deleteDashboardsIDOwnersID(
    userID: string,
    dashboardID: string,
    request?: DeleteDashboardsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${dashboardID}/owners/${userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve operation logs for a dashboard.
   * @param dashboardID The dashboard ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLogs
   */
  getDashboardsIDLogs(
    dashboardID: string,
    request?: GetDashboardsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${dashboardID}/logs${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
}
