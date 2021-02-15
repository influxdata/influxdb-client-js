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
export const consoleLogger: Logger = {
  error(message, error) {
    // eslint-disable-next-line no-console
    console.error('ERROR: ' + message, error ? error : '')
  },
  warn(message, error) {
    // eslint-disable-next-line no-console
    console.warn('WARN: ' + message, error ? error : '')
  },
}
let provider: Logger = consoleLogger

export const Logger: Logger = {
  error(message, error) {
    provider.error(message, error)
  },
  warn(message, error) {
    provider.warn(message, error)
  },
}

/**
 * Sets custom logger.
 * @param logger - logger to use
 * @returns previous logger
 */
export function setLogger(logger: Logger): Logger {
  const previous = provider
  provider = logger
  return previous
}
