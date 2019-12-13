import {FluxTableColumn} from './FluxTableColumn'

/**
 * Represents metadata of a flux <a href="http://bit.ly/flux-spec#table">table</a>.
 */
export default class FluxTableMetaData {
  columns: FluxTableColumn[]
  constructor(columns: FluxTableColumn[]) {
    this.columns = columns
  }
}
