/**
 * The `@influxdata/influxdb-client-apis` package provides all InfluxDB v2 APIs generated from its
 * {@link https://v2.docs.influxdata.com/v2.0/api/ | OpenAPI specification}.
 *
 * @remarks
 * These APIs allow to manage the domain objects of InfluxDB (such as buckets, sources, tasks, authorizations).
 * The APIs are constructed with `InfluxDB` instance that is populated with InfluxDB server parameters. All API
 * operations returns Promise of response data. And the majority of them relies upon simple exchange of JSON data.
 * For example:
 *
 * ```
 * ...
 * const {InfluxDB} = require('@influxdata/influxdb-client')
 * const {OrgsAPI} = require('@influxdata/influxdb-client-apis')
 * const influxDB = new InfluxDB({
 *   url: "http://localhost:9999", 
 *   token: "my-token"
 * })
 * ...
 * async function getOrg(name) {
 *   const orgsAPI = new OrgsAPI(influxDB)
 *   const organizations = await orgsAPI.getOrgs({
 *     org: "my-org"
 *   })
 * ...
 * ```
 
 * Generated APIs that write or query InfluxDB are also herein, but it is recommended to use
 * {@link @influxdata/influxdb-client#WriteApi} and {@link @influxdata/influxdb-client#QueryApi}
 * from `@influxdata/influxdb-client`, they are much easier to use and offer specialized features
 * (write failover, line protocol serialization, flux results parsing, ...).
 *
 * See also {@link https://github.com/influxdata/influxdb-client-js/tree/master/examples | examples} to know more.
 * 
 * @packageDocumentation
 */
export * from './generated'
export {RequestOptions} from './APIBase'
