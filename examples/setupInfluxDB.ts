#!../node_modules/.bin/ts-node
/*
This example setups a new INFLUXDB database with user,organization
and bucket that can be then used in examples. All values that used 
for onboarding are defined in ./env.ts .
*/

import {InfluxDB} from '@bonitoo-io/influxdb-client'
import {url, username, password, org, bucket, token} from './env'

const setupApi = new InfluxDB({url}).getSetupApi()

setupApi
  .isOnboarding()
  .then(async (allowed: boolean) => {
    if (allowed) {
      const response = await setupApi.setup(
        {org, bucket, username, password},
        token
      )
      console.log(`The database is now onboarded.`)
      console.log(JSON.stringify(response, null, 2))
    } else {
      console.log(
        `The database exposed at ${url} already has a default user, organization and bucket.`
      )
    }
    console.log('\nFinished SUCCESS')
  })
  .catch(error => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
