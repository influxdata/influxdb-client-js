# influxdb-client-javascript

[![CircleCI](https://circleci.com/gh/bonitoo-io/influxdb-client-js.svg?style=svg)](https://circleci.com/gh/bonitoo-io/influxdb-client-js)
[![codecov](https://codecov.io/gh/bonitoo-io/influxdb-client-js/branch/master/graph/badge.svg)](https://codecov.io/gh/bonitoo-io/influxdb-client-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/github/license/bonitoo-io/influxdb-client-js.svg)](https://github.com/bonitoo-io/influxdb-client-js/blob/master/LICENSE)

This repository contains the reference javascript client for InfluxDB 2.0.

## Disclaimer

This library is a work in progress and should not be considered production ready yet.

## ToDos

- this documentation
- all APIs (generated)
- implement transport for both node and browser, fetch API?
- serialization of query results
- monorepo with yarn, separate examples
- browser client

## Usage

See [Examples](./examples)

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
