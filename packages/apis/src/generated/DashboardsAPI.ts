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
  /** List of dashboard IDs to return. If both `id and `owner` are specified, only `id` is used. */
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
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboards
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboards
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDCells
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PutDashboardsIDCells
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDCellsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDCellsIDView
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsIDView
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDLabelsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDMembersID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDOwnersID
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboards
   * @param request
   * @return promise of response
   */
  getDashboards(
    request?: GetDashboardsRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboards> {
    return this.request(
      'GET',
      `/api/v2/dashboards${this.queryString(request, [
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboards
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsID
   * @param request
   * @return promise of response
   */
  getDashboardsID(
    request: GetDashboardsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Dashboard | DashboardWithViewProperties> {
    return this.request(
      'GET',
      `/api/v2/dashboards/${request.dashboardID}${this.queryString(request, [
        'include',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a dashboard.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDCells
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PutDashboardsIDCells
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDCellsID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDCellsIDView
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchDashboardsIDCellsIDView
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDLabels
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDLabels
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDLabelsID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDMembers
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDMembers
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDMembersID
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetDashboardsIDOwners
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostDashboardsIDOwners
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteDashboardsIDOwnersID
   * @param request
   * @return promise of response
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
}
