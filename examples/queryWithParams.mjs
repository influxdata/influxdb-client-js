#!/usr/bin/env node
//////////////////////////////////////////
// Shows how to use InfluxDB query API. //
//////////////////////////////////////////

import {InfluxDB, flux, fluxDuration} from '@influxdata/influxdb-client'
import {url, token, org} from './env.mjs'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const start = fluxDuration('-1m')
const measurement = 'temperature'
const fluxQuery = flux`from(bucket:"my-bucket") 
  |> range(start: ${start}) 
  |> filter(fn: (r) => r._measurement == ${measurement})`
console.log('query:', fluxQuery.toString())

console.log('*** QUERY ROWS ***')
try {
  for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)) {
    const o = tableMeta.toObject(values)
    // console.log(JSON.stringify(o, null, 2))
    console.log(
      `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
    )
  }
  console.log('\nFinished SUCCESS')
} catch (e) {
  console.log('\nFinished ERROR')
}
