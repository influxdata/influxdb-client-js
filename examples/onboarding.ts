#!../node_modules/.bin/ts-node
/*
This example setups a new INFLUXDB database with user,organization
and bucket that can be then used in examples. All values that used 
for onboarding are defined in ./env.ts .
*/

import {InfluxDB} from '@bonitoo-io/influxdb-client'
import {SetupAPI, OnboardingRequest} from '@bonitoo-io/influxdb-client-apis'
import {url, username, password, org, bucket, token} from './env'

console.log('*** ONBOARDING ***')
const setupApi = new SetupAPI(new InfluxDB({url}))

setupApi
  .getSetup()
  .then(async ({allowed}) => {
    if (allowed) {
      await setupApi.postSetup({
        body: ({
          org,
          bucket,
          username,
          password,
          token, // token is not documented in open API
        } as unknown) as OnboardingRequest,
      })
      console.log(`InfluxDB '${url}' is now onboarded.`)
    } else {
      console.log(`InfluxDB '${url}' has been already onboarded.`)
    }
    console.log('\nFinished SUCCESS')
  })
  .catch(error => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
