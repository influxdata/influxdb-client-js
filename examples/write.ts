#!../node_modules/.bin/ts-node
//////////////////////////////////////////
// Shows how to use InfluxDB write API. //
//////////////////////////////////////////

import {InfluxDB, Point} from '../src'
import {url, token, org, bucket} from './env'

const writeApi = new InfluxDB({url, token}).getWriteApi(org, bucket)
// setup default tags for all writes through this API
writeApi.useDefaultTags({hostname: require('os').hostname()})

console.log('*** WRITE POINTS ***')
// writes a simple record to the database
writeApi.writePoint(
  new Point('temperature')
    .tag('example', 'write.ts')
    .floatField('value', 20 + Math.round(100 * Math.random()) / 10)
)
writeApi.writePoint(
  new Point('temperature')
    .tag('example', 'write.ts')
    .floatField('value', 20 + Math.round(100 * Math.random()) / 10)
)

// flush pending writes and close writeApi
writeApi
  .close()
  .then(() => {
    console.log('FINISHED ... try ./query.ts')
  })
  .catch((e: Error) => {
    console.log('FAILED ... the data might not send to the server')
  })
