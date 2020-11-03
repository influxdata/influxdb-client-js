import {
  ParameterizedQuery,
  QueryApi,
  FluxTableMetaData,
  ColumnType as ClientColumnType,
  Cancellable,
  FluxResultObserver,
} from '@influxdata/influxdb-client'
import {
  ColumnType,
  ColumnData,
  Table,
  FromFluxResult,
  FluxDataType,
} from '@influxdata/giraffe'

/** A type of a function that creates a new giraffe table of a specified length */
export type GiraffeTableFactory = (length: number) => Table

/**
 * Stores data and metadata of a result column.
 */
interface Column {
  /** column name */
  name: string
  /** giraffe column type */
  type: ColumnType
  /** flux data type */
  fluxDataType: FluxDataType
  /** column data */
  data: ColumnData
  /** convert result row to column value */
  toValue: (row: string[]) => number | string | boolean | null
  /** when true, it is a no-data column to indicate that multiple columns of the same label exist (distinguished also by column type) */
  multipleTypes?: true
  /** group key membership of this column */
  group?: boolean
}

function createResult(
  tableLength: number,
  columns: Record<string, Column>,
  tableFactory: GiraffeTableFactory,
  computeFluxGroupKeyUnion = false
): FromFluxResult {
  let table = tableFactory(tableLength)
  const fluxGroupKeyUnion: string[] = []
  Object.keys(columns).forEach(key => {
    const col = columns[key]
    if (!col.multipleTypes) {
      ;(col.data as any).length = tableLength // extend the array length, required (and tested)
      table = table.addColumn(
        key,
        col.fluxDataType,
        col.type,
        col.data,
        col.name
      )
      if (computeFluxGroupKeyUnion && col.group) {
        fluxGroupKeyUnion.push(key)
      }
    }
  })

  return {
    table,
    fluxGroupKeyUnion,
  }
}

/**
 * AcceptRowFunction allows to accept/reject specific rows or terminate processing.
 * @param row - CSV result data row
 * @param tableMeta - CSV table metadata with column descriptors
 * @returns true to accept row, false to skip row, undefined means stop processing
 **/
export type AcceptRowFunction = (
  row: string[],
  tableMeta: FluxTableMetaData
) => true | false | undefined

/**
 * Contains parameters that optimize/drive creation of the query result Table.
 */
export interface TableOptions {
  /**
   * Accept allows to accept/reject specific rows or terminate processing.
   **/
  accept?: AcceptRowFunction | AcceptRowFunction[]
  /**
   * Sets maximum table length, QUERY_MAX_TABLE_LENGTH when undefined.
   */
  maxTableLength?: number

  /** column keys to collect in the table, undefined means all columns */
  columns?: string[]

  /** compute also fluxGroupKeyUnion */
  computeFluxGroupKeyUnion?: boolean
}

/**
 * QUERY_MAX_TABLE_LENGTH is a default max table length,
 * it can be overriden in TableOptions.
 */
export const QUERY_MAX_TABLE_LENGTH = 100_000

/**
 * Creates an accept function that stops processing
 * if the table reaches the specified max rows.
 * @param size - maximum processed rows
 * @returns AcceptRowFunction that enforces that most max rows are processed
 */
export function acceptMaxTableLength(max: number): AcceptRowFunction {
  let size = 0
  return (): true | undefined => {
    if (size >= max) {
      // eslint-disable-next-line no-console
      console.log(
        `queryTable: max table length ${max} reached, processing stopped`
      )
      return undefined
    }
    size++
    return true
  }
}

/**
 * Creates a single accept function for the TableOptions supplied.
 * @param options - table options
 * @returns accept function
 */
function createAcceptRowFunction(options: TableOptions): AcceptRowFunction {
  const maxTableLength =
    options.maxTableLength === undefined
      ? QUERY_MAX_TABLE_LENGTH
      : options.maxTableLength
  const acceptors: AcceptRowFunction[] = []
  if (options.accept) {
    if (Array.isArray(options.accept)) {
      acceptors.push(...options.accept)
    } else {
      acceptors.push(options.accept)
    }
  }
  acceptors.push(acceptMaxTableLength(maxTableLength))

  return (
    row: string[],
    tableMeta: FluxTableMetaData
  ): true | false | undefined => {
    for (let i = 0; i < acceptors.length; i++) {
      const retVal = acceptors[i](row, tableMeta)
      if (retVal === undefined || retVal === false) {
        return retVal
      }
    }
    return true
  }
}

/**
 * Creates a function that returns a column value from row data.
 *
 * @param rowIndex - index of a string value in the row data
 * @param type - column type
 * @param def - default value
 * @returns column value to store in a table
 */
function toValueFn(
  rowIndex: number,
  type: ColumnType,
  def: string
): (row: string[]) => number | string | boolean | null {
  switch (type) {
    case 'boolean':
      return (row: string[]): boolean =>
        (row[rowIndex] === '' ? def : row[rowIndex]) === 'true'
    case 'number':
      return (row: string[]): number | null => {
        const val = row[rowIndex] === '' ? def : row[rowIndex]
        return val === '' ? null : Number(val)
      }
    case 'time':
      return (row: string[]): number =>
        Date.parse(row[rowIndex] === '' ? def : row[rowIndex])
    default:
      return (row: string[]): string =>
        row[rowIndex] === '' ? def : row[rowIndex]
  }
}

/**
 * Converts between influxdb-client and giraffe columns types.
 *
 * @param clientType - `@influxdata/influxdb-client` column type
 * @returns `@influxdata/giraffe` column type
 */
