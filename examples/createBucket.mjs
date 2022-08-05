#!/usr/bin/env node
/*
This example creates a new bucket. If a bucket of the same name already exists, 
it is deleted and then created again.
*/

import {InfluxDB, HttpError} from '@influxdata/influxdb-client'
import {OrgsAPI, BucketsAPI} from '@influxdata/influxdb-client-apis'
import {url, org, token} from './env.js'
const influxDB = new InfluxDB({url, token})

async function recreateBucket(name) {
  console.log('*** Get organization by name ***')
  const orgsAPI = new OrgsAPI(influxDB)
  const organizations = await orgsAPI.getOrgs({org})
  if (!organizations || !organizations.orgs || !organizations.orgs.length) {
    console.error(`No organization named "${org}" found!`)
  }
  const orgID = organizations.orgs[0].id
  console.log(`Using organization "${org}" identified by "${orgID}"`)

  console.log('*** Get buckets by name ***')
  const bucketsAPI = new BucketsAPI(influxDB)
  try {
    const buckets = await bucketsAPI.getBuckets({orgID, name})
    if (buckets && buckets.buckets && buckets.buckets.length) {
      console.log(`Bucket named "${name}" already exists"`)
      const bucketID = buckets.buckets[0].id
      console.log(`*** Delete Bucket "${name}" identified by "${bucketID}" ***`)
      await bucketsAPI.deleteBucketsID({bucketID})
    }
  } catch (e) {
    if (e instanceof HttpError && e.statusCode == 404) {
      // OK, bucket not found
    } else {
      throw e
    }
  }

  console.log(`*** Create Bucket "${name}" ***`)
  // creates a bucket, entity properties are specified in the "body" property
  const bucket = await bucketsAPI.postBuckets({body: {orgID, name}})
  console.log(
    JSON.stringify(
      bucket,
      (key, value) => (key === 'links' ? undefined : value),
      2
    )
  )
}

try {
  await recreateBucket('example-bucket')
  console.log('\nFinished SUCCESS')
} catch (e) {
  console.error(e)
  console.log('\nFinished ERROR')
}
