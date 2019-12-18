/**
 * Logging interface.
 */
export interface Logger {
  error(message: string, err?: any): void
  warn(message: string, err?: any): void
}

/**
 * Logger that logs to console.out
 */
export const consoleLogger: Logger = Object.freeze({
  error(message, error) {
    console.error('ERROR: ' + message, error ? error : '')
  },
  warn(message, error) {
    console.warn('WARN: ' + message, error ? error : '')
  },
})
let provider: Logger = consoleLogger

const Logger: Logger = {
  error(message, error) {
    provider.error(message, error)
  },
  warn(message, error) {
    provider.warn(message, error)
  },
}

/**
 * Sets custom logger.
 * @param logger new logger
 * @return previous logger
 */
export function setLogger(logger: Logger): Logger {
  const previous = provider
  provider = logger
  return previous
}

export default Logger
