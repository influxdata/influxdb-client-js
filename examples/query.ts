#!./node_modules/.bin/ts-node
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import {InfluxDB, FluxTableMetaData} from '../packages/core'
import {url, token, org} from './env'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const fluxQuery =
  'from(bucket:"my-bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")'

console.log('*** QUERY ROWS ***')
// performs query and receive line table metadata and rows
// https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/
queryApi.queryRows(fluxQuery, {
  next(row: string[], tableMeta: FluxTableMetaData) {
    const o = tableMeta.toObject(row)
    // console.log(JSON.stringify(o, null, 2))
    console.log(
      `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
    )
  },
  error(error: Error) {
    console.error(error)
    console.log('\nFinished ERROR')
  },
  complete() {
    console.log('\nFinished SUCCESS')
  },
})

// // executes query and wait for all results in a Promise
// // use with caution, it copies the whole stream of results into memory
// queryApi
//   .collectRows(fluxQuery /*, you can specify a row mapper as a second arg */)
//   .then(data => {
//     data.forEach(x => console.log(JSON.stringify(x)))
//     console.log('\nCollect ROWS SUCCESS')
//   })
//   .catch(error => {
//     console.error(error)
//     console.log('\nCollect ROWS ERROR')
//   })

// performs query and receive line results in annotated csv format
// https://v2.docs.influxdata.com/v2.0/reference/syntax/annotated-csv/
// queryApi.queryLines(
//   fluxQuery,
//   {
//     error(error: Error) {
//       console.error(error)
//       console.log('\nFinished ERROR')
//     },
//     next(line: string) {
//       console.log(line)
//     },
//     complete() {
//       console.log('\nFinished SUCCESS')
//     },
//   }
// )
