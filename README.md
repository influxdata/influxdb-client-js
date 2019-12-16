# influxdb-client-javascript

[![CircleCI](https://circleci.com/gh/bonitoo-io/influxdb-client-js.svg?style=svg)](https://circleci.com/gh/bonitoo-io/influxdb-client-js)
[![codecov](https://codecov.io/gh/bonitoo-io/influxdb-client-js/branch/master/graph/badge.svg)](https://codecov.io/gh/bonitoo-io/influxdb-client-js)
[![License](https://img.shields.io/github/license/bonitoo-io/influxdb-client-js.svg)](https://github.com/bonitoo-io/influxdb-client-js/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues-raw/bonitoo-io/influxdb-client-js.svg)](https://github.com/bonitoo-io/influxdb-client-js/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/bonitoo-io/influxdb-client-js.svg)](https://github.com/bonitoo-io/influxdb-client-js/pulls)

This repository contains the reference javascript client for InfluxDB 2.0.

## Disclaimer

This library is a work in progress and should not be considered production ready yet.

## ToDos

- this documentation
- add limited buffer for write retries / RX.js
- all APIs (generated)
- implement transport for both node and browser, fetch API?
- monorepo with yarn, separate examples/experiments
- browser client howto

## Usage

- [Examples](./tree/master/examples)
  - [Write to InfluxDB](./blob/master/examples/write.ts)
  - [Query InfluxDB](./blob/master/examples/examples/query.ts)

## Build Requirements

- node v12.13.1
- yarn 1.9.4. or higher

Run all unit tests:

```bash
$ yarn test:unit
```

Check code:

```bash
$ yarn coverage
```

## Contributing

If you would like to contribute code you can do through GitHub by forking the repository and sending a pull request into the `master` branch.

## License

The InfluxDB 2.0 javascript client is released under the [MIT License](https://opensource.org/licenses/MIT).
