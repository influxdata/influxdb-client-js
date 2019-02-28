import {Bucket, Cell, Dashboard, Label} from "../api";
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

export interface IDashboard extends Dashboard {
  orgID: string;
  id: string;
  name: string;
  labels: Label[];
  cells: Cell[];
}

export * from "./ast";
