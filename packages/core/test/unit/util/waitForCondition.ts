/**
 * Wait for the supplied `condition` to become truethy
 * for at most `timeout` milliseconds. The `condition`
 * every `step` milliseconds.
 * @param condition - condition to validate
 * @param timeout - maximum wait time
 * @param step - interval to validate the condition
 */
export async function waitForCondition(
  condition: () => any,
  message = 'timeouted',
  timeout = 100,
  step = 5
): Promise<void> {
  for (;;) {
    await new Promise((resolve) => setTimeout(resolve, step))
    timeout -= step
    if (timeout <= 0) {
      break
    }
    if (condition()) return
  }
  // eslint-disable-next-line no-console
  console.error(`WARN:waitForCondition: ${message}`)
}
