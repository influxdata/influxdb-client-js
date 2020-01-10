#!../node_modules/.bin/ts-node
//////////////////////////////////////////
// Shows how to use InfluxDB write API. //
//////////////////////////////////////////

import {InfluxDB, Point} from '@bonitoo-io/influxdb-client'
import {url, token, org, bucket} from './env'
import {hostname} from 'os'

console.log('*** WRITE POINTS ***')
const writeApi = new InfluxDB({url, token}).getWriteApi(org, bucket)
// setup default tags for all writes through this API
writeApi.useDefaultTags({location: hostname()})

const point1 = new Point('temperature')
  .tag('example', 'write.ts')
  .floatField('value', 20 + Math.round(100 * Math.random()) / 10)
writeApi.writePoint(point1)
console.log(` ${point1}`)
const point2 = new Point('temperature')
  .tag('example', 'write.ts')
  .floatField('value', 10 + Math.round(100 * Math.random()) / 10)
writeApi.writePoint(point2)
console.log(` ${point2}`)

// flush pending writes and close writeApi
writeApi
  .close()
  .then(() => {
    console.log('FINISHED ... now try ./query.ts')
  })
  .catch((e: Error) => {
    console.log('FAILED ... the data might not send to the server', e)
  })
