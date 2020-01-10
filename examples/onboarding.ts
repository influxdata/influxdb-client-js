#!../node_modules/.bin/ts-node
/*
This example setups a new INFLUXDB database with user,organization
and bucket that can be then used in examples. All values that used 
for onboarding are defined in ./env.ts .
*/

import {InfluxDB} from '@bonitoo-io/influxdb-client'
import {url, username, password, org, bucket, token} from './env'

console.log('*** ONBOARDING ***')
const setupApi = new InfluxDB({url}).getSetupApi()

setupApi
  .isOnboarding()
  .then(async (allowed: boolean) => {
    if (allowed) {
      await setupApi.setup({
        org,
        bucket,
        username,
        password,
        token,
      })
      console.log(`InfluxDB '${url}' has been onboarded.`)
    } else {
      console.log(`Influxdb ${url} has been already onboarded.`)
    }
    console.log('\nFinished SUCCESS')
  })
  .catch(error => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
