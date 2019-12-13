import FluxTableColumn from '../../../src/query/FluxTableColumn'
import {FluxTableMetaData} from '../../../src/query/FluxTableMetaData'
import {expect} from 'chai'

describe('FluxTableMetaData', () => {
  it('returns columns by name or id', () => {
    const columns: FluxTableColumn[] = [
      FluxTableColumn.from({
        label: 'a',
        defaultValue: 'def',
        type: 'long',
        group: false,
      }),
      FluxTableColumn.from({
        label: 'b',
      }),
    ]
    const subject = new FluxTableMetaData(columns)
    expect(subject.column('a')).to.equals(columns[0])
    expect(subject.column('b')).to.equals(columns[1])
    expect(subject.columns[0]).to.equals(columns[0])
    expect(subject.columns[1]).to.equals(columns[1])
    expect(() => subject.column('c')).to.throw()
  })
  it('creates objects', () => {
    const columns: FluxTableColumn[] = [
      FluxTableColumn.from({
        label: 'a',
        defaultValue: 'def',
        type: 'long',
        group: false,
      }),
      FluxTableColumn.from({
        label: 'b',
      }),
    ]
    const subject = new FluxTableMetaData(columns)
    expect(subject.toObject(['', ''])).to.deep.equal({a: 'def', b: ''})
    expect(subject.toObject(['x', 'y'])).to.deep.equal({a: 'x', b: 'y'})
    expect(subject.toObject(['x', 'y', 'z'])).to.deep.equal({a: 'x', b: 'y'})
    expect(subject.toObject(['x'])).to.deep.equal({a: 'x'})
  })
})
