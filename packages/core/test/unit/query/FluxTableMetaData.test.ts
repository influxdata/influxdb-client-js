import {
  FluxTableColumn,
  FluxTableMetaData,
  ColumnType,
  typeSerializers,
} from '../../../src'
import {expect} from 'chai'

describe('FluxTableMetaData', () => {
  it('returns columns by name or id', () => {
    const columns: FluxTableColumn[] = [
      FluxTableColumn.from({
        label: 'a',
        defaultValue: 'def',
        dataType: 'long',
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
        dataType: 'long',
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
  const serializationTable: Array<[ColumnType | undefined, string, any]> = [
    ['boolean', 'false', false],
    ['boolean', 'true', true],
    ['unsignedLong', '1', '1'],
    ['long', '1', '1'],
    ['double', '1', 1],
    ['string', '1', '1'],
    ['base64Binary', '1', '1'],
    ['dateTime', '1', '1'],
    ['duration', '1', '1'],
    [undefined, '1', '1'],
  ]
  for (const entry of serializationTable) {
    it(`serializes ${entry[0]}/${entry[1]}`, () => {
      const columns: FluxTableColumn[] = [
        FluxTableColumn.from({
          label: 'a',
          dataType: entry[0],
        }),
      ]
      const subject = new FluxTableMetaData(columns)
      expect(subject.toObject([entry[1]])).to.deep.equal({a: entry[2]})
    })
  }
  describe('custom serialization', () => {
    const type = 'long'
    let original: (x: string) => any
    beforeEach(() => {
      original = typeSerializers[type]
      typeSerializers[type] = (_x: string): any => []
    })
    afterEach(() => {
      typeSerializers[type] = original
    })
    it('cutomized srialization', () => {
      const columns: FluxTableColumn[] = [
        FluxTableColumn.from({
          label: 'a',
          dataType: 'long',
          group: false,
        }),
      ]
      const subject = new FluxTableMetaData(columns)
      expect(subject.toObject([''])).to.deep.equal({a: []})
    })
  })
})
