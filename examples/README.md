# InfluxDB Client Examples

- Prerequisites
  - [yarn](https://yarnpkg.com/lang/en/docs/install/) installed
  - Run `yarn --cwd ..` in this directory
  - Run `yarn --cwd .. build` in this directory, the referenced client library is then compiled
- Node.js examples
  - Change variables in [./env.ts](env.ts) to configure connection to your InfluxDB instance. The file can be used as-is against a new [docker influxDB v2.0 installation](https://v2.docs.influxdata.com/v2.0/get-started/)
  - Examples are executable. If it does not work for you, run `yarn ts-node EXAMPLE.ts`.
  - [onboarding.ts](./onboarding.ts)
    Performs onboarding of a new influxDB database. It creates a new organization, bucket and user that is then used in all examples.
  - [write.ts](./write.ts)
    Writes data points to InfluxDB.
  - [query.ts](./query.ts)
    Query InfluxDB with [Flux](https://v2.docs.influxdata.com/v2.0/query-data/get-started/).
- Browser examples
  - Change `url` in [./env.ts](env.ts) to match your influxDB instance
  - Change `token,org,bucket` variables in [./index.html](index.html) to match your influxDB instance
  - Run `yarn browser`
    It starts a local HTTP server and opens [./index.html](index.html) that contains examples.
    The local HTTP server serves all files from this git repository and also proxies requests
    to a configured influxDB database, see [./scripts/server.js](server.js) for details.
