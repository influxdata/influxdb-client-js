interface Saga<T> {
  action: () => Promise<T>
  rollback: (result?: T) => Promise<void>
  result?: T
}

async function rollback<T>(index: number, sagas: Saga<T>[]) {
  for (let i = index; i >= 0; i--) {
    await sagas[i].rollback(sagas[i].result)
  }
}

async function saga<T>(sagas: Saga<T>[]): Promise<Array<T>> {
  for (let i = 0; i < sagas.length; i++) {
    try {
      const result = await sagas[i].action()
      sagas[i].result = result
    } catch (e) {
      console.error(e)
      await rollback<T>(i - 1, sagas)
      throw new Error(
        'Failed to complete 1 or more actions, successful actions rolled back'
      )
    }
  }

  return sagas.map(s => s.result).filter((r): r is T => !!r)
}

export default saga
