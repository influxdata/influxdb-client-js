/**
 * Type of query result column, see {@link https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/#valid-data-types }
 */
export type ColumnType =
  | 'boolean'
  | 'unsignedLong'
  | 'long'
  | 'double'
  | 'string'
  | 'base64Binary'
  | 'dateTime'
  | 'duration'

/**
 * FluxTableColumnLike provides metadata of a flux table column.
 */
export interface FluxTableColumnLike {
  /**
   * Label (e.g., "_start", "_stop", "_time").
   */
  label: string

  /**
   * The data type of column (e.g., "string", "long", "dateTime:RFC3339").
   */
  dataType?: ColumnType

  /**
   * Boolean flag indicating if the column is a part of the table's group key.
   */
  group?: boolean

  /**
   * Default value to be used for rows whose string value is the empty string.
   */
  defaultValue?: string
}
/**
 * Column metadata class of a {@link http://bit.ly/flux-spec#table | flux table} column.
 */
export default class FluxTableColumn {
  /**
   * Label (e.g., "_start", "_stop", "_time").
   */
  label: string

  /**
   * The data type of column (e.g., "string", "long", "dateTime:RFC3339").
   */
  dataType: ColumnType

  /**
   * Boolean flag indicating if the column is a part of the table's group key.
   */
  group: boolean

  /**
   * Default value to be used for rows whose string value is the empty string.
   */
  defaultValue: string

  /**
   * Index of this column in the row array
   */
  index: number

  /**
   * Creates a flux table column from an object supplied.
   * @param object - source object
   * @returns column instance
   */
  static from(object: FluxTableColumnLike): FluxTableColumn {
    const retVal = new FluxTableColumn()
    retVal.label = object.label
    retVal.dataType = object.dataType as ColumnType
    retVal.group = Boolean(object.group)
    retVal.defaultValue = object.defaultValue ?? ''
    return retVal
  }
}
