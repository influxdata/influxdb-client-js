import { Organization, Task, TasksApi, User } from "../api";
import { addLabelDefaults, Label } from "./labels";

export default class {
  private service: TasksApi;

  constructor(basePath: string) {
    this.service = new TasksApi({ basePath });
  }

  public async create(org: string, script: string): Promise<Task> {
    const {data} = await this.service.tasksPost({orgID: org, flux: script});

    return data;
  }

  public async get(id: string): Promise<Task> {
    const {data} = await this.service.tasksTaskIDGet(id);

    return data;
  }

  public async getAllByOrg({name}: Organization): Promise<Task[]> {
    const {data: {tasks}} = await this.service.tasksGet(undefined, undefined, name);

    return tasks || [];
  }

  public async getAllByUser(user: User): Promise<Task[]> {
    const { data } = await this.service.tasksGet(undefined, user.id);

    return data.tasks || [];
  }

  public async update(id: string, updates: Partial<Task>) {
    const original = await this.get(id);
    const {data: updated} = await this.service.tasksTaskIDPatch(id, {...original, ...updates});

    return updated;
  }

  public updateStatus(id: string, status: Task.StatusEnum): Promise<Task> {
    return this.update(id, {status});
  }

  public updateScript(id: string, script: string): Promise<Task> {
    return this.update(id, {flux: script});
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.tasksTaskIDDelete(id);

    return data;
  }

  public async addLabel(taskID: string, label: Label): Promise<Label> {
    if (!label.id) {
      throw new Error("label must have id");
    }

    const {data} = await this.service.tasksTaskIDLabelsPost(taskID, {labelID: label.id});

    if (!data.label) {
      throw new Error("API did not return a label");
    }

    return addLabelDefaults(data.label);
  }

  public async removeLabel(taskID: string, label: Label): Promise<Response> {
    if (!label.id) {
      throw new Error("label must have id");
    }

    const {data} = await this.service.tasksTaskIDLabelsLabelIDDelete(taskID, label.id);

    return data;
  }

  public addLabels(taskID: string, labels: Label[]): Promise<Label[]> {
    const promises = labels.map((l) => this.addLabel(taskID, l));

    return Promise.all(promises);
  }

  public removeLabels(taskID: string, labels: Label[]): Promise<Response[]> {
    const promises = labels.map((l) => this.removeLabel(taskID, l));

    return Promise.all(promises);
  }
}
