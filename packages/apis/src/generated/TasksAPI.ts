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
  query: {
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
}
export interface PostTasksRequest {
  /** Task to create */
  body: TaskCreateRequest
}
export interface GetTasksIDRequest {}
export interface PatchTasksIDRequest {
  /** Task update to apply */
  body: TaskUpdateRequest
}
export interface DeleteTasksIDRequest {}
export interface GetTasksIDRunsRequest {
  query: {
    /** Returns runs after a specific ID. */
    after?: string
    /** The number of runs to return */
    limit?: number
    /** Filter runs to those scheduled after this time, RFC3339 */
    afterTime?: string
    /** Filter runs to those scheduled before this time, RFC3339 */
    beforeTime?: string
  }
}
export interface PostTasksIDRunsRequest {
  body: RunManually
}
export interface GetTasksIDRunsIDRequest {}
export interface DeleteTasksIDRunsIDRequest {}
export interface PostTasksIDRunsIDRetryRequest {}
export interface GetTasksIDLogsRequest {}
export interface GetTasksIDRunsIDLogsRequest {}
export interface GetTasksIDLabelsRequest {}
export interface PostTasksIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteTasksIDLabelsIDRequest {}
export interface GetTasksIDMembersRequest {}
export interface PostTasksIDMembersRequest {
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteTasksIDMembersIDRequest {}
export interface GetTasksIDOwnersRequest {}
export interface PostTasksIDOwnersRequest {
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteTasksIDOwnersIDRequest {}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasks
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasks
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchTasksID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRuns
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRuns
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDRunsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRunsIDRetry
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLogs
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsIDLogs
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDMembersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDOwnersID
 */
export class TasksAPI extends APIBase {
  /**
   * Creates TasksAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * List all tasks.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasks
   */
  getTasks(
    request?: GetTasksRequest,
    requestOptions?: RequestOptions
  ): Promise<Tasks> {
    return this.request(
      'GET',
      `/api/v2/tasks${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Create a new task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasks
   */
  postTasks(
    request: PostTasksRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.request(
      'POST',
      `/api/v2/tasks`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksID
   */
  getTasksID(
    taskID: string,
    request?: GetTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchTasksID
   */
  patchTasksID(
    taskID: string,
    request: PatchTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.request(
      'PATCH',
      `/api/v2/tasks/${taskID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a task.
   * @param taskID The ID of the task to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksID
   */
  deleteTasksID(
    taskID: string,
    request?: DeleteTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${taskID}`,
      request,
      requestOptions
    )
  }
  /**
   * List runs for a task.
   * @param taskID The ID of the task to get runs for.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRuns
   */
  getTasksIDRuns(
    taskID: string,
    request?: GetTasksIDRunsRequest,
    requestOptions?: RequestOptions
  ): Promise<Runs> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}/runs${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Manually start a task run, overriding the current schedule.
   * @param taskID
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRuns
   */
  postTasksIDRuns(
    taskID: string,
    request: PostTasksIDRunsRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.request(
      'POST',
      `/api/v2/tasks/${taskID}/runs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a single run for a task.
   * @param taskID The task ID.
   * @param runID The run ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsID
   */
  getTasksIDRunsID(
    taskID: string,
    runID: string,
    request?: GetTasksIDRunsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}/runs/${runID}`,
      request,
      requestOptions
    )
  }
  /**
   * Cancel a running task.
   * @param taskID The task ID.
   * @param runID The run ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDRunsID
   */
  deleteTasksIDRunsID(
    taskID: string,
    runID: string,
    request?: DeleteTasksIDRunsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${taskID}/runs/${runID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retry a task run.
   * @param taskID The task ID.
   * @param runID The run ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRunsIDRetry
   */
  postTasksIDRunsIDRetry(
    taskID: string,
    runID: string,
    request?: PostTasksIDRunsIDRetryRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.request(
      'POST',
      `/api/v2/tasks/${taskID}/runs/${runID}/retry`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve all logs for a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLogs
   */
  getTasksIDLogs(
    taskID: string,
    request?: GetTasksIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<Logs> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}/logs`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve all logs for a run.
   * @param taskID ID of task to get logs for.
   * @param runID ID of run to get logs for.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsIDLogs
   */
  getTasksIDRunsIDLogs(
    taskID: string,
    runID: string,
    request?: GetTasksIDRunsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<Logs> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}/runs/${runID}/logs`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLabels
   */
  getTasksIDLabels(
    taskID: string,
    request?: GetTasksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDLabels
   */
  postTasksIDLabels(
    taskID: string,
    request: PostTasksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/tasks/${taskID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a task.
   * @param taskID The task ID.
   * @param labelID The label ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDLabelsID
   */
  deleteTasksIDLabelsID(
    taskID: string,
    labelID: string,
    request?: DeleteTasksIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${taskID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all task members.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDMembers
   */
  getTasksIDMembers(
    taskID: string,
    request?: GetTasksIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDMembers
   */
  postTasksIDMembers(
    taskID: string,
    request: PostTasksIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/tasks/${taskID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a task.
   * @param userID The ID of the member to remove.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDMembersID
   */
  deleteTasksIDMembersID(
    userID: string,
    taskID: string,
    request?: DeleteTasksIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${taskID}/members/${userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDOwners
   */
  getTasksIDOwners(
    taskID: string,
    request?: GetTasksIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/tasks/${taskID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a task.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDOwners
   */
  postTasksIDOwners(
    taskID: string,
    request: PostTasksIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/tasks/${taskID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a task.
   * @param userID The ID of the owner to remove.
   * @param taskID The task ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDOwnersID
   */
  deleteTasksIDOwnersID(
    userID: string,
    taskID: string,
    request?: DeleteTasksIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${taskID}/owners/${userID}`,
      request,
      requestOptions
    )
  }
}
