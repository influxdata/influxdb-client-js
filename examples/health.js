#!/usr/bin/node
/*
This example shows how to use management/administration InfluxDB APIs
All InfluxDB APIs are available through '@influxdata/influxdb-client-apis' package.

See https://v2.docs.influxdata.com/v2.0/api/
*/

const {InfluxDB} = require('@influxdata/influxdb-client')
const {HealthAPI} = require('@influxdata/influxdb-client-apis')
const {url, token} = require('./env')
const timeout = 10 * 1000 // timeout for health check

console.log('*** HEALTH CHECK ***')
const influxDB = new InfluxDB({url, token, timeout})
const healthAPI = new HealthAPI(influxDB)

healthAPI
  .getHealth()
  .then((result /* : HealthCheck */) => {
    console.log(JSON.stringify(result, null, 2))
    console.log('\nHealth:', result.status === 'pass' ? 'OK' : 'NOT OK')
    console.log('\nFinished success')
  })
  .catch(error => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
