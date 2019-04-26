import {LogEvent, Run, Task, TasksApi, User} from '../api'
import {ILabel, ITask, ServiceOptions} from '../types'
import {addLabelDefaults} from './labels'

const addDefaults = (task: Task): ITask => {
  return {
    ...task,
    labels: (task.labels || []).map(addLabelDefaults),
  }
}

const addDefaultsToAll = (tasks: Task[]): ITask[] =>
  tasks.map(task => addDefaults(task))

export default class {
  private service: TasksApi
  private serviceOptions: ServiceOptions

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new TasksApi({basePath, baseOptions})
    this.serviceOptions = baseOptions
  }

  public async create(org: string, script: string): Promise<ITask> {
    const {data} = await this.service.tasksPost(
      {org, flux: script},
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async createByOrgID(orgID: string, script: string): Promise<ITask> {
    const {data} = await this.service.tasksPost(
      {orgID, flux: script},
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async get(id: string): Promise<ITask> {
    const {data} = await this.service.tasksTaskIDGet(
      id,
      undefined,
      this.serviceOptions
    )

    return addDefaults(data)
  }

  public async getAll(orgID?: string): Promise<ITask[]> {
    const {
      data: {tasks},
    } = await this.service.tasksGet(
      undefined,
      undefined,
      undefined,
      undefined,
      orgID,
      undefined,
      this.serviceOptions
    )

    return addDefaultsToAll(tasks || [])
  }

  public async getAllByOrg(org: string): Promise<ITask[]> {
    const {
      data: {tasks},
    } = await this.service.tasksGet(
      undefined,
      undefined,
      undefined,
      org,
      undefined,
      undefined,
      this.serviceOptions
    )

    return addDefaultsToAll(tasks || [])
  }

  public async getAllByUser(user: User): Promise<ITask[]> {
    const {data} = await this.service.tasksGet(
      undefined,
      undefined,
      user.id,
      undefined,
      undefined,
      undefined,
      this.serviceOptions
    )

    return addDefaultsToAll(data.tasks || [])
  }

  public async update(id: string, updates: Partial<Task>): Promise<ITask> {
    const original = await this.get(id)
    if (!!updates.cron) {
      delete original.every
    }

    if (!!updates.every) {
      delete original.cron
    }

    const {data: updated} = await this.service.tasksTaskIDPatch(
      id,
      {
        ...original,
        ...updates,
      },
      undefined,
      this.serviceOptions
    )

    return addDefaults(updated)
  }

  public updateStatus(id: string, status: Task.StatusEnum): Promise<Task> {
    return this.update(id, {status})
  }

  public updateScript(id: string, script: string): Promise<ITask> {
    return this.update(id, {flux: script})
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.tasksTaskIDDelete(
      id,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async addLabel(taskID: string, labelID: string): Promise<ILabel> {
    const {data} = await this.service.tasksTaskIDLabelsPost(
      taskID,
      {
        labelID,
      },
      undefined,
      this.serviceOptions
    )

    if (!data.label) {
      throw new Error('Failed to add label')
    }

    return addLabelDefaults(data.label)
  }

  public async removeLabel(taskID: string, labelID: string): Promise<Response> {
    const {data} = await this.service.tasksTaskIDLabelsLabelIDDelete(
      taskID,
      labelID,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public addLabels(taskID: string, labelIDs: string[]): Promise<ILabel[]> {
    const promises = labelIDs.map(l => this.addLabel(taskID, l))

    return Promise.all(promises)
  }

  public removeLabels(taskID: string, labelIDs: string[]): Promise<Response[]> {
    const promises = labelIDs.map(l => this.removeLabel(taskID, l))

    return Promise.all(promises)
  }

  public async getRunsByTaskID(taskID: string): Promise<Run[]> {
    const {
      data: {runs},
    } = await this.service.tasksTaskIDRunsGet(
      taskID,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      this.serviceOptions
    )

    return runs || []
  }

  public async startRunByTaskID(taskID: string): Promise<Run> {
    const {data} = await this.service.tasksTaskIDRunsPost(
      taskID,
      undefined,
      undefined,
      this.serviceOptions
    )

    return data
  }

  public async getLogEventsByRunID(
    taskID: string,
    runID: string
  ): Promise<LogEvent[]> {
    const {
      data: {events},
    } = await this.service.tasksTaskIDRunsRunIDLogsGet(
      taskID,
      runID,
      undefined,
      this.serviceOptions
    )

    return events || []
  }

  public async clone(taskID: string): Promise<ITask> {
    const original = await this.get(taskID)

    const createdTask = await this.create(original.org || '', original.flux)

    if (!createdTask || !createdTask.id) {
      throw new Error('Could not create task')
    }

    await this.cloneLabels(original, createdTask)

    return this.get(createdTask.id)
  }

  private async cloneLabels(
    originalTask: Task,
    newTask: Task
  ): Promise<ILabel[]> {
    if (!newTask || !newTask.id) {
      throw new Error('Cannot create labels on invalid task')
    }

    const labels = originalTask.labels || []
    const pendingLabels = labels.map(async label =>
      this.addLabel(newTask.id || '', label.id || '')
    )

    const newLabels = await Promise.all(pendingLabels)

    return newLabels.filter(l => !!l)
  }
}
