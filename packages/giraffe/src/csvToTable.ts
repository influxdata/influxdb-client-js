import {Table, FromFluxResult} from '@influxdata/giraffe'
import {stringToLines, linesToTables} from '@influxdata/influxdb-client'
import {createCollector, GiraffeTableFactory, TableOptions} from './queryTable'

/**
 * Transforms annotated CSV query response to Giraffe's FromFluxResult.
 *
 * @param csv - annotated CSV flux query response
 * @param tableFactory - creates a new Giraffe table
 * @param tableOptions - tableOptions allows to filter or even stop the processing of rows, specify maximum rows or restrict the columns to collect
 * @returns a new FromFluxResult instance
 * @throws Error when unable to parse
 */
export function csvToFromFluxResult(
  csv: string,
  tableFactory: GiraffeTableFactory,
  tableOptions?: TableOptions
): FromFluxResult {
  let result: FromFluxResult | undefined
  let error: Error | undefined = undefined
  const collector = createCollector(
    r => (result = r),
    e => (error = e),
    tableFactory,
    tableOptions
  )
  stringToLines(csv, linesToTables(collector))
  if (error) {
    throw error
  } else {
    return result as FromFluxResult
  }
}

/**
 * Transforms annotated CSV query response to Giraffe's Table.
 *
 * @param csv - annotated CSV flux query response
 * @param tableFactory - creates a new Giraffe table
 * @param tableOptions - tableOptions allows to filter or even stop the processing of rows, specify maximum rows or restrict the columns to collect.
 * @returns a new Table instance
 * @throws Error when unable to parse
 */
export function csvToTable(
  csv: string,
  tableFactory: GiraffeTableFactory,
  tableOptions?: TableOptions
): Table {
  return csvToFromFluxResult(csv, tableFactory, tableOptions).table
}
