#!/usr/bin/env node
/*
This example setups a new INFLUXDB database with user,organization
and bucket that can be then used in examples. All values that used 
for onboarding are defined in ./env.ts .
*/

const {InfluxDB} = require('@influxdata/influxdb-client')
const {SetupAPI} = require('@influxdata/influxdb-client-apis')
const {url, username, password, org, bucket, token} = require('./env')

console.log('*** ONBOARDING ***')
const setupApi = new SetupAPI(new InfluxDB({url}))

setupApi
  .getSetup()
  .then(async ({allowed}) => {
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
  })
  .catch((error) => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
