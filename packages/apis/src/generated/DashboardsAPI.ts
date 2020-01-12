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
  /** The ID of the dashboard to update. */
  dashboardID: string
  query: {
    /** Includes the cell view properties in the response if set to `properties` */
    include?: string
  }
}
export interface PatchDashboardsIDRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  /** Patching of a dashboard */
  body: Dashboard
}
export interface DeleteDashboardsIDRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
}
export interface PostDashboardsIDCellsRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  /** Cell that will be added */
  body: CreateCell
}
export interface PutDashboardsIDCellsRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  body: Cells
}
export interface PatchDashboardsIDCellsIDRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  /** The ID of the cell to update. */
  cellID: string
  body: CellUpdate
}
export interface DeleteDashboardsIDCellsIDRequest {
  /** The ID of the dashboard to delete. */
  dashboardID: string
  /** The ID of the cell to delete. */
  cellID: string
}
export interface GetDashboardsIDCellsIDViewRequest {
  /** The dashboard ID. */
  dashboardID: string
  /** The cell ID. */
  cellID: string
}
export interface PatchDashboardsIDCellsIDViewRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  /** The ID of the cell to update. */
  cellID: string
  body: View
}
export interface GetDashboardsIDLabelsRequest {
  /** The dashboard ID. */
  dashboardID: string
}
export interface PostDashboardsIDLabelsRequest {
  /** The dashboard ID. */
  dashboardID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteDashboardsIDLabelsIDRequest {
  /** The dashboard ID. */
  dashboardID: string
  /** The ID of the label to delete. */
  labelID: string
}
export interface GetDashboardsIDMembersRequest {
  /** The dashboard ID. */
  dashboardID: string
}
export interface PostDashboardsIDMembersRequest {
  /** The dashboard ID. */
  dashboardID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteDashboardsIDMembersIDRequest {
  /** The ID of the member to remove. */
  userID: string
  /** The dashboard ID. */
  dashboardID: string
}
export interface GetDashboardsIDOwnersRequest {
  /** The dashboard ID. */
  dashboardID: string
}
export interface PostDashboardsIDOwnersRequest {
  /** The dashboard ID. */
  dashboardID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteDashboardsIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The dashboard ID. */
  dashboardID: string
}
export interface GetDashboardsIDLogsRequest {
  /** The dashboard ID. */
  dashboardID: string
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsID
   */
  getDashboardsID(
    request: GetDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard | DashboardWithViewProperties> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsID
   */
  patchDashboardsID(
    request: PatchDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard> {
    return this.request(
      'PATCH',
      `/api/v2/dashboards/${request.dashboardID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsID
   */
  deleteDashboardsID(
    request: DeleteDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a dashboard cell.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDCells
   */
  postDashboardsIDCells(
    request: PostDashboardsIDCellsRequest,
    requestOptions?: RequestOptions
  ): Promise<Cell> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/cells`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Replace cells in a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PutDashboardsIDCells
   */
  putDashboardsIDCells(
    request: PutDashboardsIDCellsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard> {
    return this.request(
      'PUT',
      `/api/v2/dashboards/${request.dashboardID}/cells`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update the non-positional information related to a cell.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsID
   */
  patchDashboardsIDCellsID(
    request: PatchDashboardsIDCellsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Cell> {
    return this.request(
      'PATCH',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a dashboard cell.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDCellsID
   */
  deleteDashboardsIDCellsID(
    request: DeleteDashboardsIDCellsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the view for a cell.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDCellsIDView
   */
  getDashboardsIDCellsIDView(
    request: GetDashboardsIDCellsIDViewRequest,
    requestOptions?: RequestOptions
  ): Promise<View> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}/view`,
      request,
      requestOptions
    )
  }
  /**
   * Update the view for a cell.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsIDView
   */
  patchDashboardsIDCellsIDView(
    request: PatchDashboardsIDCellsIDViewRequest,
    requestOptions?: RequestOptions
  ): Promise<View> {
    return this.request(
      'PATCH',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}/view`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * list all labels for a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLabels
   */
  getDashboardsIDLabels(
    request: GetDashboardsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDLabels
   */
  postDashboardsIDLabels(
    request: PostDashboardsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDLabelsID
   */
  deleteDashboardsIDLabelsID(
    request: DeleteDashboardsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all dashboard members.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDMembers
   */
  getDashboardsIDMembers(
    request: GetDashboardsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDMembers
   */
  postDashboardsIDMembers(
    request: PostDashboardsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDMembersID
   */
  deleteDashboardsIDMembersID(
    request: DeleteDashboardsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all dashboard owners.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDOwners
   */
  getDashboardsIDOwners(
    request: GetDashboardsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDOwners
   */
  postDashboardsIDOwners(
    request: PostDashboardsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDOwnersID
   */
  deleteDashboardsIDOwnersID(
    request: DeleteDashboardsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve operation logs for a dashboard.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLogs
   */
  getDashboardsIDLogs(
    request: GetDashboardsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/logs${this.queryString(
        request
      )}`,
      request,
      requestOptions
    )
  }
}
