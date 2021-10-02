import {convertTimeToNanos} from './util/currentTime'
import {escape} from './util/escape'

/**
 * Settings that control the way of how a {@link Point} is serialized
 * to a protocol line.
 */
export interface PointSettings {
  /** default tags to add to every point */
  defaultTags?: {[key: string]: string}
  /** convertTime serializes Point's timestamp to a line protocol value */
  convertTime?: (
    value: string | number | Date | undefined
  ) => string | undefined
}

/**
 * Point defines values of a single measurement.
 */
export class Point {
  private name: string
  private tags: {[key: string]: string} = {}
  /** escaped field values */
  public fields: {[key: string]: string} = {}
  private time: string | number | Date | undefined

  /**
   * Create a new Point with specified a measurement name.
   *
   * @param measurementName - the measurement name
   */
  constructor(measurementName?: string) {
    if (measurementName) this.name = measurementName
  }

  /**
   * Sets point's measurement.
   *
   * @param name - measurement name
   * @returns this
   */
  public measurement(name: string): Point {
    this.name = name
    return this
  }

  /**
   * Adds a tag. The caller has to ensure that both name and value are not empty
   * and do not end with backslash.
   *
   * @param name - tag name
   * @param value - tag value
   * @returns this
   */
  public tag(name: string, value: string): Point {
    this.tags[name] = value
    return this
  }

  /**
   * Adds a boolean field.
   *
   * @param field - field name
   * @param value - field value
   * @returns this
   */
  public booleanField(name: string, value: boolean | any): Point {
    this.fields[name] = value ? 'T' : 'F'
    return this
  }

  /**
   * Adds an integer field.
   *
   * @param name - field name
   * @param value - field value
   * @returns this
   */
  public intField(name: string, value: number | any): Point {
    let val: number
    if (typeof value === 'number') {
      val = value
    } else {
      val = parseInt(String(value))
    }
    if (isNaN(val) || val <= -9223372036854776e3 || val >= 9223372036854776e3) {
      throw new Error(
        `integer value for field '${name}' out of range: '${value}'!`
      )
    }
    this.fields[name] = `${Math.floor(val)}i`
    return this
  }

  /**
   * Adds an unsigned integer field.
   *
   * @param name - field name
   * @param value - field value
   * @returns this
   */
  public uintField(name: string, value: number | any): Point {
    if (typeof value === 'number') {
      if (value < 0 || value > Number.MAX_SAFE_INTEGER) {
        throw new Error(`uint value for field '${name}' out of range: ${value}`)
      }
      this.fields[name] = `${Math.floor(value as number)}u`
    } else {
      const strVal = String(value)
      for (let i = 0; i < strVal.length; i++) {
        const code = strVal.charCodeAt(i)
        if (code < 48 || code > 57) {
          throw new Error(
            `uint value has an unsupported character at pos ${i}: ${value}`
          )
        }
      }
      if (
        strVal.length > 20 ||
        (strVal.length === 20 &&
          strVal.localeCompare('18446744073709551615') > 0)
      ) {
        throw new Error(
          `uint value for field '${name}' out of range: ${strVal}`
        )
      }
      this.fields[name] = `${strVal}u`
    }
    return this
  }

  /**
   * Adds a number field.
   *
   * @param name - field name
   * @param value - field value
   * @returns this
   */
  public floatField(name: string, value: number | any): Point {
    if (typeof value !== 'number') {
      let val: number
      if (isNaN((val = parseFloat(value)))) {
        throw new Error(
          `Expected float value for field ${name}, but got '${value}'!`
        )
      }
      value = val
    }
    this.fields[name] = String(value)
    return this
  }

  /**
   * Adds a string field.
   *
   * @param name - field name
   * @param value - field value
   * @returns this
   */
  public stringField(name: string, value: string | any): Point {
    if (value !== null && value !== undefined) {
      if (typeof value !== 'string') value = String(value)
      this.fields[name] = escape.quoted(value)
    }
    return this
  }

  /**
   * Sets point timestamp. Timestamp can be specified as a Date (preferred), number, string
   * or an undefined value. An undefined value instructs to assign a local timestamp using
   * the client's clock. An empty string can be used to let the server assign
   * the timestamp. A number value represents time as a count of time units since epoch, the
   * exact time unit then depends on the {@link InfluxDB.getWriteApi | precision} of the API
   * that writes the point.
   *
   * Beware that the current time in nanoseconds can't precisely fit into a JS number,
   * which can hold at most 2^53 integer number. Nanosecond precision numbers are thus supplied as
   * a (base-10) string. An application can also use ES2020 BigInt to represent nanoseconds,
   * BigInt's `toString()` returns the required high-precision string.
   *
   * Note that InfluxDB requires the timestamp to fit into int64 data type.
   *
   * @param value - point time
   * @returns this
   */
  public timestamp(value: Date | number | string | undefined): Point {
    this.time = value
    return this
  }

  /**
   * Creates an InfluxDB protocol line out of this instance.
   * @param settings - settings control serialization of a point timestamp and can also add default tags,
   * nanosecond timestamp precision is used when no `settings` or no `settings.convertTime` is supplied.
   * @returns an InfluxDB protocol line out of this instance
   */
  public toLineProtocol(settings?: Partial<PointSettings>): string | undefined {
    if (!this.name) return undefined
    let fieldsLine = ''
    Object.keys(this.fields)
      .sort()
      .forEach(x => {
        if (x) {
          const val = this.fields[x]
          if (fieldsLine.length > 0) fieldsLine += ','
          fieldsLine += `${escape.tag(x)}=${val}`
        }
      })
    if (fieldsLine.length === 0) return undefined // no fields present
    let tagsLine = ''
    const tags =
      settings && settings.defaultTags
        ? {...settings.defaultTags, ...this.tags}
        : this.tags
    Object.keys(tags)
      .sort()
      .forEach(x => {
        if (x) {
          const val = tags[x]
          if (val) {
            tagsLine += ','
            tagsLine += `${escape.tag(x)}=${escape.tag(val)}`
          }
        }
      })
    let time = this.time
    if (settings && settings.convertTime) {
      time = settings.convertTime(time)
    } else {
      time = convertTimeToNanos(time)
    }

    return `${escape.measurement(this.name)}${tagsLine} ${fieldsLine}${
      time !== undefined ? ' ' + time : ''
    }`
  }

  toString(): string {
    const line = this.toLineProtocol(undefined)
    return line ? line : `invalid point: ${JSON.stringify(this, undefined)}`
  }
}
