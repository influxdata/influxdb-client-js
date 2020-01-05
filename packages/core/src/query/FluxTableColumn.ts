/**
 * Type of the columns, see https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/#valid-data-types
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
 * Represents column metadata of a flux <a href="http://bit.ly/flux-spec#table">table</a>.
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
   * Boolean flag indicating if the column is part of the table's group key.
   */
  group: boolean

  /**
   * Default value to be used for rows whose string value is the empty string.
   */
  defaultValue: string

  /**
   * Creates a flux table column from an object supplied.
   * @param object
   */
  static from(object: any): FluxTableColumn {
    const retVal = new FluxTableColumn()
    retVal.label = object.label
    retVal.dataType = object.dataType as ColumnType
    retVal.group = Boolean(object.group)
    retVal.defaultValue = object.defaultValue
    return retVal
  }
}
