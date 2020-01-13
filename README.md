# influxdb-client-javascript

[![CircleCI](https://circleci.com/gh/bonitoo-io/influxdb-client-js.svg?style=svg)](https://circleci.com/gh/bonitoo-io/influxdb-client-js)
[![codecov](https://codecov.io/gh/bonitoo-io/influxdb-client-js/branch/master/graph/badge.svg)](https://codecov.io/gh/bonitoo-io/influxdb-client-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/github/license/bonitoo-io/influxdb-client-js.svg)](https://github.com/bonitoo-io/influxdb-client-js/blob/master/LICENSE)

This repository contains the reference javascript client for InfluxDB 2.0. Both node and browser environments are supported.

**Note: This library is for use with InfluxDB 2.x. For connecting to InfluxDB 1.x instances, see [node-influx](https://github.com/node-influx/node-influx).**

## Features

InfluxDB 2.0 client consist of two packages

- @bonitoo-io/influxdb-client
  - Querying data using the Flux language
  - Writing data
    - batched in chunks on background
    - automatic retries on write failures
- @bonitoo-io/influxdb-client-js-apis
  - provides all other InfluxDB 2.0 APIs for managing
    - sources, buckets
    - tasks
    - authorizations
    - health check
    - ...
  - built on top of @bonitoo-io/influxdb-client-js

## Installation

To use Write and Query API in your project:

```
$npm install --save @bonitoo-io/influxdb-client
```

or

```
$yarn add @bonitoo-io/influxdb-client
```

To use all other APIs in your project:

```
$npm install --save @bonitoo-io/influxdb-client-apis
```

or

```
$yarn add @bonitoo-io/influxdb-client-apis
```

## Usage

See [examples](./examples/README.md)

- @bonitoo-io/influxdb-client
  - [write points or lines](./examples/write.js)
  - [query data](./examples/query.ts)
- @bonitoo-io/influxdb-client-apis
  - [setup / onboarding](./examples/onboarding.js)
  - [health](./examples/health.js)

## Build Requirements

- node v12.13.1
- yarn 1.9.4. or higher

Run all unit tests:

```bash
$ yarn test:unit
```

Check code coverage of unit tests:

```bash
$ yarn coverage
```

## Contributing

If you would like to contribute code you can do through GitHub by forking the repository and sending a pull request into the `master` branch.

## License

The InfluxDB 2.0 javascript client is released under the [MIT License](https://opensource.org/licenses/MIT).
