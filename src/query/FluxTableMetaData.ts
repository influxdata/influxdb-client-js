import FluxTableColumn from './FluxTableColumn'
import {IllegalArgumentError} from '../errors'

/**
 * Represents metadata of a flux <a href="http://bit.ly/flux-spec#table">table</a>.
 */
export class FluxTableMetaData {
  /**
   * Table columns.
   */
  columns: Array<FluxTableColumn>
  constructor(columns: FluxTableColumn[]) {
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
   * Creates an object accordin to columns and supplied record.
   * @param values values for each column
   */
  toObject(values: string[]): {[key: string]: string} {
    const acc: any = {}
    for (let i = 0; i < this.columns.length && i < values.length; i++) {
      let val = values[i]
      const column = this.columns[i]
      if (val === '' && column.defaultValue) {
        val = column.defaultValue
      }
      acc[column.label] = val
    }
    return acc
  }
}

export default FluxTableMetaData
