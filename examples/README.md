# InfluxDB Client Examples

This directory contains javascript and typescript examples for node.js and browser environments.

- Prerequisites
  - [node](https://nodejs.org/en/) installed
  - Run `npm install` in this directory
- Node.js examples
  - Change variables in [./env.js](env.js) to configure connection to your InfluxDB instance. The file can be used as-is against a new [docker InfluxDB v2.0 OSS GA installation](https://v2.docs.influxdata.com/v2.0/get-started/)
  - Examples are executable. If it does not work for you, run `npm run ts-node EXAMPLE.ts`.
  - [write.js](./write.js)
    Write data points to InfluxDB.
  - [query.ts](./query.ts)
    Query InfluxDB with [Flux](https://v2.docs.influxdata.com/v2.0/query-data/get-started/).
  - [queryWithParams.ts](./queryWithParams.ts)
    Supply parameters to a [Flux](https://v2.docs.influxdata.com/v2.0/query-data/get-started/) query.
  - [health.js](./health.js)
    Check health of InfluxDB server.
  - [createBucket.js](./createBucket.js)
    Creates an example bucket.
  - [onboarding.js](./onboarding.js)
    Performs onboarding of a new influxDB database. It creates a new organization, bucket and user that is then used in all examples.
  - [influxdb-1.8.ts](./influxdb-1.8.ts)
    How to use forward compatibility APIs from InfluxDB 1.8.
  - [rxjs-query.ts](./rxjs-query.ts)
    Use [RxJS](https://rxjs.dev/) to query InfluxDB with [Flux](https://v2.docs.influxdata.com/v2.0/query-data/get-started/).
  - [writeAdvanced.js](./writeAdvanced.js)
    Shows how to control the way of how data points are written to InfluxDB.
- Browser examples
  - Change `url` in [env.js](./env.js) to match your influxDB instance
  - Change `token, org, bucket, username, password` variables in [./index.html](index.html) to match your influxDB instance
  - Run `npm run browser`
    It starts a local HTTP server and opens [index.html](./index.html) that contains examples.
    The local HTTP server serves all files from this git repository and also proxies requests
    to a configured influxDB database, see [scripts/server.js](./scripts/server.js) for details.
