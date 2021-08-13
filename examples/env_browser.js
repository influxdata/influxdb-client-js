// eslint-disable-next-line no-undef
/** 
 * The following configuration is used in the browser examples
 * (index.html and giraffe.html).
 *
 * Replace the values with your own InfluxDB values.
 */
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  url: '/influx', //'http://localhost:8086'
  /** InfluxDB authorization token */
  token: 'my-token',
  /** Organization within InfluxDB  */
  org: 'my-org',
  /**InfluxDB bucket used in examples  */
  bucket: 'my-bucket',
  // ONLY onboarding example
  /**InfluxDB user  */
  username: 'my-user',
  /** InfluxDB password  */
  password: 'my-password',
}
