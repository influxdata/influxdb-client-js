/*
Exports constants that are used by examples herein.
*/

/** InfluxDB v2 URL */
export const url = process.env['INFLUXDB_URL'] || 'http://localhost:9999'
/** InfluxDB authorization token */
export const token = process.env['INFLUXDB_TOKEN'] || 'my-token'

/** example organization within InfluxDB URL  */
export const org = 'my-org'
/**InfluxDB user  */
export const username = 'my-user'
/**InfluxDB password  */
export const password = 'my-password'
/**InfluxDB bucket used in examples  */
export const bucket = 'my-bucket'
