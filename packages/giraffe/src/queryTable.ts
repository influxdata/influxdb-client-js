import {ParameterizedQuery, QueryApi} from '@influxdata/influxdb-client'
import {Table, FromFluxResult} from '@influxdata/giraffe'
import {createCollector, GiraffeTableFactory, TableOptions} from './csvToTable'

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
  }).then((result) => result.table)
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
