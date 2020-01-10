#!../node_modules/.bin/ts-node
/*
This example shows how to use management/administration InfluxDB APIs
All InfluxDB APIs are available through '@bonitoo-io/influxdb-client-apis' package.

See https://v2.docs.influxdata.com/v2.0/api/
*/

import {InfluxDB} from '@bonitoo-io/influxdb-client'
import {HealthAPI, HealthCheck} from '@bonitoo-io/influxdb-client-apis'
import {url, token} from './env'

console.log('*** HEALTH CHECK ***')
const influxDB = new InfluxDB({url, token})
const healthAPI = new HealthAPI(influxDB)

healthAPI
  .getHealth()
  .then((result: HealthCheck) => {
    console.log(JSON.stringify(result, null, 2))
    console.log('\nFinished SUCCESS')
  })
  .catch(error => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
