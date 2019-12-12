#!../node_modules/.bin/ts-node
/*
This example setups a new INFLUXDB database with user,organization
and bucket that can be then used in examples. All values that used 
for onboarding are defined in ./env.ts .
*/

import NodeHttpTransport from '../src/impl/NodeHttpTransport'
import {url, username, password, org, bucket, token} from './env'

// TODO better to use InfluxDB API herein
new NodeHttpTransport({
  url,
}).send(
  '/api/v2/setup',
  JSON.stringify({
    username,
    password,
    org,
    bucket,
    token,
  }),
  {method: 'POST', headers: {accept: 'application/json'}},
  {
    error(error: Error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    next(data: any) {
      console.log(Buffer.isBuffer(data) ? data.toString('utf8') : String(data))
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  }
)
