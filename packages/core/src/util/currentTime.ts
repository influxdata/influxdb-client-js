import {WritePrecision} from '../options'

declare let process: any
const zeroPadding = '000000000'
let useHrTime = false

export function useProcessHrtime(use: boolean): boolean {
  /* istanbul ignore else */
  if (!process.env.ROLLUP_BROWSER) {
    return (useHrTime = use && process && typeof process.hrtime === 'function')
  } else {
    return false
  }
}
useProcessHrtime(true) // preffer node

let startHrMillis: number | undefined = undefined
let startHrTime: [number, number] | undefined = undefined
let lastMillis = Date.now()
let stepsInMillis = 0
function nanos(): string {
  if (!process.env.ROLLUP_BROWSER && useHrTime) {
    const hrTime = process.hrtime() as [number, number]
    let millis = Date.now()
    if (!startHrTime) {
      startHrTime = hrTime
      startHrMillis = millis
    } else {
      hrTime[0] = hrTime[0] - startHrTime[0]
      hrTime[1] = hrTime[1] - startHrTime[1]
      // istanbul ignore next "cannot mock system clock, manually reviewed"
      if (hrTime[1] < 0) {
        hrTime[0] -= 1
        hrTime[1] += 1000_000_000
      }
      millis =
        (startHrMillis as number) +
        hrTime[0] * 1000 +
        Math.floor(hrTime[1] / 1000_000)
    }
    const nanos = String(hrTime[1] % 1000_000)
    return String(millis) + zeroPadding.substr(0, 6 - nanos.length) + nanos
  } else {
    const millis = Date.now()
    if (millis !== lastMillis) {
      lastMillis = millis
      stepsInMillis = 0
    } else {
      stepsInMillis++
    }
    const nanos = String(stepsInMillis)
    return String(millis) + zeroPadding.substr(0, 6 - nanos.length) + nanos
  }
}

function micros(): string {
  if (!process.env.ROLLUP_BROWSER && useHrTime) {
    const hrTime = process.hrtime() as [number, number]
    const micros = String(Math.trunc(hrTime[1] / 1000) % 1000)
    return (
      String(Date.now()) + zeroPadding.substr(0, 3 - micros.length) + micros
    )
  } else {
    return String(Date.now()) + zeroPadding.substr(0, 3)
  }
}
function millis(): string {
  return String(Date.now())
}
function seconds(): string {
  return String(Math.floor(Date.now() / 1000))
}

/**
 * Exposes functions that creates strings that represent a timestamp that
 * can be used in the line protocol. Micro and nano timestamps are emulated
 * depending on the js platform in use.
 */
export const currentTime = Object.freeze({
  [String(WritePrecision.s)]: seconds,
  [String(WritePrecision.ms)]: millis,
  [String(WritePrecision.us)]: micros,
  [String(WritePrecision.ns)]: nanos,
  seconds,
  millis,
  micros,
  nanos,
})

export const dateToProtocolTimestamp = {
  [String(WritePrecision.s)]: (d: Date): string =>
    `${Math.floor(d.getTime() / 1000)}`,
  [String(WritePrecision.ms)]: (d: Date): string => `${d.getTime()}`,
  [String(WritePrecision.us)]: (d: Date): string => `${d.getTime()}000`,
  [String(WritePrecision.ns)]: (d: Date): string => `${d.getTime()}000000`,
}
