import {Cancellable} from '../results/Cancellable'
import {FluxTableMetaData} from './FluxTableMetaData'

/**
 * Observes results of a flux query.
 */
export interface FluxResultObserver<T> {
  /**
   * Inform about a next record in a table.
   * @param row - flux result
   * @param tableMeta - actual table metata for the row supplied
   * @returns when `false` value is returned and {@link FluxResultObserver.useResume} is defined,
   * future calls to `next` are paused until resume is called.
   */
  next(row: T, tableMeta: FluxTableMetaData): void | boolean
  /**
   * Signalizes processing error.
   */
  error(error: Error): void
  /**
   * Signalizes completition.
   */
  complete(): void
  /**
   * Setups cancellable that can abort flux result processing.
   */
  useCancellable?: (cancellable: Cancellable) => void

  /**
   * Setups a callback that resumes reading of next data, it is called whenever
   * {@link FluxResultObserver.next} returns `false`.
   *
   * @param resume - a function that will resume reading of next data when called
   */
  useResume?: (resume: () => void) => void
}
