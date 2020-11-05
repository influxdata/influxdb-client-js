import {expect} from 'chai'
import {csvToTable, csvToFromFluxResult} from '../../src'
// @influxdata/influxdb-client uses node transport in tests (tests run in node), therefore nock is used to mock HTTP
import {newTable} from './newTable'

describe('csvToTable', () => {
  it('can parse a Flux CSV with mismatched schemas', () => {
    const CSV = `#group,false,false,true,true,false,true,true,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string,string
#default,_result,,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,cpu,host
,,0,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:33Z,10,usage_guest,cpu,cpu-total,oox4k.local
,,1,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:43Z,20,usage_guest,cpu,cpu-total,oox4k.local

#group,false,false,true,true,false,true,true,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,string,string,string,string,string
#default,_result,,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,cpu,host
,,2,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:33Z,thirty,usage_guest,cpu,cpu0,oox4k.local

#group,false,false,true,true,false,true,true,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,string,string,string,string,string
#default,_result,,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,cpu,host
,,3,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:43Z,fourty,usage_guest,cpu,cpu0,oox4k.local`

    const table = csvToTable(CSV, newTable)

    expect(table.getColumn('result', 'string')).deep.equals([
      '_result',
      '_result',
      '_result',
      '_result',
    ])

    expect(table.getColumn('_start', 'time')).deep.equals([
      1549064312524,
      1549064312524,
      1549064312524,
      1549064312524,
    ])

    expect(table.getColumn('_stop', 'time')).deep.equals([
      1549064342524,
      1549064342524,
      1549064342524,
      1549064342524,
    ])

    expect(table.getColumn('_time', 'time')).deep.equals([
      1549064313000,
      1549064323000,
      1549064313000,
      1549064323000,
    ])

    expect(table.getColumn('_value (number)', 'number')).deep.equals([
      10,
      20,
      undefined,
      undefined,
    ])

    expect(table.getColumn('_value (string)', 'string')).deep.equals([
      undefined,
      undefined,
      'thirty',
      'fourty',
    ])

    expect(table.getColumn('_field', 'string')).deep.equals([
      'usage_guest',
      'usage_guest',
      'usage_guest',
      'usage_guest',
    ])

    expect(table.getColumn('_measurement', 'string')).deep.equals([
      'cpu',
      'cpu',
      'cpu',
      'cpu',
    ])

    expect(table.getColumn('cpu', 'string')).deep.equals([
      'cpu-total',
      'cpu-total',
      'cpu0',
      'cpu0',
    ])

    expect(table.getColumn('host', 'string')).deep.equals([
      'oox4k.local',
      'oox4k.local',
      'oox4k.local',
      'oox4k.local',
    ])

    expect(table.getColumn('table', 'number')).deep.equals([0, 1, 2, 3])

    expect(table.getColumnName('_value (number)')).deep.equals('_value')

    expect(table.getColumnName('_value (string)')).deep.equals('_value')
  })

  it('uses the default annotation to fill in empty values', () => {
    const CSV = `#group,false,false,true,true,true,true,false
#datatype,string,unsignedLong,string,string,boolean,long,dateTime:RFC3339
#default,_result,,,cpu,false,6,1970-01-01T00:00:00.001000Z
,result,table,a,b,c,d,time
,,1,usage_guest,,true,,1970-01-01T00:00:00.002000Z
,,1,usage_guest,,,,`

    const actual = csvToTable(CSV, newTable)

    expect(actual.getColumn('result')).deep.equals(['_result', '_result'])
    expect(actual.getColumn('a')).deep.equals(['usage_guest', 'usage_guest'])
    expect(actual.getColumn('b')).deep.equals(['cpu', 'cpu'])
    expect(actual.getColumn('c')).deep.equals([true, false])
    expect(actual.getColumn('d')).deep.equals([6, 6])
    expect(actual.getColumn('time')).deep.equals([2, 1])
  })

  it('parses empty numeric values as null', () => {
    const CSV = `#group,false,false,true,true,false,true,true,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string,string
#default,_result,,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,cpu,host
,,0,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:33Z,10,usage_guest,cpu,cpu-total,oox4k.local
,,1,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:43Z,,usage_guest,cpu,cpu-total,oox4k.local`

    const table = csvToTable(CSV, newTable)

    expect(table.getColumn('_value')).deep.equals([10, null])
  })

  it('handles newlines inside string values', () => {
    const CSV = `#group,false,false,false,false
#datatype,string,long,string,long
#default,_result,,,
,result,table,message,value
,,0,howdy,5
,,0,"hello

there",5
,,0,hi,6

#group,false,false,false,false
#datatype,string,long,string,long
#default,_result,,,
,result,table,message,value
,,1,howdy,5
,,1,"hello

there",5
,,1,hi,6`

    const table = csvToTable(CSV, newTable)

    expect(table.getColumn('value')).deep.equals([5, 5, 6, 5, 5, 6])

    expect(table.getColumn('message')).deep.equals([
      'howdy',
      'hello\n\nthere',
      'hi',
      'howdy',
      'hello\n\nthere',
      'hi',
    ])
  })
  describe('tableOptions', () => {
    ;[[1, 1]].forEach(([length, wants]) => {
      it(`uses default maxTableLength ${length}`, () => {
        const CSV = `#group,false
#datatype,long
#default,
,result
,1`
        const actual = csvToTable(CSV, newTable, {
          maxTableLength: length,
        })

        expect(actual.getColumn('result')?.length).deep.equals(wants)
      })
    })
    ;[
      [0, undefined],
      [1, 1],
      [undefined, 3 /* because the default is higher */],
    ].forEach(([length, wants]) => {
      it(`uses custom maxTableLength ${length}`, () => {
        const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
        const actual = csvToTable(CSV, newTable, {
          maxTableLength: length,
        })

        expect(actual.getColumn('result')?.length).deep.equals(wants)
      })
    })
    it(`uses custom accept filter`, () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      const actual = csvToTable(CSV, newTable, {
        accept: (row: string[]) => row[0] === '2',
        maxTableLength: 2,
      })

      expect(actual.getColumn('result')).deep.equals([2])
    })
    it(`uses custom accept filters`, () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      const actual = csvToTable(CSV, newTable, {
        accept: [
          (row: string[]): boolean => Number(row[0]) < 3,
          (row: string[]): boolean => row[0] !== '1',
        ],
      })

      expect(actual.getColumn('result')).deep.equals([2])
    })
    it(`uses custom accept filters and maxTableLength`, () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      const actual = csvToTable(CSV, newTable, {
        maxTableLength: 1,
        accept: (row: string[]) => Number(row[0]) > 1,
      })

      expect(actual.getColumn('result')).deep.equals([2])
    })
    it(`uses custom columns`, () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      const actual = csvToTable(CSV, newTable, {
        columns: ['a'],
      })

      expect(actual.getColumn('result')).is.null
    })
  })
})

describe('csvToFromFluxResult', () => {
  it('returns a group key union', () => {
    const CSV = `#group,true,false,false,true
#datatype,string,string,string,string
#default,,,,
,a,b,c,d
,1,2,3,4

#group,false,false,true,false
#datatype,string,string,string,string
#default,,,,
,a,b,c,d
,1,2,3,4`

    const {fluxGroupKeyUnion} = csvToFromFluxResult(CSV, newTable)
    expect(fluxGroupKeyUnion).deep.equals(['a', 'c', 'd'])
  })
})
