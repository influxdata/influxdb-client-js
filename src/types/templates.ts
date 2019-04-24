import {Cell, View, Document, Variable} from '../api'
import {ILabel, IDashboard} from './labels'

export enum TemplateType {
  Label = 'label',
  Task = 'task',
  Dashboard = 'dashboard',
  View = 'view',
  Cell = 'cell',
  Variable = 'variable',
}

import {DocumentListEntry} from '../api'

interface IKeyValuePairs {
  [key: string]: any
}

// Templates
interface ITemplateBase extends Document {
  content: {data: ITemplateData; included: ITemplateIncluded[]}
  labels: ILabel[]
}

// TODO: be more specific about what attributes can be
interface ITemplateData {
  type: TemplateType
  attributes: IKeyValuePairs
  relationships: {[key in TemplateType]?: {data: IRelationship[]}}
}

interface ITemplateIncluded {
  type: TemplateType
  id: string
  attributes: IKeyValuePairs
}

// Template Relationships
type IRelationship =
  | ICellRelationship
  | ILabelRelationship
  | IViewRelationship
  | IVariableRelationship

interface ICellRelationship {
  type: TemplateType.Cell
  id: string
}

export interface ILabelRelationship {
  type: TemplateType.Label
  id: string
}

export interface IVariableRelationship {
  type: TemplateType.Variable
  id: string
}

interface IViewRelationship {
  type: TemplateType.View
  id: string
}

// Template Includes
export interface IViewIncluded extends ITemplateIncluded {
  type: TemplateType.View
  attributes: View
}

export interface ICellIncluded extends ITemplateIncluded {
  type: TemplateType.Cell
  attributes: Cell
  relationships: {
    [TemplateType.View]: {data: IViewRelationship}
  }
}

export interface ILabelIncluded extends ITemplateIncluded {
  type: TemplateType.Label
  attributes: ILabel
}

export interface IVariableIncluded extends ITemplateIncluded {
  type: TemplateType.Variable
  attributes: Variable
}

export type ITaskTemplateIncluded = ILabelIncluded

export type IDashboardTemplateIncluded =
  | ICellIncluded
  | IViewIncluded
  | ILabelIncluded
  | IVariableIncluded

export type IVariableTemplateIncluded = IVariableIncluded | ILabelIncluded

// Template Datas
interface ITaskTemplateData extends ITemplateData {
  type: TemplateType.Task
  attributes: {name: string; flux: string}
  relationships: {
    [TemplateType.Label]: {data: ILabelRelationship[]}
  }
}

interface IDashboardTemplateData extends ITemplateData {
  type: TemplateType.Dashboard
  attributes: IDashboard
  relationships: {
    [TemplateType.Label]: {data: ILabelRelationship[]}
    [TemplateType.Cell]: {data: ICellRelationship[]}
    [TemplateType.Variable]: {data: IVariableRelationship[]}
  }
}

interface VariableTemplateData extends ITemplateData {
  type: TemplateType.Variable
  attributes: Omit<Variable, 'labels' | 'links'>
  relationships: {
    [TemplateType.Label]: {data: ILabelRelationship[]}
    [TemplateType.Variable]: {data: IVariableRelationship[]}
  }
}

// Templates
export interface ITaskTemplate extends ITemplateBase {
  content: {
    data: ITaskTemplateData
    included: ITaskTemplateIncluded[]
  }
}

export interface IDashboardTemplate extends ITemplateBase {
  content: {
    data: IDashboardTemplateData
    included: IDashboardTemplateIncluded[]
  }
}

export interface IVariableTemplate extends ITemplateBase {
  content: {
    data: VariableTemplateData
    included: IVariableTemplateIncluded[]
  }
}

export type ITemplate = ITaskTemplate | IDashboardTemplate | IVariableTemplate

export interface TemplateSummary extends DocumentListEntry {
  labels: ILabel[]
}

type Omit<K, V> = Pick<K, Exclude<keyof K, V>>
