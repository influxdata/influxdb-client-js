import {InfluxDB} from '../../../core/src'
import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  Logs,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
  Run,
  RunManually,
  Runs,
  Task,
  TaskCreateRequest,
  TaskUpdateRequest,
  Tasks,
} from './types'

export interface GetTasksIDRunsRequest {
  /** The ID of the task to get runs for.
Only returns runs for this task.
 */
  taskID: string
  /** A task run ID. Only returns runs created after this run. */
  after?: string
  /** Limits the number of task runs returned. Default is `100`.
   */
  limit?: number
  /** A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#rfc3339-timestamp)).
Only returns runs scheduled after this time.
 */
  afterTime?: string
  /** A timestamp ([RFC3339 date/time format](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#rfc3339-timestamp)).
Only returns runs scheduled before this time.
 */
  beforeTime?: string
}
export interface PostTasksIDRunsRequest {
  taskID: string
  /** entity body */
  body: RunManually
}
export interface GetTasksIDRunsIDRequest {
  /** The ID of the task to retrieve runs for. */
  taskID: string
  /** The ID of the run to retrieve. */
  runID: string
}
export interface DeleteTasksIDRunsIDRequest {
  /** The ID of the task to cancel. */
  taskID: string
  /** The ID of the task run to cancel. */
  runID: string
}
export interface PostTasksIDRunsIDRetryRequest {
  /** A [task](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task)  ID.
Specifies the task to retry.
 */
  taskID: string
  /** A [task](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task) run ID.
Specifies the task run to retry.

To find a task run ID, use the
[`GET /api/v2/tasks/{taskID}/runs` endpoint](#operation/GetTasksIDRuns)
to list task runs.
 */
  runID: string
  /** entity body */
  body: any
}
export interface GetTasksIDLogsRequest {
  /** The task ID. */
  taskID: string
}
export interface GetTasksIDRunsIDLogsRequest {
  /** The ID of the task to get logs for. */
  taskID: string
  /** The ID of the run to get logs for. */
  runID: string
}
export interface GetTasksIDLabelsRequest {
  /** The ID of the task to retrieve labels for. */
  taskID: string
}
export interface PostTasksIDLabelsRequest {
  /** The ID of the task to label. */
  taskID: string
  /** An object that contains a _`labelID`_ to add to the task. */
  body: LabelMapping
}
export interface DeleteTasksIDLabelsIDRequest {
  /** The ID of the task to delete the label from. */
  taskID: string
  /** The ID of the label to delete. */
  labelID: string
}
export interface GetTasksIDMembersRequest {
  /** The task ID. */
  taskID: string
}
export interface PostTasksIDMembersRequest {
  /** The task ID. */
  taskID: string
  /** A user to add as a member of the task. */
  body: AddResourceMemberRequestBody
}
export interface DeleteTasksIDMembersIDRequest {
  /** The ID of the member to remove. */
  userID: string
  /** The task ID. */
  taskID: string
}
export interface GetTasksIDOwnersRequest {
  /** The ID of the task to retrieve owners for. */
  taskID: string
}
export interface PostTasksIDOwnersRequest {
  /** The task ID. */
  taskID: string
  /** A user to add as an owner of the task. */
  body: AddResourceMemberRequestBody
}
export interface DeleteTasksIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The task ID. */
  taskID: string
}
export interface GetTasksRequest {
  /** A [task](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task) name.
Only returns tasks with the specified name.
Different tasks may have the same name.
 */
  name?: string
  /** A [task](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task) ID.
Only returns tasks created after the specified task.
 */
  after?: string
  /** A [user](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#user) ID.
Only returns tasks owned by the specified user.
 */
  user?: string
  /** An [organization](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#organization) name.
Only returns tasks owned by the specified organization.
 */
  org?: string
  /** An [organization](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#organization) ID.
Only returns tasks owned by the specified organization.
 */
  orgID?: string
  /** A [task](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task) status.
Only returns tasks that have the specified status (`active` or `inactive`).
 */
  status?: string
  /** The maximum number of [tasks](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task) to return.
Default is `100`.
The minimum is `1` and the maximum is `500`.

To reduce the payload size, combine _`type=basic`_ and _`limit`_ (see _Request samples_).
For more information about the `basic` response, see the _`type`_ parameter.
 */
  limit?: number
  /** A [task](https://docs.influxdata.com/influxdb/v2.3/reference/glossary/#task) type (`basic` or `system`).
Default is `system`.
Specifies the level of detail for tasks in the response.
The default (`system`) response contains all the metadata properties for tasks.
To reduce the response size, pass `basic` to omit some task properties (`flux`, `createdAt`, `updatedAt`).
 */
  type?: string
}
export interface PostTasksRequest {
  /** The task to create. */
  body: TaskCreateRequest
}
export interface GetTasksIDRequest {
  /** The ID of the task to retrieve. */
  taskID: string
}
export interface PatchTasksIDRequest {
  /** The ID of the task to update. */
  taskID: string
  /** An object that contains updated task properties to apply. */
  body: TaskUpdateRequest
}
export interface DeleteTasksIDRequest {
  /** The ID of the task to delete. */
  taskID: string
}
/**
 * Tasks API
 */
