#!/usr/bin/env node
/*
This example setups a new INFLUXDB database with user,organization
and bucket that can be then used in examples. All values that used 
for onboarding are defined in ./env.ts .
*/

import {InfluxDB} from '@influxdata/influxdb-client'
import {SetupAPI} from '@influxdata/influxdb-client-apis'
import {url, username, password, org, bucket, token} from './env.js'

console.log('*** ONBOARDING ***')
const setupApi = new SetupAPI(new InfluxDB({url}))
try {
  const {allowed} = await setupApi.getSetup()
  if (allowed) {
    await setupApi.postSetup({
      body: {
        org,
        bucket,
        username,
        password,
        token,
      },
    })
    console.log(`InfluxDB '${url}' is now onboarded.`)
  } else {
    console.log(`InfluxDB '${url}' has been already onboarded.`)
  }
  console.log('\nFinished SUCCESS')
} catch (e) {
  console.error(e)
  console.log('\nFinished ERROR')
}
