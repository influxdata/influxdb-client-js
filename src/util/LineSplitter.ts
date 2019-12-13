const SEPARATOR = ','
const WRAPPER = '"'

/**
 * Optimized tokenizer of a single CSV line.
 */
export default class LineSplitter {
  /** returned value when reused  */
  reusedValues: string[]
  /** last length of elements in */
  lastSplitLength: number
  private _reuse = false

  /**
   * Reuse returned array between consecutive calls.
   */
  get reuse(): boolean {
    return this._reuse
  }
  set reuse(val: boolean) {
    if (val && !this.reusedValues) {
      this.reusedValues = new Array(10)
    }
    this._reuse = val
  }

  /**
   * Sets the reuse flag and returns this.
   * @param line
   */
  withReuse(): LineSplitter {
    this.reuse = true
    return this
  }

  /**
   * Splits the supplied line to elements that are separated by
   * comma with values possibly escaped within double quotes ("value")
   * @param line line
   * @return
   */
  splitLine(line: string | undefined | null): string[] {
    if (line === null || line === undefined) {
      this.lastSplitLength = 0
      return []
    }
    let quoteCount = 0
    let startIndex = 0
    const values = this._reuse ? this.reusedValues : []
    let count = 0
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (c === SEPARATOR) {
        if (quoteCount % 2 === 0) {
          const val = this.getValue(line, startIndex, i, quoteCount)
          if (this._reuse) {
            values[count++] = val
          } else {
            values.push(val)
          }
          startIndex = i + 1
          quoteCount = 0
        }
      } else if (c === WRAPPER) {
        quoteCount++
      }
    }
    const val = this.getValue(line, startIndex, line.length, quoteCount)
    if (this._reuse) {
      values[count] = val
      this.lastSplitLength = count + 1
    } else {
      values.push(val)
      this.lastSplitLength = values.length
    }

    return values
  }

  private getValue(
    line: string,
    start: number,
    end: number,
    quoteCount: number
  ): string {
    if (start === line.length) {
      return ''
    } else if (quoteCount === 0) {
      return line.substring(start, end)
    } else if (quoteCount === 2) {
      return line.substring(start + 1, end - 1)
    } else {
      // quoteCount >= 4
      return line.substring(start + 1, end - 1).replace(/""/gi, '"')
    }
  }
}
