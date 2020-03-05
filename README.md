# influxdb-client-javascript

[![CircleCI](https://circleci.com/gh/influxdata/influxdb-client-js.svg?style=svg)](https://circleci.com/gh/influxdata/influxdb-client-js)
[![codecov](https://codecov.io/gh/influxdata/influxdb-client-js/branch/master/graph/badge.svg)](https://codecov.io/gh/influxdata/influxdb-client-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/github/license/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@influxdata/influxdb-client)](https://www.npmjs.com/package/@influxdata/influxdb-client)
[![GitHub issues](https://img.shields.io/github/issues-raw/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/pulls)
[![Slack Status](https://img.shields.io/badge/slack-join_chat-white.svg?logo=slack&style=social)](https://www.influxdata.com/slack)

This repository contains the reference javascript client for InfluxDB 2.0. Both node and browser environments are supported.

**Note: This library is for use with InfluxDB 2.x. For connecting to InfluxDB 1.x instances, see [node-influx](https://github.com/node-influx/node-influx).**

## Features

InfluxDB 2.0 client consists of two packages

- @influxdata/influxdb-client
  - Querying data using the Flux language
  - Writing data
    - batched in chunks on background
    - automatic retries on write failures
- @influxdata/influxdb-client-js-apis
  - provides all other InfluxDB 2.0 APIs for managing
    - sources, buckets
    - tasks
    - authorizations
    - health check
    - ...
  - built on top of @influxdata/influxdb-client-js

## Installation

To use write or query InfluxDB in your project:

```
$npm install --save @influxdata/influxdb-client
```

or

```
$yarn add @influxdata/influxdb-client
```

To use InfluxDB management APIs in your project:

```
$npm install --save @influxdata/influxdb-client-apis
```

or

```
$yarn add @influxdata/influxdb-client-apis
```

## Usage

See [examples](./examples/README.md)

- @influxdata/influxdb-client
  - [write points or lines](./examples/write.js)
  - [query data](./examples/query.ts)
- @influxdata/influxdb-client-apis
  - [setup / onboarding](./examples/onboarding.js)
  - [health](./examples/health.js)

## Build Requirements

- node v12.13.1 or higher (older versions will work as well)
- yarn 1.9.4. or higher (older versions will work as well)

Run all unit tests:

```bash
$ yarn test:unit
```

Check code coverage of unit tests:

```bash
$ yarn coverage
```

## Development

### Releasing a new version

Ensure that:

- You have administrator access to this repo on GitHub
- You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
- You are on `master` and the working tree is clean

Then run the publish script in the root of the repo:

```
./publish.sh
```

## Contributing

If you would like to contribute code you can do through GitHub by forking the repository and sending a pull request into the `master` branch.

## License

The InfluxDB 2.0 javascript client is released under the [MIT License](https://opensource.org/licenses/MIT).
