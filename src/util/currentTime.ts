import {WritePrecision} from '../options'

declare let process: any
const zeroPadding = '000000000'
let useHrTime = false

export function useProcessHrtime(use: boolean): boolean {
  return (useHrTime = use && process && typeof process.hrtime === 'function')
}
useProcessHrtime(true) // preffer node

function nanos(): string {
  if (useHrTime) {
    const hrTime = process.hrtime() as [number, number]
    const nanos = String(hrTime[1] % 1000000)
    return String(Date.now()) + zeroPadding.substr(0, 6 - nanos.length) + nanos
  } else {
    return String(Date.now()) + zeroPadding.substr(0, 6)
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

export const currentTimes = Object.freeze({
  [String(WritePrecision.s)]: seconds,
  [String(WritePrecision.ms)]: millis,
  [String(WritePrecision.us)]: micros,
  [String(WritePrecision.ns)]: nanos,
  seconds,
  millis,
  micros,
  nanos,
})
