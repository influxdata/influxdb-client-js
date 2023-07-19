# influxdb-client-js

[![CircleCI](https://circleci.com/gh/influxdata/influxdb-client-js.svg?style=svg)](https://circleci.com/gh/influxdata/influxdb-client-js)
[![codecov](https://codecov.io/gh/influxdata/influxdb-client-js/branch/master/graph/badge.svg)](https://codecov.io/gh/influxdata/influxdb-client-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/influxdata/influxdb-client-js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/influxdata/influxdb-client-js/context:javascript)
[![License](https://img.shields.io/github/license/influxdata/influxdb-client-js.svg)](https://github.com/influxdata/influxdb-client-js/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@influxdata/influxdb-client)](https://www.npmjs.com/package/@influxdata/influxdb-client)
[![Slack Status](https://img.shields.io/badge/slack-join_chat-white.svg?logo=slack&style=social)](https://www.influxdata.com/slack)

This repository contains the JavaScript client library for use with InfluxDB 2.x and Flux. This client supports Node.js, browser, and Deno environments. InfluxDB 3.x users should instead use the lightweight [v3 client library](https://github.com/InfluxCommunity/influxdb3-js). InfluxDB 1.x users may want to use the [node-influx](https://github.com/node-influx/node-influx) client library.

For ease of migration and a consistent query and write experience, v2 users should consider using InfluxQL and the [node-influx](https://github.com/node-influx/node-influx) client library.

## Documentation

This section contains links to the client library documentation.

- [Product documentation](https://docs.influxdata.com/influxdb/latest/api-guide/client-libraries/nodejs/), [Getting Started](#usage)
- [Examples](examples#influxdb-client-examples)
- [API Reference](https://influxdata.github.io/influxdb-client-js/influxdb-client.html)
- [Changelog](CHANGELOG.md)

## Features

InfluxDB 2.x client consists of two main packages

- @influxdata/influxdb-client
  - Query data using the Flux language
  - Write data to InfluxDB
    - batch data in the background
    - retry automatically on failure
- @influxdata/influxdb-client-apis
  - Create/Modify/Delete/Manage
    - buckets
    - tasks
    - authorizations
    - sources
    - ... and other InfluxDB domain objects
  - Delete data from a bucket
  - Invoke a flux script
  - built on @influxdata/influxdb-client

## Installation

To write or query InfluxDB, add `@influxdata/influxdb-client` as a dependency to your project using your favorite package manager.

```
$ npm install --save @influxdata/influxdb-client
$ yarn add @influxdata/influxdb-client
$ pnpm add @influxdata/influxdb-client
```

If you target Node.js, use [@influxdata/influxdb-client](./packages/core/README.md).
It provides main (CJS), module (ESM), and browser (UMD) exports.

If you target browsers (including [Deno](https://deno.land/) and [Ionic](https://ionic.io/)), use [@influxdata/influxdb-client-browser](./packages/core-browser/README.md) in place of `@influxdata/influxdb-client`. It provides main (UMD) and module (ESM) exports.

To use InfluxDB management APIs in your project, also add `@influxdata/influxdb-client-apis` as a dependency to your project.

```
$ npm install --save @influxdata/influxdb-client-apis
$ yarn add @influxdata/influxdb-client-apis
$ pnpm add @influxdata/influxdb-client-apis
```

## Usage

Use the following examples to get started with the JavaScript client for InfluxDB:

- @influxdata/influxdb-client
  - [write points](./examples/write.mjs)
  - [query data](./examples/query.ts)
- @influxdata/influxdb-client-apis
  - [setup / onboarding](./examples/onboarding.mjs)
  - [create bucket](./examples/createBucket.mjs)

See [examples](./examples/README.md) for more advanced use case like the following:

- Execute parameterized queries.
- Delete bucket data.
- Use the client library with InfluxDB 1.8+.
- Use the client library in the browser or [Deno](./examples/query.deno.ts).
- Process InfluxDB query results with RX Observables.
- Customize the writing of measurement points to InfluxDB.
- [Reuse connections](https://github.com/influxdata/influxdb-client-js/issues/393#issuecomment-985272866) in communication with InfluxDB.

JavaScript client API Reference Documentation is available online at https://influxdata.github.io/influxdb-client-js/ .

## Contributing

To contribute code, fork the repository, apply changes and submit a pull request to the `master` branch.

Requirements:

- Node.js LTS version, v18 recommended
  ```bash
  node --version
  ```
- yarn 1.22.19 or higher
  ```bash
  yarn -v
  ```

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

The InfluxDB 2.x JavaScript client is released under the [MIT License](https://opensource.org/licenses/MIT).
