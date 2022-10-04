#!/usr/bin/env -S deno run --allow-net
//////////////////////////////////////////////////////
// A modified query.ts example that works with deno //
//////////////////////////////////////////////////////

import {InfluxDB} from 'https://cdn.skypack.dev/@influxdata/influxdb-client-browser?dts'

const url = 'http://localhost:8086'
const token = 'my-token'
const org = 'my-org'

const queryApi = new InfluxDB({url, token}).getQueryApi(org)
const fluxQuery =
  'from(bucket:"my-bucket" ) |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")'

console.log('** QUERY ROWS ***')
try {
  for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)) {
    const o = tableMeta.toObject(values)
    // console.log(JSON.stringify(o, null, 2))
    console.log(
      `${o._time} ${o._measurement} in '${o.location}' (${o.example}): ${o._field}=${o._value}`
    )
  }
  console.log('\nFinished SUCCESS')
} catch (error) {
  console.error(error)
  console.log('\nFinished ERROR')
}
