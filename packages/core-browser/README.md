# @influxdata/influxdb-client-browser

The reference InfluxDB 2.0 javascript client for browser and [deno](https://deno.land/) environments. The package.json

- **main** points to browser UMD distribution of @influxdata/influxdb-client
- **module** points to browser ESM distribution of @influxdata/influxdb-client
- **browser** points to browser UMD distribution of @influxdata/influxdb-client

Browser distributions do not work in Node.js and vice versa, different APIs are used in Node.js. See `@influxdata/influxdb-client` for a distribution that can be used in Node.js environment.

See https://github.com/influxdata/influxdb-client-js to know more.

**Note: This library is for use with InfluxDB 2.x or 1.8+. For connecting to InfluxDB 1.x instances, see [node-influx](https://github.com/node-influx/node-influx).**
