import {
  FluxTableColumn,
  UNKNOWN_COLUMN,
  typeSerializers,
} from './FluxTableColumn'
import {IllegalArgumentError} from '../errors'

/**
 * serializeDateTimeAsDate changes type serializers to return JavaScript Date instances
 * for 'dateTime:RFC3339' query result data type. Empty value is converted to null.
 * @remarks
 * Please note that the result has millisecond precision whereas InfluxDB returns dateTime
 * in nanosecond precision.
 */
export function serializeDateTimeAsDate(): void {
  typeSerializers['dateTime:RFC3339'] = (x: string): any =>
    x === '' ? null : new Date(Date.parse(x))
}
/**
 * serializeDateTimeAsNumber changes type serializers to return milliseconds since epoch
 * for 'dateTime:RFC3339' query result data type. Empty value is converted to null.
 * @remarks
 * Please note that the result has millisecond precision whereas InfluxDB returns dateTime
 * in nanosecond precision.
 */
export function serializeDateTimeAsNumber(): void {
  typeSerializers['dateTime:RFC3339'] = (x: string): any =>
    x === '' ? null : Date.parse(x)
}
/**
 * serializeDateTimeAsString changes type serializers to return string values
 * for `dateTime:RFC3339` query result data type.  Empty value is converted to null.
 */
export function serializeDateTimeAsString(): void {
  typeSerializers['dateTime:RFC3339'] = (x: string): any =>
    x === '' ? null : x
}

/**
 * Represents metadata of a {@link http://bit.ly/flux-spec#table | flux table}.
 */
export interface FluxTableMetaData {
  /**
   * Table columns.
   */
  columns: Array<FluxTableColumn>

  /**
   * Gets columns by name
   * @param label - column label
   * @param noErrorOnMissingColumn - throw error on missing column, true by default
   * @returns table column
   * @throws IllegalArgumentError if column is not found
   **/
  column(label: string, errorOnMissingColumn?: boolean): FluxTableColumn

  /**
   * Creates an object out of the supplied row with the help of column descriptors.
   * @param row - a row with data for each column
   */
  toObject(row: string[]): {[key: string]: any}

  /**
   * Gets column values out of the supplied row.
   * @param row - a row with data for each column
   * @param column - column name
   * @returns column value, undefined for unknown column
   */
  get(row: string[], column: string): any
}

/**
 * FluxTableMetaData Implementation.
 */
class FluxTableMetaDataImpl implements FluxTableMetaData {
  columns: Array<FluxTableColumn>
  constructor(columns: FluxTableColumn[]) {
    columns.forEach((col, i) => (col.index = i))
    this.columns = columns
  }
  column(label: string, errorOnMissingColumn = true): FluxTableColumn {
    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i]
      if (col.label === label) return col
    }
    if (errorOnMissingColumn) {
      throw new IllegalArgumentError(`Column ${label} not found!`)
    }
    return UNKNOWN_COLUMN
  }
  toObject(row: string[]): {[key: string]: any} {
    const acc: any = {}
    for (let i = 0; i < this.columns.length && i < row.length; i++) {
      const column = this.columns[i]
      acc[column.label] = column.get(row)
    }
    return acc
  }
  get(row: string[], column: string): any {
    return this.column(column, false).get(row)
  }
}

/**
 * Created FluxTableMetaData from the columns supplied.
 * @param columns -  columns
 * @returns - instance
 */
export function createFluxTableMetaData(
  columns: FluxTableColumn[]
): FluxTableMetaData {
  return new FluxTableMetaDataImpl(columns)
}

/** Wraps values and associated metadata of a query result row */
export interface Row {
  values: string[]
  tableMeta: FluxTableMetaData
}
