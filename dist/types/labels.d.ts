import { Bucket, Dashboard, Task, Telegraf, Variable } from '../api';
import { Label as APILabel } from '../api';
interface KV {
    [key: string]: string;
}
export interface ILabelProperties extends KV {
    color: string;
    description: string;
}
export interface ILabel extends APILabel {
    properties: ILabelProperties;
}
export interface ISetupParams {
    username: string;
    password: string;
    org: string;
    bucket: string;
}
export interface IBucket extends Bucket {
    labels: ILabel[];
}
export interface ITask extends Task {
    labels: ILabel[];
}
export interface ITelegraf extends Telegraf {
    labels: ILabel[];
}
export interface IVariable extends Variable {
    labels: ILabel[];
}
declare type DashboardPicked = Pick<Dashboard, 'orgID' | 'id' | 'name' | 'cells'>;
declare type DashboardOriginal = Pick<Dashboard, Exclude<keyof Dashboard, 'orgID' | 'id' | 'name' | 'cells'>>;
declare type DashboardRequired = {
    [P in keyof DashboardPicked]-?: DashboardPicked[P];
};
export interface IDashboard extends DashboardOriginal, DashboardRequired {
    labels: ILabel[];
}
export {};
