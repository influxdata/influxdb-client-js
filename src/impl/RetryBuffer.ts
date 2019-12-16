/**
 * A time-based buffer of a maximum size that is used to retry writes agains influxDB.
 */

export class RetryBuffer {
  
  _buffer: Array<[String,number]> = [];
  add(String item, remainingAttempts: number){

  }
}
