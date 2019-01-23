import { TasksApi, Task, LabelResponse, User, Label } from "../api";

export default class {
  private service: TasksApi

  constructor(basePath: string) {
    this.service = new TasksApi({ basePath })
  }

  public async create(org: string, script: string): Promise<Task> {
    const {data} = await this.service.tasksPost({orgID: org, flux: script})

    return data
  }

  public async getByID(id: string): Promise<Task> {
    const {data} = await this.service.tasksTaskIDGet(id)

    return data
  }

  public async getAllByUser(user: User): Promise<Task[]> {
    const after = ''
    const { data } = await this.service.tasksGet(after, user.id)

    return data.tasks || []
  }

  public async update(id: string, updates: Partial<Task>) {
    const original = await this.getByID(id)
    const {data: updated} = await this.service.tasksTaskIDPatch(id, {...original, ...updates})

    return updated
  }

  public updateStatus(id: string, status: Task.StatusEnum): Promise<Task> {
    return this.update(id, {status})
  }

  public updateScript(id: string, script: string): Promise<Task> {
    return this.update(id, {flux: script})
  }

  public async addLabel(taskID: string, label: Label): Promise<LabelResponse> {
    if (!label.id) {
      throw new Error("label must have id")
    }

    const {data} = await this.service.tasksTaskIDLabelsPost(taskID, {labelID: label.id})

    return data
  }

  public async removeLabel(taskID: string, label: Label): Promise<Response> {
    if (!label.id) {
      throw new Error("label must have id")
    }

    const {data} = await this.service.tasksTaskIDLabelsLabelIDDelete(taskID, label.id)

    return data
  }

  public addLabels(taskID: string, labels: Label[]): Promise<LabelResponse[]> {
    const promises = labels.map(l => this.addLabel(taskID, l))

    return Promise.all(promises)
  }

  public removeLabels(taskID: string, labels: Label[]): Promise<Response[]> {
    const promises = labels.map(l => this.removeLabel(taskID, l))

    return Promise.all(promises)
  }
}