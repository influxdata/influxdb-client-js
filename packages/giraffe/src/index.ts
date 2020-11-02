/**
 * The `@influxdata/influxdb-client-giraffe` package transforms InfluxDB (Flux) query results
 * to a format that is used by {@link https://github.com/influxdata/giraffe | giraffe } to visualize the data.
 *
 * @remarks
 * The main goal of this package is to provide an efficient {@link @influxdata/influxdb-client-giraffe#queryTable}
 * function that executes a Flux query against InfluxDB (v2) and returns a Table that is then directly suitable
 * as a data input of various giraffe visualizations.
 *
 * ```js
 * import {InfluxDB} = from('@influxdata/influxdb-client')
 * import {queryTable} = from('@influxdata/influxdb-client-giraffe')
 * import {newTable} = from('@influxdata/giraffe')
 * ...
 * const queryApi = new InfluxDB({url, token}).getQueryApi(org)
 * const table = await queryTable(
 *   api,
 *   'from(bucket: "my-bucket") |> range(start: -30d)',
 *   newTable,
 *   {maxTableRows: 5000}
 * )
 * ...
 * ```
 *
 * See also {@link https://github.com/influxdata/influxdb-client-js/tree/master/examples | examples} to know more.
 * This package is **experimental**, the dependant `@influxdata/giraffe` package may change until its first GA release.
 *
 * @packageDocumentation
 */
export * from './queryTable'
