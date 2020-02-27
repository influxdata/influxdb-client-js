/**
 * Allows to cancel a running query.
 */
export default interface Cancellable {
  /**
   * Attempt to cancel execution.
   */
  cancel(): void
  isCancelled(): boolean
}
