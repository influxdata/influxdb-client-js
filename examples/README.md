# InfluxDB Client Examples

- Prerequisites
  - [https://yarnpkg.com/lang/en/docs/install/](yarn) installed
  - Run `yarn install`
  - Change variables in [./env.ts](env.ts) to configure connection to your InfluxDB instance. The default settings points to a dockerized influxDB 2 installation as described in [https://v2.docs.influxdata.com/v2.0/get-started/ ](get started)
- Examples are executable on unixes, or simple run `yarn ts-node example/EXAMPLE.ts`)
  - [./setupInfluxDB.ts](setupInfluxDB.ts) performs onboarding of a new influxDB database (such as those running from docker), it creates a new organization, bucket and user that is then used in examples
  - [./write.ts](write.ts) writes data points to InfluxDB
  - [./query.ts](query.ts) query InfluxDB (with flux)
