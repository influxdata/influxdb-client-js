import Cancellable from '../util/Cancellable'
import FluxTableMetaData from './FluxTableMetaData'

/**
 * Observes the results of the flux query.
 */
export default interface FluxResultObserver<T> {
  /**
   * Informs about table metadata of next rows.
   */
  tableMetaData(tableMeta: FluxTableMetaData): void
  /**
   * Inform about a next record in a table.
   */
  nextRow(row: T): void
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
