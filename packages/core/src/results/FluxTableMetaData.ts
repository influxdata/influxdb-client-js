import {FluxTableColumn, typeSerializers} from './FluxTableColumn'
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
   * @returns table column
   * @throws IllegalArgumentError if column is not found
   **/
  column(label: string): FluxTableColumn

  /**
   * Creates an object out of the supplied row values with the help of column descriptors.
   * @param row - a row with data for each column
   */
  toObject(row: string[]): {[key: string]: any}
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
  column(label: string): FluxTableColumn {
    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i]
      if (col.label === label) return col
    }
    throw new IllegalArgumentError(`Column ${label} not found!`)
  }
  toObject(row: string[]): {[key: string]: any} {
    const acc: any = {}
    for (let i = 0; i < this.columns.length && i < row.length; i++) {
      const column = this.columns[i]
      acc[column.label] = column.get(row)
    }
    return acc
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
