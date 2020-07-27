import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  Cell,
  CellUpdate,
  CellWithViewProperties,
  Cells,
  CreateCell,
  CreateDashboardRequest,
  Dashboard,
  DashboardWithViewProperties,
  Dashboards,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
  View,
} from './types'

export interface GetDashboardsRequest {
  /** The owner ID. */
  owner?: string
  /** The column to sort by. */
  sortBy?: string
  /** List of dashboard IDs to return. If both `id` and `owner` are specified, only `id` is used. */
  id?: any
  /** The organization ID. */
  orgID?: string
  /** The organization name. */
  org?: string
}
export interface PostDashboardsRequest {
  /** Dashboard to create */
  body: CreateDashboardRequest
}
export interface GetDashboardsIDRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  /** Includes the cell view properties in the response if set to `properties` */
  include?: string
}
export interface PatchDashboardsIDRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  /** Patching of a dashboard */
  body: {
    /** optional, when provided will replace the name */
    name?: string
    /** optional, when provided will replace the description */
    description?: string
    /** optional, when provided will replace all existing cells with the cells provided */
    cells?: CellWithViewProperties
  }
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
  /** entity body */
  body: Cells
}
export interface PatchDashboardsIDCellsIDRequest {
  /** The ID of the dashboard to update. */
  dashboardID: string
  /** The ID of the cell to update. */
  cellID: string
  /** entity body */
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
  /** entity body */
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
/**
 * Dashboards API
 */
export class DashboardsAPI {
  // internal
  private base: APIBase

  /**
   * Creates DashboardsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Get all dashboards.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboards }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDashboards(
    request?: GetDashboardsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboards> {
    return this.base.request(
      'GET',
      `/api/v2/dashboards${this.base.queryString(request, [
        'owner',
        'sortBy',
        'id',
        'orgID',
        'org',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboards }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDashboards(
    request: PostDashboardsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard | DashboardWithViewProperties> {
    return this.base.request(
      'POST',
      `/api/v2/dashboards`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Get a Dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDashboardsID(
    request: GetDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard | DashboardWithViewProperties> {
    return this.base.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}${this.base.queryString(
        request,
        ['include']
      )}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchDashboardsID(
    request: PatchDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard> {
    return this.base.request(
      'PATCH',
      `/api/v2/dashboards/${request.dashboardID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDashboardsID(
    request: DeleteDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a dashboard cell.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDCells }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDashboardsIDCells(
    request: PostDashboardsIDCellsRequest,
    requestOptions?: RequestOptions
  ): Promise<Cell> {
    return this.base.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/cells`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Replace cells in a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PutDashboardsIDCells }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  putDashboardsIDCells(
    request: PutDashboardsIDCellsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard> {
    return this.base.request(
      'PUT',
      `/api/v2/dashboards/${request.dashboardID}/cells`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Update the non-positional information related to a cell.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchDashboardsIDCellsID(
    request: PatchDashboardsIDCellsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Cell> {
    return this.base.request(
      'PATCH',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a dashboard cell.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDCellsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDashboardsIDCellsID(
    request: DeleteDashboardsIDCellsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve the view for a cell.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDCellsIDView }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDashboardsIDCellsIDView(
    request: GetDashboardsIDCellsIDViewRequest,
    requestOptions?: RequestOptions
  ): Promise<View> {
    return this.base.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}/view`,
      request,
      requestOptions
    )
  }
  /**
   * Update the view for a cell.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsIDView }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchDashboardsIDCellsIDView(
    request: PatchDashboardsIDCellsIDViewRequest,
    requestOptions?: RequestOptions
  ): Promise<View> {
    return this.base.request(
      'PATCH',
      `/api/v2/dashboards/${request.dashboardID}/cells/${request.cellID}/view`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * list all labels for a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDashboardsIDLabels(
    request: GetDashboardsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDashboardsIDLabels(
    request: PostDashboardsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDashboardsIDLabelsID(
    request: DeleteDashboardsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all dashboard members.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDashboardsIDMembers(
    request: GetDashboardsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.base.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDashboardsIDMembers(
    request: PostDashboardsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.base.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDMembersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDashboardsIDMembersID(
    request: DeleteDashboardsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all dashboard owners.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getDashboardsIDOwners(
    request: GetDashboardsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.base.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postDashboardsIDOwners(
    request: PostDashboardsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.base.request(
      'POST',
      `/api/v2/dashboards/${request.dashboardID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a dashboard.
   * See {@link https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDOwnersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteDashboardsIDOwnersID(
    request: DeleteDashboardsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/dashboards/${request.dashboardID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
