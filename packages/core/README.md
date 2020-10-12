# @influxdata/influxdb-client

The reference javascript client for InfluxDB 2.0. Both node and browser environments are supported. The package.json

- **main** points to node.js CJS distribution
- **module** points to node.js ESM distribution
- **browser** points to browser (UMD) distribution

Node distributions do not work in browser and vice versa, because different platform APIs are used. See `@influxdata/influxdb-client-browser` that targets only browser.

See https://github.com/influxdata/influxdb-client-js to know more.

**Note: This library is for use with InfluxDB 2.x or 1.8+. For connecting to InfluxDB 1.x instances, see [node-influx](https://github.com/node-influx/node-influx).**
