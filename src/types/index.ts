import {Bucket, Dashboard, Task} from "../api";
import { Label as APILabel } from "../api";

interface ILabelProperties {
  color: string;
  description?: string;
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

type DashboardPicked = Pick<Dashboard, "orgID" | "id" | "name" | "cells">;
type DashboardOriginal = Pick<Dashboard, Exclude<keyof Dashboard, "orgID" | "id" | "name" | "cells">>;
type DashboardRequired = {[P in keyof DashboardPicked]-?: DashboardPicked[P]};

export interface IDashboard extends DashboardOriginal, DashboardRequired {
  labels: ILabel[];
}
