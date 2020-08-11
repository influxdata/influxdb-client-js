import FluxTableColumn, {ColumnType} from './FluxTableColumn'
import {IllegalArgumentError} from '../errors'

const identity = (x: string): any => x
/**
 * A dictionary of serializers of particular types returned by a flux query.
 * See {@link https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/#valid-data-types }
 */
export const typeSerializers: Record<ColumnType, (val: string) => any> = {
  boolean: (x: string): any => x === 'true',
  unsignedLong: (x: string): any => (x === '' ? null : +x),
  long: (x: string): any => (x === '' ? null : +x),
  double: (x: string): any => (x === '' ? null : +x),
  string: identity,
  base64Binary: identity,
  dateTime: (x: string): any => (x === '' ? null : x),
  duration: (x: string): any => (x === '' ? null : x),
}
/**
 * Represents metadata of a {@link http://bit.ly/flux-spec#table | flux table}.
 */
export default class FluxTableMetaData {
  /**
   * Table columns.
   */
  columns: Array<FluxTableColumn>
  constructor(columns: FluxTableColumn[]) {
    columns.forEach((col, i) => (col.index = i))
    this.columns = columns
  }
  /**
   * Gets columns by name
   * @param label - column label
   * @returns table column
   * @throws IllegalArgumentError if column is not found
   **/
  column(label: string): FluxTableColumn {
    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i]
      if (col.label === label) return col
    }
    throw new IllegalArgumentError(`Column ${label} not found!`)
  }
  /**
   * Creates an object out of the supplied values with the help of columns .
   * @param values - a row with data for each column
   */
  toObject(values: string[]): {[key: string]: any} {
    const acc: any = {}
    for (let i = 0; i < this.columns.length && i < values.length; i++) {
      let val = values[i]
      const column = this.columns[i]
      if (val === '' && column.defaultValue) {
        val = column.defaultValue
      }
      acc[column.label] = (typeSerializers[column.dataType] ?? identity)(val)
    }
    return acc
  }
}
