export interface Logger {
  error(message: string, err: any): void
  warn(message: string, err: any): void
}

export const consoleLogger: Logger = Object.freeze({
  error(message, error) {
    console.error(message, error)
  },
  warn(message, error) {
    console.warn(message, error)
  },
})
let provider: Logger = consoleLogger

const instance: Logger = {
  error(message, error) {
    provider.error(message, error)
  },
  warn(message, error) {
    provider.warn(message, error)
  },
}

export function setLogger(logger: Logger): Logger {
  const previous = provider
  provider = logger
  return previous
}

export default instance
