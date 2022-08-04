#!./node_modules/.bin/ts-node

/////////////////////////////////////////////////////////////////////////
// Shows how to delete data from InfluxDB. See                         //
// https://docs.influxdata.com/influxdb/latest/write-data/delete-data/ //
/////////////////////////////////////////////////////////////////////////

import {InfluxDB} from '@influxdata/influxdb-client'
import {DeleteAPI} from '@influxdata/influxdb-client-apis'
import {url, token, org, bucket} from './env'
const influxDB = new InfluxDB({url, token})

/*
The functionality of the DeleteAPI is fully demonstrated with
the following sequence of examples:
 - write.js
 - query.ts
 - delete.ts
 - query.ts

Note: You can also delete and re-create the whole bucket,
see ./createBucket.js example.
*/

async function deleteData(): Promise<void> {
  console.log('*** DELETE DATA ***')
  const deleteAPI = new DeleteAPI(influxDB)
  // define time interval for delete operation
  const stop = new Date()
  const start = new Date(stop.getTime() - /* an hour */ 60 * 60 * 1000)

  await deleteAPI.postDelete({
    org,
    bucket,
    // you can better specify orgID, bucketID in place or org, bucket if you already know them
    body: {
      start: start.toISOString(),
      stop: stop.toISOString(),
      // see https://docs.influxdata.com/influxdb/latest/reference/syntax/delete-predicate/
      predicate: '_measurement="temperature"',
    },
  })
}

deleteData()
  .then(() => console.log('\nFinished SUCCESS'))
  .catch((error) => {
    console.error(error)
    console.log('\nFinished ERROR')
  })
