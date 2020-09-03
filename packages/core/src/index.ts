/**
 * The `@influxdata/influxdb-client` package provides optimized APIs that write or query InfluxDB v2.
 *
 * @remarks
 * The entry point of this package is the {@link @influxdata/influxdb-client#InfluxDB } class. It is
 * initialized with options that tells how to communicate with InfluxDB. The simple usage pattern is:
 *
 * ```
 * import {InfluxDB} = from('@influxdata/influxdb-client')
 * const influxDB = new InfluxDB({
 *   url: "http://localhost:8086",
 *   token: "your-api-token"
 * })
 * ```
 *
 * The influxDB object let you create two essential API instances, {@link @influxdata/influxdb-client#InfluxDB.getWriteApi }
 * and {@link @influxdata/influxdb-client#InfluxDB.getQueryApi }. The {@link @influxdata/influxdb-client#WriteApi}
 * asynchronously writes measurement points on background, in batches to optimize network traffic, and with retries
 * upon failures. The {@link @influxdata/influxdb-client#QueryApi} let you execute a flux query against InfluxDB
 * and offers several ways to stream query results.
 *
 * The influxDB object is also used to create more specialized InfluxDB management API instances in
 * {@link @influxdata/influxdb-client-apis# | @influxdata/influxdb-client-apis} .
 *
 * See also {@link https://github.com/influxdata/influxdb-client-js/tree/master/examples | examples} to know more.
 *
 * @packageDocumentation
 */
export * from './options'
export * from './errors'
export * from './util/escape'
export * from './util/currentTime'
export {default as Cancellable} from './util/Cancellable'
export * from './query'
export * from './transport'
export * from './observable'
export {default as Point} from './Point'
export {default as InfluxDB} from './InfluxDB'
export {default as QueryApi, Row, QueryOptions} from './QueryApi'
export {default as WriteApi} from './WriteApi'
