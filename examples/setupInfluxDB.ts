#!../node_modules/.bin/ts-node

import NodeHttpTransport from '../src/impl/NodeHttpTransport'
import {url} from './env'

// Post onBoarding request is required for a new database to setup initial user (my-user@my-password),
// org (my-org) and bucketSetup (my-bucket) for next examples.
//
// curl -i -X POST http://localhost:9999/api/v2/setup -H 'accept: application/json' \
//     -d '{
//             "username": "my-user",
//             "password": "my-password",
//             "org": "my-org",
//             "bucket": "my-bucket",
//             "token": "my-token"
//         }'

// TODO use InfluxDB API herein
new NodeHttpTransport({
  url,
}).send(
  '/api/v2/setup',
  JSON.stringify({
    username: 'my-user',
    password: 'my-password',
    org: 'my-org',
    bucket: 'my-bucket',
    token: 'my-token',
  }),
  {method: 'POST', headers: {accept: 'application/json'}},
  {
    error(error: Error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    next(line: any) {
      console.log(line)
    },
    complete() {
      console.log('\nFinished SUCCESS')
    },
  }
)
