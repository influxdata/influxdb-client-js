/**
 * The `@influxdata/influxdb-client-giraffe` package transforms InfluxDB (Flux) query results
 * to a format that is used by {@link https://github.com/influxdata/giraffe | Giraffe } to visualize the data.
 *
 * @remarks
 * The main goal of this package is to provide an efficient {@link @influxdata/influxdb-client-giraffe#queryToTable}
 * function that executes a Flux query against InfluxDB (v2) and returns a Table that is then directly suitable
 * as a data input of various Giraffe visualizations.
 *
 * ```jsx
 * import {InfluxDB} from '@influxdata/influxdb-client'
 * import {queryToTable} from '@influxdata/influxdb-client-giraffe'
 * import {newTable, Plot} from '@influxdata/giraffe'
 * ...
 * const queryApi = new InfluxDB({url, token}).getQueryApi(org)
 * const table = await queryToTable(
 *   api,
 *   'from(bucket: "my-bucket") |> range(start: -30d)',
 *   newTable
 * )
 * ...
 * const config = {table, ...}
 * <Plot config={config} >
 * ...
 * ```
 *
 * See also {@link https://github.com/influxdata/influxdb-client-js/tree/master/examples | InfluxDB v2 client examples}
 * and {@link https://influxdata.github.io/giraffe/ | Giraffe storybook }.
 *
 * @packageDocumentation
 */
export * from './queryTable'
export * from './csvToTable'
