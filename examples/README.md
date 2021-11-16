# InfluxDB Client Examples

This directory contains javascript and typescript examples for node.js, browser, and deno.

- Node.js examples
  - Prerequisites
    - [node](https://nodejs.org/en/) installed
    - Run `npm install` in this directory
    - Change variables in [./env.js](env.js) to configure connection to your InfluxDB instance. The file can be used as-is against a new [docker InfluxDB v2.1 OSS GA installation](https://docs.influxdata.com/influxdb/v2.1/get-started/)
  - Examples are executable. If it does not work for you, run `npm run ts-node EXAMPLE.ts`.
  - [write.js](./write.js)
    Write data points to InfluxDB.
  - [query.ts](./query.ts)
    Query InfluxDB with [Flux](https://docs.influxdata.com/influxdb/v2.1/get-started/).
  - [queryWithParams.ts](./queryWithParams.ts)
    Supply parameters to a [Flux](https://docs.influxdata.com/influxdb/v2.1/get-started/) query.
  - [ping.js](./ping.js)
    Check status of InfluxDB server.
  - [createBucket.js](./createBucket.js)
    Creates an example bucket.
  - [onboarding.js](./onboarding.js)
    Performs onboarding of a new influxDB database. It creates a new organization, bucket and user that is then used in all examples.
  - [influxdb-1.8.ts](./influxdb-1.8.ts)
    How to use forward compatibility APIs from InfluxDB 1.8.
  - [rxjs-query.ts](./rxjs-query.ts)
    Use [RxJS](https://rxjs.dev/) to query InfluxDB with [Flux](https://docs.influxdata.com/influxdb/v2.1/get-started/).
  - [writeAdvanced.js](./writeAdvanced.js)
    Shows how to control the way of how data points are written to InfluxDB.
  - [follow-redirects.js](./follow-redirects.js)
    Shows how to configure the client to follow HTTP redirects.
- Browser examples
  - Change `token, org, bucket, username, password` variables in [./env_browser.js](env_browser.js) to match your InfluxDB instance
  - Run `npm run browser`
    It starts a local HTTP server and opens [index.html](./index.html) that contains client examples.
    The local HTTP server serves all files from this git repository and also proxies requests
    to a configured influxDB database, see [scripts/server.js](./scripts/server.js) for details.
  - Click `Visualize with Giraffe Line Chart` to open [giraffe.html](./giraffe.html) that
    shows how visualize query results with [@influxdata/giraffe](https://github.com/influxdata/giraffe).
- Deno examples
  - [query.deno.ts](./query.deno.ts) shows how to query InfluxDB with [Flux](https://docs.influxdata.com/influxdb/v2.1/get-started/).
    It is almost the same as node's [query.ts](./query.ts) example, the difference is the import statement that works in [deno](https://deno.land) and built-in typescript support.
