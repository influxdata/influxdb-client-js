#!/usr/bin/env node
//////////////////////////////////////////
// Shows how to use InfluxDB write API. //
//////////////////////////////////////////

const {InfluxDB, Point, HttpError} = require('@influxdata/influxdb-client')
const {url, token, org, bucket} = require('./env')
const {hostname} = require('os')

console.log('*** WRITE POINTS ***')
// create a write API, expecting point timestamps in nanoseconds (can be also 's', 'ms', 'us')
const writeApi = new InfluxDB({url, token}).getWriteApi(org, bucket, 'ns')
// setup default tags for all writes through this API
writeApi.useDefaultTags({location: hostname()})

// write point with the current (client-side) timestamp
const point1 = new Point('temperature')
  .tag('example', 'write.ts')
  .floatField('value', 20 + Math.round(100 * Math.random()) / 10)
writeApi.writePoint(point1)
console.log(` ${point1}`)
// write point with a custom timestamp
const point2 = new Point('temperature')
  .tag('example', 'write.ts')
  .floatField('value', 10 + Math.round(100 * Math.random()) / 10)
  .timestamp(new Date()) // can be also a number, but in writeApi's precision units (s, ms, us, ns)!
writeApi.writePoint(point2)
console.log(` ${point2.toLineProtocol(writeApi)}`)

// WriteApi always buffer data into batches to optimize data transfer to InfluxDB server and retries
// writing upon server/network failure. writeApi.flush() can be called to flush the buffered data,
// close() also flushes the remaining buffered data and then cancels pending retries.
writeApi
  .close()
  .then(() => {
    console.log('FINISHED ... now try ./query.ts')
  })
  .catch(e => {
    console.error(e)
    if (e instanceof HttpError && e.statusCode === 401) {
      console.log('Run ./onboarding.js to setup a new InfluxDB database.')
    }
    console.log('\nFinished ERROR')
  })
