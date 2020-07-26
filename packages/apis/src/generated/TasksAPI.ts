import {InfluxDB} from '@influxdata/influxdb-client'
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

export interface GetTasksRequest {
  /** Returns task with a specific name. */
  name?: string
  /** Return tasks after a specified ID. */
  after?: string
  /** Filter tasks to a specific user ID. */
  user?: string
  /** Filter tasks to a specific organization name. */
  org?: string
  /** Filter tasks to a specific organization ID. */
  orgID?: string
  /** Filter tasks by a status--"inactive" or "active". */
  status?: string
  /** The number of tasks to return */
  limit?: number
}
export interface PostTasksRequest {
  /** Task to create */
  body: TaskCreateRequest
}
export interface GetTasksIDRequest {
  /** The task ID. */
  taskID: string
}
export interface PatchTasksIDRequest {
  /** The task ID. */
  taskID: string
  /** Task update to apply */
  body: TaskUpdateRequest
}
export interface DeleteTasksIDRequest {
  /** The ID of the task to delete. */
  taskID: string
}
export interface GetTasksIDRunsRequest {
  /** The ID of the task to get runs for. */
  taskID: string
  /** Returns runs after a specific ID. */
  after?: string
  /** The number of runs to return */
  limit?: number
  /** Filter runs to those scheduled after this time, RFC3339 */
  afterTime?: string
  /** Filter runs to those scheduled before this time, RFC3339 */
  beforeTime?: string
}
export interface PostTasksIDRunsRequest {
  taskID: string
  /** entity body */
  body: RunManually
}
export interface GetTasksIDRunsIDRequest {
  /** The task ID. */
  taskID: string
  /** The run ID. */
  runID: string
}
export interface DeleteTasksIDRunsIDRequest {
  /** The task ID. */
  taskID: string
  /** The run ID. */
  runID: string
}
export interface PostTasksIDRunsIDRetryRequest {
  /** The task ID. */
  taskID: string
  /** The run ID. */
  runID: string
}
export interface GetTasksIDLogsRequest {
  /** The task ID. */
  taskID: string
}
export interface GetTasksIDRunsIDLogsRequest {
  /** ID of task to get logs for. */
  taskID: string
  /** ID of run to get logs for. */
  runID: string
}
export interface GetTasksIDLabelsRequest {
  /** The task ID. */
  taskID: string
}
export interface PostTasksIDLabelsRequest {
  /** The task ID. */
  taskID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteTasksIDLabelsIDRequest {
  /** The task ID. */
  taskID: string
  /** The label ID. */
  labelID: string
}
export interface GetTasksIDMembersRequest {
  /** The task ID. */
  taskID: string
}
export interface PostTasksIDMembersRequest {
  /** The task ID. */
  taskID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteTasksIDMembersIDRequest {
  /** The ID of the member to remove. */
  userID: string
  /** The task ID. */
  taskID: string
}
export interface GetTasksIDOwnersRequest {
  /** The task ID. */
  taskID: string
}
export interface PostTasksIDOwnersRequest {
  /** The task ID. */
  taskID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteTasksIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The task ID. */
  taskID: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasks
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasks
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchTasksID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRuns
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRuns
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDRunsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRunsIDRetry
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLogs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsIDLogs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDLabelsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDMembersID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDOwnersID
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
   * List all tasks.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasks
   * @param request - request parameters and body (if supported)
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
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a new task.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasks
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksID
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchTasksID
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksID
   * @param request - request parameters and body (if supported)
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
  /**
   * List runs for a task.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRuns
   * @param request - request parameters and body (if supported)
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
   * Manually start a task run, overriding the current schedule.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRuns
   * @param request - request parameters and body (if supported)
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
   * Retrieve a single run for a task.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsID
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDRunsID
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRunsIDRetry
   * @param request - request parameters and body (if supported)
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
      requestOptions
    )
  }
  /**
   * Retrieve all logs for a task.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLogs
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsIDLogs
   * @param request - request parameters and body (if supported)
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
   * List all labels for a task.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLabels
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDLabels
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDLabelsID
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDMembers
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDMembers
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDMembersID
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDOwners
   * @param request - request parameters and body (if supported)
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
   * Add an owner to a task.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDOwners
   * @param request - request parameters and body (if supported)
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDOwnersID
   * @param request - request parameters and body (if supported)
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
}
