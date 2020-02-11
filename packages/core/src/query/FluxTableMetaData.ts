import FluxTableColumn from './FluxTableColumn'
import {IllegalArgumentError} from '../errors'

const identity = (x: string): any => x
/**
 * A dictionary of serializers of particular types returned bya flux query
 * @see https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/#valid-data-types
 */
export const typeSerializers: {[key: string]: (val: string) => any} = {
  boolean: (x: string): any => x === 'true',
  unsignedLong: identity,
  long: identity,
  double: (x: string): any => +x,
  string: identity,
  base64Binary: identity,
  dateTime: identity,
  duration: identity,
}
/**
 * Represents metadata of a flux <a href="http://bit.ly/flux-spec#table">table</a>.
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
   * @param label table column or [[invalidColumn]]
   */
  column(label: string): FluxTableColumn {
    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i]
      if (col.label === label) return col
    }
    throw new IllegalArgumentError(`Column ${label} not found!`)
  }
  /**
   * Creates an object out of the supplied values with the help of columns .
   * @param values values for each column
   */
  toObject(values: string[]): {[key: string]: any} {
    const acc: any = {}
    for (let i = 0; i < this.columns.length && i < values.length; i++) {
      let val = values[i]
      const column = this.columns[i]
      if (val === '' && column.defaultValue) {
        val = column.defaultValue
      }
      acc[column.label] = (
        typeSerializers[column.dataType as string] || identity
      )(val)
    }
    return acc
  }
}
