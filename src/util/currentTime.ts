import {WritePrecision} from '../options'

declare let process: any
const zeroPadding = '000000000'
let useHrTime = false

export function useProcessHrtime(use: boolean): boolean {
  return (useHrTime = use && process && typeof process.hrtime === 'function')
}
useProcessHrtime(true) // preffer node

let lastMillis = Date.now()
let stepsInMillis = 0
function nanos(): string {
  if (useHrTime) {
    const hrTime = process.hrtime() as [number, number]
    const nanos = String(hrTime[1] % 1000000)
    return String(Date.now()) + zeroPadding.substr(0, 6 - nanos.length) + nanos
  } else {
    const millis = Date.now()
    if (millis !== lastMillis) {
      lastMillis = millis
      stepsInMillis = 0
    } else {
      stepsInMillis++
    }
    const nanos = String(stepsInMillis)
    return String(Date.now()) + zeroPadding.substr(0, 6 - nanos.length) + nanos
  }
}

function micros(): string {
  if (useHrTime) {
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
