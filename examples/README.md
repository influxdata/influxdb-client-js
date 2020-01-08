# InfluxDB Client Examples

- Prerequisites
  - [yarn](https://yarnpkg.com/lang/en/docs/install/) installed
  - Run `yarn --cwd ..` in this directory
  - Run `yarn --cwd .. build` in this directory, the referenced client library is then compiled
  - Change variables in [./env.ts](env.ts) to configure connection to your InfluxDB instance. The file can be used as-is against a [docker influxDB v2.0 installation](https://v2.docs.influxdata.com/v2.0/get-started/)
- Examples are executable. If it does not work for you, run `yarn ts-node EXAMPLE.ts`.
  - [setupInfluxDB.ts](./setupInfluxDB.ts)
    Performs onboarding of a new influxDB database (such as a new docker pod). It creates a new organization, bucket and user that is then used in examples.
  - [write.ts](./write.ts)
    Writes data points to InfluxDB.
  - [query.ts](./query.ts)
    Query InfluxDB with [Flux](https://v2.docs.influxdata.com/v2.0/query-data/get-started/).
