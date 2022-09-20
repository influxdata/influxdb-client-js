# influxdb-client-apis

Contains generated client APIs for InfluxDB v2.1. See https://github.com/influxdata/influxdb-client-js to know more.

## Build

```bash
$ yarn build
```

## Re-generate APIs code

```
yarn regenerate
```

It performs the following steps:

- fetch latest versions of openapi files
- re-generate src/generated/types.ts and resources/operations.json using [oats](https://github.com/influxdata/oats)
- generate src/generated APIs from resources/operations.json
- validates the generated output

Create a new git branch with the regenerated code and submit a new pull request to review the changes.
