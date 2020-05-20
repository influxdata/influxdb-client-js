#!./node_modules/.bin/ts-node
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import {
  InfluxDB,
  FluxTableMetaData,
  flux,
  fluxDuration,
} from '@influxdata/influxdb-client'
import {url, token, org} from './env'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const start = fluxDuration('-1m')
const measurement = 'temperature'
const fluxQuery = flux`from(bucket:"my-bucket") 
  |> range(start: ${start}) 
  |> filter(fn: (r) => r._measurement == ${measurement})`
console.log('query:', fluxQuery)

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
