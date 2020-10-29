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

#### Note: Use this client library with InfluxDB 2.x and InfluxDB 1.8+. For connecting to InfluxDB 1.7 or earlier instances, see the [node-influx](https://github.com/node-influx/node-influx) client library.

## Features

InfluxDB 2.0 client consists of two packages

- @influxdata/influxdb-client
  - Querying data using the Flux language
  - Writing data
    - batched in chunks on background
    - automatic retries on write failures
- @influxdata/influxdb-client-apis
  - provides all other InfluxDB 2.0 APIs for managing
    - sources, buckets
    - tasks
    - authorizations
    - health check
    - ...
  - built on top of @influxdata/influxdb-client

## Installation

To write or query InfluxDB, add `@influxdata/influxdb-client` dependency to your project using your favourite package manager.

```
$ npm install --save @influxdata/influxdb-client
$ yarn add @influxdata/influxdb-client
$ pnpm add @influxdata/influxdb-client
```

[@influxdata/influxdb-client](./packages/core/README.md) module primarily works in Node.js (main CJS and module ESM), but a browser (browser UMD) distribution is also available therein. If you need only a browser distribution, use [@influxdata/influxdb-client-browser](./packages/core-browser/README.md) that targets browser environment (main UMD and module ESM).

To use InfluxDB management APIs in your project, add also `@influxdata/influxdb-client-apis` dependency to your project.

```
$ npm install --save @influxdata/influxdb-client-apis
$ yarn add @influxdata/influxdb-client-apis
$ pnpm add @influxdata/influxdb-client-apis
```

## Usage

The following examples help to start quickly with this client:

- @influxdata/influxdb-client
  - [write points](./examples/write.js)
  - [query data](./examples/query.ts)
- @influxdata/influxdb-client-apis
  - [setup / onboarding](./examples/onboarding.js)
  - [create bucket](./examples/createBucket.js)
  - [health](./examples/health.js)

There are also more advanced [examples](./examples/README.md) that show

- how to execute parameterized queries
- how to use this client with InfluxDB 1.8+
- how to use this client in the browser
- how to process InfluxDB query results with RX Observables
- how to customize the way of how measurement points are written to InfluxDB

The client API Reference Documentation is available online at https://influxdata.github.io/influxdb-client-js/ .

## Contributing

If you would like to contribute code you can do through GitHub by forking the repository and sending a pull request into the `master` branch.

Build Requirements:

- node v12.13.1 or higher
- yarn 1.9.4. or higher

Run tests:

```bash
$ yarn test
```

Check code coverage:

```bash
$ yarn coverage
```

Build distributions:

```bash
$ yarn build
```

## License

The InfluxDB 2.0 javascript client is released under the [MIT License](https://opensource.org/licenses/MIT).
