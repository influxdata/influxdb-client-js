#!./node_modules/.bin/esr
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import {InfluxDB, FluxTableMetaData} from '@influxdata/influxdb-client'
import {url, token, org} from './env.mjs'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const fluxQuery =
  'from(bucket:"my-bucket") |> range(start: -1d) |> filter(fn: (r) => r._measurement == "temperature")'

console.log('*** QUERY ROWS ***')
// There are more ways of how to receive results,
// the essential ones are shown/commented below. See also rxjs-query.ts .
//
// Execute query and receive table metadata and rows as they arrive from the server.
// https://docs.influxdata.com/influxdb/latest/reference/syntax/annotated-csv/
queryApi.queryRows(fluxQuery, {
  next: (row: string[], tableMeta: FluxTableMetaData) => {
    // the following line creates an object for each row
    const o = tableMeta.toObject(row)
    // console.log(JSON.stringify(o, null, 2))
    console.log(
      `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
    )

    // alternatively, you can get only a specific column value without
    // the need to create an object for every row
    // console.log(tableMeta.get(row, '_time'))

    // or you can create a proxy to get column values on demand
    // const p = new Proxy<Record<string, any>>(row, tableMeta)
    // console.log(
    //  `${p._time} ${p._measurement} in '${p.location}' (${p.example}): ${p._field}=${p._value}`
    // )
  },
  error: (error: Error) => {
    console.error(error)
    console.log('\nFinished ERROR')
  },
  complete: () => {
    console.log('\nFinished SUCCESS')
  },
})

// // Execute query and collect result rows in a Promise.
// // Use with caution, it copies the whole stream of results into memory.
// try {
//   const data = await queryApi.collectRows(
//     fluxQuery /*, you can specify a row mapper as a second arg */
//   )
//   data.forEach((x) => console.log(JSON.stringify(x)))
//   console.log('\nCollect ROWS SUCCESS')
// } catch (e) {
//   console.error(e)
//   console.log('\nCollect ROWS ERROR')
// }

// // Execute query and return the whole result as a string.
// // Use with caution, it copies the whole stream of results into memory.
// try {
//   const result = await queryApi.queryRaw(fluxQuery)
//   console.log(result)
//   console.log('\nQueryRaw SUCCESS')
// } catch (e) {
//   console.error(e)
//   console.log('\nQueryRaw ERROR')
// }

// Execute query and receive result lines in annotated csv format
// queryApi.queryLines(
//   fluxQuery,
//   {
//     next: (line: string) => {
//       console.log(line)
//     },
//     error: (error: Error) => {
//       console.error(error)
//       console.log('\nFinished ERROR')
//     },
//     complete: () => {
//       console.log('\nFinished SUCCESS')
//     },
//   }
// )
