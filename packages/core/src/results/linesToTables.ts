import {CommunicationObserver} from './CommunicationObserver'
import {Cancellable} from './Cancellable'
import {LineSplitter} from './LineSplitter'
import {FluxResultObserver} from './FluxResultObserver'
import {
  FluxTableColumn,
  ColumnType,
  newFluxTableColumn,
} from './FluxTableColumn'
import {FluxTableMetaData, createFluxTableMetaData} from './FluxTableMetaData'

/**
 * linesToTables creates a transformationthat accepts (flux) annotated CSV lines
 * and emits rows together with table metadata.
 */
export function linesToTables(
  consumer: FluxResultObserver<string[]>
): CommunicationObserver<string> {
  const splitter = new LineSplitter().withReuse()
  let columns: FluxTableColumn[] | undefined
  let expectMeta = true
  let firstColumnIndex = 0
  let lastMeta: FluxTableMetaData
  return {
    error(error: Error): void {
      consumer.error(error)
    },
    next(line: string): void {
      if (line === '') {
        expectMeta = true
        columns = undefined
      } else {
        const values = splitter.splitLine(line)
        const size = splitter.lastSplitLength
        if (expectMeta) {
          // create columns
          if (!columns) {
            columns = new Array(size)
            for (let i = 0; i < size; i++) {
              columns[i] = newFluxTableColumn()
            }
          }
          if (!values[0].startsWith('#')) {
            // fill in column names
            if (values[0] === '') {
              firstColumnIndex = 1
              columns = columns.slice(1)
            } else {
              firstColumnIndex = 0
            }
            for (let i = firstColumnIndex; i < size; i++) {
              columns[i - firstColumnIndex].label = values[i]
            }
            lastMeta = createFluxTableMetaData(columns)
            expectMeta = false
          } else if (values[0] === '#datatype') {
            for (let i = 1; i < size; i++) {
              columns[i].dataType = values[i] as ColumnType
            }
          } else if (values[0] === '#default') {
            for (let i = 1; i < size; i++) {
              columns[i].defaultValue = values[i]
            }
          } else if (values[0] === '#group') {
            for (let i = 1; i < size; i++) {
              columns[i].group = values[i][0] === 't'
            }
          }
        } else {
          consumer.next(values.slice(firstColumnIndex, size), lastMeta)
        }
      }
    },
    complete(): void {
      consumer.complete()
    },
    useCancellable(cancellable: Cancellable): void {
      if (consumer.useCancellable) consumer.useCancellable(cancellable)
    },
  }
}
