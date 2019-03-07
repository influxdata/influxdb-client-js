import { Label, LabelsApi, LogEvent, Run, Task, TasksApi, User } from "../api";
import {
  ILabel,
  ITask,
  ITaskTemplate,
  ITemplate,
  TemplateType,
} from "../types";
import { addLabelDefaults } from "./labels";

const addDefaults = (task: Task): ITask => {
  return {
    ...task,
    labels: (task.labels || []).map(addLabelDefaults),
  };
};

const addDefaultsToAll = (tasks: Task[]): ITask[] =>
  tasks.map((task) => addDefaults(task));

export default class {
  private service: TasksApi;
  private labelsService: LabelsApi;

  constructor(basePath: string) {
    this.service = new TasksApi({ basePath });
    this.labelsService = new LabelsApi({ basePath });
  }

  public async create(org: string, script: string): Promise<ITask> {
    const { data } = await this.service.tasksPost({ org, flux: script });

    return addDefaults(data);
  }

  public async createByOrgID(orgID: string, script: string): Promise<ITask> {
    const { data } = await this.service.tasksPost({ orgID, flux: script });

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

  public async getAllByOrgID(orgID: string): Promise<ITask[]> {
    const {
      data: { tasks },
    } = await this.service.tasksGet(
      undefined,
      undefined,
      undefined,
      undefined,
      orgID,
    );

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

  public async createFromTemplate(
    template: ITaskTemplate,
    orgID: string,
  ): Promise<ITask> {
    const { content } = template;

    if (
      content.data.type !== TemplateType.Task ||
      template.meta.version !== "1"
    ) {
      throw new Error("Can not create task from this template");
    }

    const flux = content.data.attributes.flux;

    const createdTask = await this.createByOrgID(orgID, flux);

    if (!createdTask || !createdTask.id) {
      throw new Error("Could not create task");
    }

    await this.createIncludedLabelsFromTemplate(template, createdTask);

    const task = await this.get(createdTask.id);

    return task;
  }

  private async createIncludedLabelsFromTemplate(
    template: ITemplate,
    createdTask: ITask,
  ) {
    const { content } = template;

    if (!content.data.relationships || !content.data.relationships.label) {
      return;
    }

    const labelRelationships = content.data.relationships.label.data;

    const includedResources = content.included || [];

    const labelsToCreate = includedResources.filter(({ id }) => {
      return labelRelationships.some((lr) => {
        return lr.type === TemplateType.Label && lr.id === id;
      });
    });

    const pendingLabels = labelsToCreate.map((l) => {
      const name = l.attributes.name;
      const properties = l.attributes.properties;

      return this.labelsService.labelsPost({ name, properties });
    });

    const labelsResponse = await Promise.all(pendingLabels);

    const createdLabels = labelsResponse
      .map((lr) => lr.data.label)
      .filter((cl): cl is Label => !!cl)
      .map(addLabelDefaults);

    if (!createdTask || !createdTask.id) {
      throw new Error("Can not add labels to undefined Task");
    }

    await this.addLabels(createdTask.id, createdLabels);
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
