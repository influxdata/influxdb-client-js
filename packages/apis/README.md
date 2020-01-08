# influxdb-client-apis

Contains generated client APIs for InfluxDB v2.0

## Re-generate APIs

- update local swagger.yml to the latest version
  - `wget -O resources/swagger.yml https://raw.githubusercontent.com/influxdata/influxdb/master/http/swagger.yml`
- generate types.ts and operations.json
  - `rm -rf build`
  - `mkdir -p build/generated && oats -i 'types' --storeOperations resources/operations.json resources/swagger.yml > build/generated/types.ts`
- generate API from resources/operations.json
  - `yarn ts-node resources/generateApi.ts`
  - `yarn prettier --write build/generated/*.ts`
  - `rm -rf src/generated && cp -r build/generated src`
- build
  - `yarn build`

## Usage

See [Examples](../examples)

## Build

```bash
$ yarn build
```