export class TasksAPI {
  // internal
  private base: APIBase

  /**
   * Creates TasksAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List runs for a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDRuns }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksIDRuns(
    request: GetTasksIDRunsRequest,
    requestOptions?: RequestOptions
  ): Promise<Runs> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/runs${this.base.queryString(request, [
        'after',
        'limit',
        'afterTime',
        'beforeTime',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Start a task run, overriding the schedule.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostTasksIDRuns }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTasksIDRuns(
    request: PostTasksIDRunsRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.base.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/runs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a run for a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDRunsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksIDRunsID(
    request: GetTasksIDRunsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}`,
      request,
      requestOptions
    )
  }
  /**
   * Cancel a running task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteTasksIDRunsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTasksIDRunsID(
    request: DeleteTasksIDRunsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retry a task run.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostTasksIDRunsIDRetry }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTasksIDRunsIDRetry(
    request: PostTasksIDRunsIDRetryRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.base.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}/retry`,
      request,
      requestOptions,
      'application/json; charset=utf-8'
    )
  }
  /**
   * Retrieve all logs for a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDLogs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksIDLogs(
    request: GetTasksIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<Logs> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/logs`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve all logs for a run.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDRunsIDLogs }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksIDRunsIDLogs(
    request: GetTasksIDRunsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<Logs> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}/logs`,
      request,
      requestOptions
    )
  }
  /**
   * List labels for a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksIDLabels(
    request: GetTasksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostTasksIDLabels }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTasksIDLabels(
    request: PostTasksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteTasksIDLabelsID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTasksIDLabelsID(
    request: DeleteTasksIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all task members.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksIDMembers(
    request: GetTasksIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostTasksIDMembers }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTasksIDMembers(
    request: PostTasksIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.base.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteTasksIDMembersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTasksIDMembersID(
    request: DeleteTasksIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksIDOwners(
    request: GetTasksIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner for a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostTasksIDOwners }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTasksIDOwners(
    request: PostTasksIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.base.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteTasksIDOwnersID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTasksIDOwnersID(
    request: DeleteTasksIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List tasks.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasks }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasks(
    request?: GetTasksRequest,
    requestOptions?: RequestOptions
  ): Promise<Tasks> {
    return this.base.request(
      'GET',
      `/api/v2/tasks${this.base.queryString(request, [
        'name',
        'after',
        'user',
        'org',
        'orgID',
        'status',
        'limit',
        'type',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PostTasks }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postTasks(
    request: PostTasksRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.base.request(
      'POST',
      `/api/v2/tasks`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/GetTasksID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getTasksID(
    request: GetTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.base.request(
      'GET',
      `/api/v2/tasks/${request.taskID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/PatchTasksID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  patchTasksID(
    request: PatchTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.base.request(
      'PATCH',
      `/api/v2/tasks/${request.taskID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a task.
   * See {@link https://docs.influxdata.com/influxdb/v2.4/api/#operation/DeleteTasksID }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  deleteTasksID(
    request: DeleteTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}`,
      request,
      requestOptions
    )
  }
}
