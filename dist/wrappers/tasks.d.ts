import { LogEvent, Run, Task, User } from '../api';
import { ILabel, ITask, ServiceOptions } from '../types';
export default class {
    private service;
    private serviceOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    create(org: string, script: string): Promise<ITask>;
    createByOrgID(orgID: string, script: string): Promise<ITask>;
    get(id: string): Promise<ITask>;
    getAll(orgID?: string): Promise<ITask[]>;
    getAllByOrg(org: string): Promise<ITask[]>;
    getAllByUser(user: User): Promise<ITask[]>;
    update(id: string, updates: Partial<Task>): Promise<ITask>;
    updateStatus(id: string, status: Task.StatusEnum): Promise<Task>;
    updateScript(id: string, script: string): Promise<ITask>;
    delete(id: string): Promise<Response>;
    addLabel(taskID: string, labelID: string): Promise<ILabel>;
    removeLabel(taskID: string, labelID: string): Promise<Response>;
    addLabels(taskID: string, labelIDs: string[]): Promise<ILabel[]>;
    removeLabels(taskID: string, labelIDs: string[]): Promise<Response[]>;
    getRunsByTaskID(taskID: string): Promise<Run[]>;
    startRunByTaskID(taskID: string): Promise<Run>;
    getLogEventsByRunID(taskID: string, runID: string): Promise<LogEvent[]>;
    clone(taskID: string): Promise<ITask>;
    private cloneLabels;
}
