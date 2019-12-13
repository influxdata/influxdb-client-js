/**
 * Allows to cancel processing.
 */
export default interface Cancellable {
  /**
   * Attempt to cancel execution of this query.
   */
  cancel(): void
  /**
   * Is communication canceled.
   */
  isCancelled(): boolean
}
