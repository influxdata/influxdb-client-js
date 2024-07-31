#!/usr/bin/env node
///////////////////////////////////////////////////////////
// Shows how to handle InfluxDB write API - HTTP Errors. //
// To be run against cloud account                       //
///////////////////////////////////////////////////////////

import {InfluxDB} from '@influxdata/influxdb-client'
import {url, token, org, bucket} from './env.mjs'

console.log('*** FORCE AND HANDLE HTTP ERROR ***')

const writeApi = new InfluxDB({url, token}).getWriteApi(org, bucket, 'ns')

try {
  await writeApi.writeRecord('asdf') //invalid lineprotocol
  await writeApi.close()
} catch (e) {
  if (e.statusCode !== 400) {
    throw new Error(`Expected HTTP 400 but received ${e.statusCode}`)
  }
  console.log()
  console.log('Handle HTTP Error')
  console.log(`Caught expected HTTP ${e.statusCode}`)
  console.log(`     At:             ${e.headers.date}`)
  console.log(`     During request: ${e.headers['x-influxdb-request-id']}`)
  console.log(`     On build:       ${e.headers['x-influxdb-build']}`)
  console.log(`     Traceable:      ${e.headers['trace-id']}`)
  console.log(
    `     Can retry:      ${e._retryAfter === 0 ? false : e._retryAfter}`
  )
}
