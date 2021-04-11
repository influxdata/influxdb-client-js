import {escape} from './util/escape'

/**
 * Settings that control the way of how a {@link Point} is serialized
 * to a protocol line.
 */
export interface PointSettings {
  defaultTags?: {[key: string]: string}
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
   * Adds a tag.
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
    if (typeof value !== 'number') {
      let val: number
      if (isNaN((val = parseInt(String(value))))) {
        throw new Error(
          `Expected integer value for field ${name}, but got '${value}'!`
        )
      }
      value = val
    }
    this.fields[name] = `${Math.floor(value as number)}i`
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
   * Sets point time. A string containing a base 10 encoded number or a JavaScript number value can be
   * used to carry an int64 value of a precision that depends on WriteApi configuration, nanoseconds by
   * default. An undefined value generates a local timestamp using the client's clock.
   * An empty string can be used to let the server assign the timestamp.
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
   * @param settings - settings define the exact representation of point time and can also add default tags
   * @returns an InfluxDB protocol line out of this instance
   */
  public toLineProtocol(settings?: PointSettings): string | undefined {
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