function toGiraffeColumnType(clientType: ClientColumnType): ColumnType {
  // from: 'boolean' | 'unsignedLong' | 'long' | 'double' | 'string' | 'base64Binary' | 'dateTime:RFC3339' | 'duration'
  // to:   'number' | 'string' | 'time' | 'boolean'
  switch (clientType) {
    case 'boolean':
      return 'boolean'
    case 'unsignedLong':
    case 'long':
    case 'double':
      return 'number'
    default:
      return clientType && clientType.startsWith('dateTime') ? 'time' : 'string'
  }
}

/**
 * Creates influxdb-client-js's FluxResultObserver that collects row results to a Table instance
 * @param resolve - called when the Table is collected
 * @param reject - called upon error
 * @param tableOptions - tableOptions allow to filter or even stop the processing of rows, or restrict the columns to collect
 * @returns FluxResultObserver that collects table data from result rows
 */
export function createCollector(
  resolve: (value: FromFluxResult) => void,
  reject: (reason?: any) => void,
  tableFactory: GiraffeTableFactory,
  tableOptions: TableOptions = {}
): FluxResultObserver<string[]> {
  const {columns: onlyColumns} = tableOptions
  const accept = createAcceptRowFunction(tableOptions)
  const columns: Record<string, Column> = {}
  let dataColumns: Column[]
  let lastTableMeta: FluxTableMetaData | undefined = undefined
  let tableSize = 0
  let cancellable: Cancellable
  return {
    next(row: string[], tableMeta: FluxTableMetaData): void {
      switch (accept(row, tableMeta)) {
        case true:
          break
        case false:
          return
        default:
          cancellable.cancel()
          return
      }
      if (tableMeta !== lastTableMeta) {
        dataColumns = []
        for (const metaCol of tableMeta.columns) {
          const type = toGiraffeColumnType(metaCol.dataType)
          if (onlyColumns && !onlyColumns.includes(metaCol.label)) {
            continue // exclude this column
          }

          // handle the rare situation of having columns with the same name, but different type
          let columnKey = metaCol.label
          let existingColumn = columns[columnKey]
          if (existingColumn) {
            if (existingColumn.multipleTypes) {
              // multiple column types of the same name already found
              // use type-specific column key
              columnKey = `${metaCol.label} (${type})`
              existingColumn = columns[columnKey]
            } else if (existingColumn.type !== type) {
              // move the existing key to a type-specific key
              columns[
                `${existingColumn.name} (${existingColumn.type})`
              ] = existingColumn
              // create a multiType (virtual) column
              columns[metaCol.label] = {
                name: metaCol.label,
                multipleTypes: true,
                // other values are not used
              } as Column
              columnKey = `${metaCol.label} (${type})`
              existingColumn = columns[columnKey]
            }
          }
          const column = {
            name: metaCol.label,
            fluxDataType: metaCol.dataType as FluxDataType,
            type,
            data: existingColumn ? existingColumn.data : [],
            group: existingColumn?.group || metaCol.group,
            toValue: toValueFn(metaCol.index, type, metaCol.defaultValue),
          }

          dataColumns.push(column)
          columns[columnKey] = column
        }
        lastTableMeta = tableMeta
      }
      for (let i = 0; i < dataColumns.length; i++) {
        const column = dataColumns[i]
        // cast is required because of wrong type definition in Giraffe
        column.data[tableSize] = column.toValue(row) as
          | string
          | number
          | boolean
      }
      tableSize++
    },
    complete(): void {
      resolve(
        createResult(
          tableSize,
          columns,
          tableFactory,
          tableOptions.computeFluxGroupKeyUnion
        )
      )
    },
    error(e: Error): void {
      if (e.name === 'AbortError') {
        // eslint-disable-next-line no-console
        console.log('queryTable: request aborted:', e)
        resolve(
          createResult(
            tableSize,
            columns,
            tableFactory,
            tableOptions.computeFluxGroupKeyUnion
          )
        )
      }
      reject(e)
    },
    useCancellable(val: Cancellable): void {
      cancellable = val
    },
  }
}

/**
 * Executes a flux query and collects results into a Giraffe's Table.
 *
 * @param queryApi - InfluxDB client's QueryApi instance
 * @param query - query to execute
 * @param tableFactory - creates a new Giraffe table
 * @param tableOptions - tableOptions allows to filter or even stop the processing of rows, specify maximum rows or restrict the columns to collect.
 * @returns Promise with query results
 */
export function queryToTable(
  queryApi: QueryApi,
  query: string | ParameterizedQuery,
  tableFactory: GiraffeTableFactory,
  tableOptions?: TableOptions
): Promise<Table> {
  return new Promise<FromFluxResult>((resolve, reject) => {
    queryApi.queryRows(
      query,
      createCollector(resolve, reject, tableFactory, tableOptions)
    )
  }).then(result => result.table)
}

/**
 * Executes a flux query and iterrativelly collects results into a Giraffe's FromFluxResult.
 *
 * @param queryApi - InfluxDB client's QueryApi instance
 * @param query - query to execute
 * @param tableFactory - creates a new Giraffe table
 * @param tableOptions - tableOptions allows to filter or even stop the processing of rows, specify maximum rows or restrict the columns to collect
 * @returns a Promise with query results
 */
export function queryToFromFluxResult(
  queryApi: QueryApi,
  query: string | ParameterizedQuery,
  tableFactory: GiraffeTableFactory,
  tableOptions?: TableOptions
): Promise<FromFluxResult> {
  return new Promise<FromFluxResult>((resolve, reject) => {
    queryApi.queryRows(
      query,
      createCollector(resolve, reject, tableFactory, {
        ...tableOptions,
        computeFluxGroupKeyUnion: true,
      })
    )
  })
}
