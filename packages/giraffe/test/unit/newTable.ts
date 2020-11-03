// WARNING: this simple table definition was taken from giraffe to ease testing that
// is not feasible (inevitably complex) with a real giraffe (as of 0.41.0)
import {ColumnType, ColumnData, Table, FluxDataType} from '@influxdata/giraffe'

// Don't export me!
class SimpleTable implements Table {
  public readonly length: number = 0

  private columns: {
    [colKey: string]: {
      name: string
      fluxDataType: FluxDataType
      type: ColumnType
      data: ColumnData
    }
  } = {}

  constructor(length: number) {
    this.length = length
  }

  get columnKeys(): string[] {
    return Object.keys(this.columns)
  }

  getColumn(columnKey: string, columnType?: ColumnType): any[] | null {
    const column = this.columns[columnKey]

    if (!column) {
      return null
    }

    // Allow time columns to be retrieved as number columns
    const isWideningTimeType = columnType === 'number' && column.type === 'time'

    if (columnType && columnType !== column.type && !isWideningTimeType) {
      return null
    }

    switch (columnType) {
      case 'number':
        return column.data as number[]
      case 'time':
        return column.data as number[]
      case 'string':
        return column.data as string[]
      case 'boolean':
        return column.data as boolean[]
      default:
        return column.data as any[]
    }
  }

  getColumnName(columnKey: string): string | null {
    const column = this.columns[columnKey]

    if (!column) {
      return null
    }

    return column.name
  }

  getColumnType(columnKey: string): ColumnType | null {
    const column = this.columns[columnKey]

    if (!column) {
      return null
    }

    return column.type
  }

  getOriginalColumnType(columnKey: string): FluxDataType | null {
    const column = this.columns[columnKey]

    if (!column) {
      return null
    }

    return column.fluxDataType
  }

  addColumn(
    columnKey: string,
    fluxDataType: FluxDataType,
    type: ColumnType,
    data: ColumnData,
    name?: string
  ): Table {
    if (this.columns[columnKey]) {
      throw new Error('column already exists')
    }

    if (data.length !== this.length) {
      throw new Error(
        `expected column of length ${this.length}, got column of length ${data.length} instead`
      )
    }

    const table = new SimpleTable(this.length)

    table.columns = {
      ...this.columns,
      [columnKey]: {
        name: name || columnKey,
        fluxDataType,
        type,
        data,
      },
    }

    return table
  }
}

export const newTable = (length: number): Table => new SimpleTable(length)
