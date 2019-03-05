import {Bucket, Dashboard, Task} from "../api";
import { Label as APILabel } from "../api";

export interface ILabelProperties {
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

export enum TemplateType {
  Label = "label",
  Task = "task",
}

interface IKeyValuePairs {[key: string]: any; }

export interface ITemplate {
  id?: string;
  meta: ITemplateMeta;
  content: ITemplateContent;
  labels?: ILabel[];
}

interface ITemplateMeta extends IKeyValuePairs {
  name: string;
  version: string;
}

interface ITemplateContent {
  data: ITemplateData;
  included?: ITemplateIncluded[];
}

interface ITemplateData {
  type: TemplateType;
  attributes: IKeyValuePairs;
  relationships?: {[key in TemplateType]?: {data: IRelationshipDataItem[]}};
}

interface IRelationshipDataItem {
  type: TemplateType;
  id: string;
}

interface ITemplateIncluded {
  type: TemplateType;
  id: string;
  attributes: IKeyValuePairs;
}

export interface ITaskTemplate extends ITemplate {
  content: {
    data: ITaskTemplateData;
    included?: ITaskTemplateIncluded[];
  };
}

interface ITaskTemplateData extends ITemplateData {
  type: TemplateType.Task;
  attributes: {name: string, flux: string};
  relationships?: {
    [TemplateType.Label]: {data: ILabelRelationshipDataItem[]};
  };
}

interface ILabelRelationshipDataItem {
  type: TemplateType.Label;
  id: string;
}

interface ITaskTemplateIncluded extends ITemplateIncluded {
  type: TemplateType.Label;
  attributes: {name: string; properties: ILabelProperties};
}
