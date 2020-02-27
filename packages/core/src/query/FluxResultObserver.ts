import Cancellable from '../util/Cancellable'
import FluxTableMetaData from './FluxTableMetaData'

/**
 * Observes results of a flux query.
 */
export default interface FluxResultObserver<T> {
  /**
   * Inform about a next record in a table.
   */
  next(row: T, tableMeta: FluxTableMetaData): void
  /**
   * Signalizes processing error.
   */
  error(error: Error): void
  /**
   * Signalizes completition.
   */
  complete(): void
  /**
   * Setups cancelllable that can abort flux result processing.
   */
  useCancellable?: (cancellable: Cancellable) => void
}
