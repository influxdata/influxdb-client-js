/**
 * Allows to cancel a running execution.
 */
export interface Cancellable {
  /**
   * Cancels execution.
   */
  cancel(): void
  isCancelled(): boolean
}
