# @influxdata/influxdb-client-browser

The reference InfluxDB 2.x JavaScript client for browser and [Deno](https://deno.land/) environments.

The package.json

- **main** and **browser** point to the browser UMD distribution of @influxdata/influxdb-client
- **module** points to the browser ESM distribution of @influxdata/influxdb-client

Browser distributions do not work in Node.js and vice versa because they use different APIs. Use `@influxdata/influxdb-client` in Node.js environments.
For more information, see [influxdb-client-js](https://github.com/influxdata/influxdb-client-js).

**Note: This library is for use with InfluxDB 2.x or 1.8+. For connecting to InfluxDB 1.x instances, see [node-influx](https://github.com/node-influx/node-influx).**
