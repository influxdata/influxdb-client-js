import {
  View as ViewGen,
  ViewType,
  XYViewProperties as XYViewPropertiesGen,
  LinePlusSingleStatProperties as LinePlusSingleStatPropertiesGen,
  SingleStatViewProperties as SingleStatViewPropertiesGen,
  TableViewProperties as TableViewPropertiesGen,
  GaugeViewProperties as GaugeViewPropertiesGen,
  HistogramViewProperties as HistogramViewPropertiesGen,
  HeatmapViewProperties as HeatmapViewPropertiesGen,
  ScatterViewProperties as ScatterViewPropertiesGen,
  CheckViewProperties as CheckViewPropertiesGen,
  RenamableField,
} from '../api'

export interface View<T extends ViewProperties = ViewProperties>
  extends ViewGen {
  properties?: T
  dashboardID?: string
  cellID?: string
}

export type ViewProperties =
  | XYViewProperties
  | LinePlusSingleStatProperties
  | SingleStatViewProperties
  | TableViewProperties
  | GaugeViewProperties
  | MarkdownViewProperties
  | EmptyViewProperties
  | HistogramViewProperties
  | HeatmapViewProperties
  | ScatterViewProperties
  | CheckViewProperties

export interface XYViewProperties extends XYViewPropertiesGen {
  type: ViewType.Xy
}
export type XYView = View<XYViewProperties>

export interface LinePlusSingleStatProperties
  extends LinePlusSingleStatPropertiesGen {
  type: ViewType.LinePlusSingleStat
}
export type LinePlusSingleStatView = View<LinePlusSingleStatProperties>

export interface SingleStatViewProperties extends SingleStatViewPropertiesGen {
  type: ViewType.SingleStat
}
export type SingleStatView = View<SingleStatViewProperties>

export interface TableViewProperties extends TableViewPropertiesGen {
  type: ViewType.Table
  tableOptions: TableOptions
}
export type TableView = View<TableViewProperties>

export interface GaugeViewProperties extends GaugeViewPropertiesGen {
  type: ViewType.Gauge
}
export type GaugeView = View<GaugeViewProperties>

export interface HistogramViewProperties extends HistogramViewPropertiesGen {
  type: ViewType.Histogram
}
export type HistogramView = View<HistogramViewProperties>

export interface HeatmapViewProperties extends HeatmapViewPropertiesGen {
  type: ViewType.Heatmap
}
export type HeatmapView = View<HeatmapViewProperties>

export interface ScatterViewProperties extends ScatterViewPropertiesGen {
  type: ViewType.Scatter
}
export type ScatterView = View<ScatterViewProperties>

export interface CheckViewProperties extends CheckViewPropertiesGen {
  type: ViewType.Check
}
export type CheckView = View<CheckViewProperties>

// views which do not extend generated view properties base
export interface MarkdownViewProperties {
  type: ViewType.Markdown
  text: string
}
export type MarkdownView = View<MarkdownViewProperties>

export interface EmptyViewProperties {
  type: ViewType.Empty
}
export type EmptyView = View<EmptyViewProperties>

//

export interface TableOptions {
  verticalTimeAxis: boolean
  sortBy: RenamableField
  wrapping: TableWrappingType
  fixFirstColumn: boolean
}

export enum TableWrappingType {
  Truncate = 'truncate',
  Wrap = 'wrap',
  SingleLine = 'single-line',
}
