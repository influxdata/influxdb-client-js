/* This file contains InfluxDB configuration for the browser example. */

/** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
export const url = '/influx' //'http://localhost:8086',
/** InfluxDB authorization token */
export const token = 'my-token'
/** InfluxDB organization */
export const org = 'my-org'
/** InfluxDB bucket used for onboarding and write requests. */
export const bucket = 'my-bucket'

/** The following properties are used ONLY in the onboarding example */
/** InfluxDB user  */
export const username = 'my-user'
/** InfluxDB password  */
export const password = 'my-password'
