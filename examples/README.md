# InfluxDB Client Examples

- Prerequisites
  - [yarn](https://yarnpkg.com/lang/en/docs/install/) installed
  - Run `yarn install`
  - Change variables in [./env.ts](env.ts) to configure connection to your InfluxDB instance. The default settings point to a dockerized influxDB 2 installation as described in [https://v2.docs.influxdata.com/v2.0/get-started/ ](get started)
- Examples are executable. If it does not work for you, run `yarn ts-node example/EXAMPLE.ts`.
  - [setupInfluxDB.ts](./setupInfluxDB.ts)
    Performs onboarding of a new influxDB database (such as a new docker pod). It creates a new organization, bucket and user that is then used in examples.
  - [write.ts](./write.ts)
    Writes data points to InfluxDB.
  - [query.ts](./query.ts)
    Query InfluxDB (with flux).
