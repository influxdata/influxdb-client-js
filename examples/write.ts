#!../node_modules/.bin/ts-node
//////////////////////////////////////////
// Shows how to use InfluxDB write API. //
//////////////////////////////////////////

import {InfluxDB, Point} from '../src'
import {url, token, org, bucket} from './env'

const writeApi = new InfluxDB({url, token}).getWriteApi(org, bucket)
// setup default tags for all writes through this API
writeApi.useDefaultTags({hostname: require('os').hostname()})
// writes a simple record to the database
writeApi.writePoint(
  new Point('temperature').tag('example', 'write.ts').floatField('value', 28.3)
)
// flushes pending data and closes writeApi, required before the process terminates
writeApi
  .close()
  .then(() => {
    console.log('FINISHED ... now try ./query.ts')
  })
  .catch((e: Error) => {
    console.log('FAILED ... the data might not send to the server')
  })
