import {
  View as ViewGen,
  XYViewProperties as XYViewPropertiesGen,
  LinePlusSingleStatProperties as LinePlusSingleStatPropertiesGen,
  SingleStatViewProperties as SingleStatViewPropertiesGen,
  TableViewProperties as TableViewPropertiesGen,
  GaugeViewProperties as GaugeViewPropertiesGen,
  HistogramViewProperties as HistogramViewPropertiesGen,
  HeatmapViewProperties as HeatmapViewPropertiesGen,
  ScatterViewProperties as ScatterViewPropertiesGen,
  CheckViewProperties as CheckViewPropertiesGen,
  MarkdownViewProperties as MarkdownViewPropertiesGen,
  RenamableField,
} from '../api'

export interface View<T extends ViewProperties = ViewProperties>
  extends ViewGen {
  properties: T
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
  | HistogramViewProperties
  | HeatmapViewProperties
  | ScatterViewProperties
  | CheckViewProperties

export interface XYViewProperties extends XYViewPropertiesGen {
  type: XYViewPropertiesGen.TypeEnum.Xy
}
export type XYView = View<XYViewProperties>

export interface LinePlusSingleStatProperties
  extends LinePlusSingleStatPropertiesGen {
  type: LinePlusSingleStatPropertiesGen.TypeEnum.LinePlusSingleStat
}
export type LinePlusSingleStatView = View<LinePlusSingleStatProperties>

export interface SingleStatViewProperties extends SingleStatViewPropertiesGen {
  type: SingleStatViewPropertiesGen.TypeEnum.SingleStat
}
export type SingleStatView = View<SingleStatViewProperties>

export interface TableViewProperties extends TableViewPropertiesGen {
  type: TableViewPropertiesGen.TypeEnum.Table
  tableOptions: TableOptions
}
export type TableView = View<TableViewProperties>

export interface GaugeViewProperties extends GaugeViewPropertiesGen {
  type: GaugeViewPropertiesGen.TypeEnum.Gauge
}
export type GaugeView = View<GaugeViewProperties>

export interface HistogramViewProperties extends HistogramViewPropertiesGen {
  type: HistogramViewPropertiesGen.TypeEnum.Histogram
}
export type HistogramView = View<HistogramViewProperties>

export interface HeatmapViewProperties extends HeatmapViewPropertiesGen {
  type: HeatmapViewPropertiesGen.TypeEnum.Heatmap
}
export type HeatmapView = View<HeatmapViewProperties>

export interface ScatterViewProperties extends ScatterViewPropertiesGen {
  type: ScatterViewPropertiesGen.TypeEnum.Scatter
}
export type ScatterView = View<ScatterViewProperties>

export interface CheckViewProperties extends CheckViewPropertiesGen {
  type: CheckViewPropertiesGen.TypeEnum.Check
}
export type CheckView = View<CheckViewProperties>

// views which do not extend generated view properties base
export interface MarkdownViewProperties {
  type: MarkdownViewPropertiesGen.TypeEnum.Markdown
  text: string
}
export type MarkdownView = View<MarkdownViewProperties>

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
