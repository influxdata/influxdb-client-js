import { LogEvent, Run, Task, TasksApi, User } from "../api";
import {ILabel, ITask} from "../types";
import {addLabelDefaults} from "./labels";

const addDefaults = (task: Task): ITask => {
  return {
    ...task,
    labels: (task.labels || []).map(addLabelDefaults),
  };
};

const addDefaultsToAll = (tasks: Task[]): ITask[] => (
  tasks.map((task) => addDefaults(task))
);

export default class {
  private service: TasksApi;

  constructor(basePath: string) {
    this.service = new TasksApi({ basePath });
  }

  public async create(org: string, script: string): Promise<ITask> {
    const { data } = await this.service.tasksPost({ org, flux: script });

    return addDefaults(data);
  }

  public async get(id: string): Promise<ITask> {
    const { data } = await this.service.tasksTaskIDGet(id);

    return addDefaults(data);
  }

  public async getAll(): Promise<ITask[]> {
    const {
      data: { tasks },
    } = await this.service.tasksGet();

    return addDefaultsToAll(tasks || []);
  }

  public async getAllByOrg(org: string): Promise<ITask[]> {
    const {
      data: { tasks },
    } = await this.service.tasksGet(undefined, undefined, undefined, org);

    return addDefaultsToAll(tasks || []);
  }

  public async getAllByUser(user: User): Promise<ITask[]> {
    const { data } = await this.service.tasksGet(undefined, undefined, user.id);

    return addDefaultsToAll(data.tasks || []);
  }

  public async update(id: string, updates: Partial<Task>): Promise<ITask> {
    const original = await this.get(id);
    const { data: updated } = await this.service.tasksTaskIDPatch(id, {
      ...original,
      ...updates,
    });

    return addDefaults(updated);
  }

  public updateStatus(id: string, status: Task.StatusEnum): Promise<Task> {
    return this.update(id, { status });
  }

  public updateScript(id: string, script: string): Promise<ITask> {
    return this.update(id, { flux: script });
  }

  public async delete(id: string): Promise<Response> {
    const { data } = await this.service.tasksTaskIDDelete(id);

    return data;
  }

  public async addLabel(taskID: string, label: ILabel): Promise<ILabel> {
    if (!label.id) {
      throw new Error("label must have id");
    }

    const { data } = await this.service.tasksTaskIDLabelsPost(taskID, {
      labelID: label.id,
    });

    if (!data.label) {
      throw new Error("API did not return a label");
    }

    return addLabelDefaults(data.label);
  }

  public async removeLabel(taskID: string, label: ILabel): Promise<Response> {
    if (!label.id) {
      throw new Error("label must have id");
    }

    const { data } = await this.service.tasksTaskIDLabelsLabelIDDelete(
      taskID,
      label.id,
    );

    return data;
  }

  public addLabels(taskID: string, labels: ILabel[]): Promise<ILabel[]> {
    const promises = labels.map((l) => this.addLabel(taskID, l));

    return Promise.all(promises);
  }

  public removeLabels(taskID: string, labels: ILabel[]): Promise<Response[]> {
    const promises = labels.map((l) => this.removeLabel(taskID, l));

    return Promise.all(promises);
  }

  public async getRunsByTaskID(taskID: string): Promise<Run[]> {
    const {
      data: { runs },
    } = await this.service.tasksTaskIDRunsGet(taskID);

    return runs || [];
  }

  public async startRunByTaskID(taskID: string): Promise<Run> {
    const { data } = await this.service.tasksTaskIDRunsPost(taskID);

    return data;
  }

  public async getLogEventsByRunID(
    taskID: string,
    runID: string,
  ): Promise<LogEvent[]> {
    const {
      data: { events },
    } = await this.service.tasksTaskIDRunsRunIDLogsGet(taskID, runID);

    return events || [];
  }

  public async clone(taskID: string): Promise<ITask> {
    const original = await this.get(taskID);

    const createdTask = await this.create(original.org || "", original.flux);

    if (!createdTask || !createdTask.id) {
      throw new Error("Could not create task");
    }

    await this.cloneLabels(original, createdTask);

    return this.get(createdTask.id);
  }

  private async cloneLabels(
    originalTask: Task,
    newTask: Task,
  ): Promise<ILabel[]> {
    if (!newTask || !newTask.id) {
      throw new Error("Cannot create labels on invalid task");
    }

    const labels = originalTask.labels || [];
    const pendingLabels = labels.map(async (label) =>
      this.addLabel(newTask.id || "", addLabelDefaults(label)),
    );

    const newLabels = await Promise.all(pendingLabels);

    return newLabels.filter((l) => !!l);
  }
}
