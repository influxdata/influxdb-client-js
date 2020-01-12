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
  taskID: string
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksID
   */
  getTasksID(
    request: GetTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchTasksID
   */
  patchTasksID(
    request: PatchTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Task> {
    return this.request(
      'PATCH',
      `/api/v2/tasks/${request.taskID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksID
   */
  deleteTasksID(
    request: DeleteTasksIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}`,
      request,
      requestOptions
    )
  }
  /**
   * List runs for a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRuns
   */
  getTasksIDRuns(
    request: GetTasksIDRunsRequest,
    requestOptions?: RequestOptions
  ): Promise<Runs> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/runs${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Manually start a task run, overriding the current schedule.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRuns
   */
  postTasksIDRuns(
    request: PostTasksIDRunsRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/runs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve a single run for a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsID
   */
  getTasksIDRunsID(
    request: GetTasksIDRunsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}`,
      request,
      requestOptions
    )
  }
  /**
   * Cancel a running task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDRunsID
   */
  deleteTasksIDRunsID(
    request: DeleteTasksIDRunsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retry a task run.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDRunsIDRetry
   */
  postTasksIDRunsIDRetry(
    request: PostTasksIDRunsIDRetryRequest,
    requestOptions?: RequestOptions
  ): Promise<Run> {
    return this.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}/retry`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve all logs for a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLogs
   */
  getTasksIDLogs(
    request: GetTasksIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<Logs> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/logs`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve all logs for a run.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDRunsIDLogs
   */
  getTasksIDRunsIDLogs(
    request: GetTasksIDRunsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<Logs> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/runs/${request.runID}/logs`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDLabels
   */
  getTasksIDLabels(
    request: GetTasksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDLabels
   */
  postTasksIDLabels(
    request: PostTasksIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDLabelsID
   */
  deleteTasksIDLabelsID(
    request: DeleteTasksIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all task members.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDMembers
   */
  getTasksIDMembers(
    request: GetTasksIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDMembers
   */
  postTasksIDMembers(
    request: PostTasksIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDMembersID
   */
  deleteTasksIDMembersID(
    request: DeleteTasksIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetTasksIDOwners
   */
  getTasksIDOwners(
    request: GetTasksIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/tasks/${request.taskID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostTasksIDOwners
   */
  postTasksIDOwners(
    request: PostTasksIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/tasks/${request.taskID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from a task.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteTasksIDOwnersID
   */
  deleteTasksIDOwnersID(
    request: DeleteTasksIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/tasks/${request.taskID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
