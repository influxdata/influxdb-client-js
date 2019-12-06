/**
 * Point defines the values that will be written to the database.
 * <a href="http://bit.ly/influxdata-point">See Go Implementation</a>.
 */
export default class Point {
  private name: string
  private tags: {[key: string]: string} = {}
  private fields: {[key: string]: string} = {}
  private time: string

  /**
   * Create a new Point with specified a measurement name.
   *
   * @param measurementName the measurement name
   * @return new instance of {@link Point}
   */
  constructor(measurementName?: string) {
    if (measurementName) this.name = measurementName
  }

  /**
   * Setups point's measurement.
   *
   * @param name the measurement name
   * @return new instance of {@link Point}
   */
  public setMeasurement(name: string): Point {
    this.name = name
    return this
  }

  /**
   * Adds a tag.
   *
   * @param name  tag name
   * @param value tag value
   * @return this
   */
  public addTag(name: string, value: string): Point {
    this.tags[name] = value
    return this
  }

  /**
   * Adds a boolean field.
   *
   * @param field field name
   * @param value field value
   * @return this
   */
  public addBooleanField(name: string, value: boolean | any): Point {
    this.fields[name] = value ? 'T' : 'F'
    return this
  }

  /**
   * Adds an integer field.
   *
   * @param name field name
   * @param value field value
   * @return this
   */
  public addIntegerField(name: string, value: number | any): Point {
    if (typeof value !== 'number') {
      value = String(value)
      if (isNaN((value = parseInt(value)))) {
        throw new Error(
          `Expected integer value for field ${name}, but got '${value}'!`
        )
      }
    }
    // count with conversion to number
    this.fields[name] = `${Math.floor(value as number)}i`
    return this
  }
  // TODO addNumberField
  // TODO addStringField
  // TODO set time field
  // TODO define toLineProtocol and toString
  public toLineProtocol(/* optional PointSettings */): string {
    // TODO real implementation
    return `${this.name},${this.tags} ${this.fields} ${this.time}`
  }
}
