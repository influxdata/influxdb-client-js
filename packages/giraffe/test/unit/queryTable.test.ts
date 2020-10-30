import {expect} from 'chai'
import {queryTable, DEFAULT_TABLE_OPTIONS, queryFromFluxResult} from '../../src'
// @influxdata/influxdb-client uses node transport in tests (tests run in node), therefore nock is used to mock HTTP
import nock from 'nock'
import {Readable} from 'stream'
import {InfluxDB} from '@influxdata/influxdb-client'
import {newTable} from './newTable'
const url = 'http://test'
const queryApi = new InfluxDB({url}).getQueryApi('whatever')

describe('queryTable', () => {
  beforeEach(() => {
    nock.disableNetConnect()
  })
  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })
  it('can parse a Flux CSV with mismatched schemas', async () => {
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

    nock(url)
      .post(/.*/)
      .reply(200, CSV)
    const table = await queryTable(queryApi, 'ignored', newTable)

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

  it('uses the default annotation to fill in empty values', async () => {
    const CSV = `#group,false,false,true,true,true,true,false
#datatype,string,unsignedLong,string,string,boolean,long,dateTime:RFC3339
#default,_result,,,cpu,false,6,1970-01-01T00:00:00.001000Z
,result,table,a,b,c,d,time
,,1,usage_guest,,true,,1970-01-01T00:00:00.002000Z
,,1,usage_guest,,,,`

    nock(url)
      .post(/.*/)
      .reply(200, CSV)
    const actual = await queryTable(queryApi, 'ignored', newTable)

    expect(actual.getColumn('result')).deep.equals(['_result', '_result'])
    expect(actual.getColumn('a')).deep.equals(['usage_guest', 'usage_guest'])
    expect(actual.getColumn('b')).deep.equals(['cpu', 'cpu'])
    expect(actual.getColumn('c')).deep.equals([true, false])
    expect(actual.getColumn('d')).deep.equals([6, 6])
    expect(actual.getColumn('time')).deep.equals([2, 1])
  })

  it('parses empty numeric values as null', async () => {
    const CSV = `#group,false,false,true,true,false,true,true,true,true,true
#datatype,string,long,dateTime:RFC3339,dateTime:RFC3339,dateTime:RFC3339,double,string,string,string,string
#default,_result,,,,,,,,,
,result,table,_start,_stop,_time,_value,_field,_measurement,cpu,host
,,0,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:33Z,10,usage_guest,cpu,cpu-total,oox4k.local
,,1,2019-02-01T23:38:32.524234Z,2019-02-01T23:39:02.524234Z,2019-02-01T23:38:43Z,,usage_guest,cpu,cpu-total,oox4k.local`

    nock(url)
      .post(/.*/)
      .reply(200, CSV)
    const table = await queryTable(queryApi, 'ignored', newTable)

    expect(table.getColumn('_value')).deep.equals([10, null])
  })

  it('handles newlines inside string values', async () => {
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

    nock(url)
      .post(/.*/)
      .reply(200, CSV)
    const table = await queryTable(queryApi, 'ignored', newTable)

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
    let defaultMaxTableLength: number | undefined
    beforeEach(() => {
      defaultMaxTableLength = DEFAULT_TABLE_OPTIONS.maxTableLength
    })
    afterEach(() => {
      DEFAULT_TABLE_OPTIONS.maxTableLength = defaultMaxTableLength
    })
    ;[
      [0, undefined],
      [1, 1],
      [undefined, 3],
    ].forEach(([length, wants]) => {
      it(`uses default maxTableLength ${length}`, async () => {
        const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
        nock(url)
          .post(/.*/)
          .reply(200, CSV)
        DEFAULT_TABLE_OPTIONS.maxTableLength = length
        const actual = await queryTable(queryApi, 'ignored', newTable)

        expect(actual.getColumn('result')?.length).deep.equals(wants)
      })
    })
    ;[
      [0, undefined],
      [1, 1],
      [undefined, 2 /* because the default is set to 2 */],
    ].forEach(([length, wants]) => {
      it(`uses custom maxTableLength ${length}`, async () => {
        const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
        nock(url)
          .post(/.*/)
          .reply(200, CSV)
        DEFAULT_TABLE_OPTIONS.maxTableLength = 2
        const actual = await queryTable(queryApi, 'ignored', newTable, {
          maxTableLength: length,
        })

        expect(actual.getColumn('result')?.length).deep.equals(wants)
      })
    })
    it(`uses custom accept filter`, async () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      nock(url)
        .post(/.*/)
        .reply(200, CSV)
      DEFAULT_TABLE_OPTIONS.maxTableLength = 2
      const actual = await queryTable(queryApi, 'ignored', newTable, {
        accept: (row: string[]) => row[0] === '2',
      })

      expect(actual.getColumn('result')).deep.equals([2])
    })
    it(`uses custom accept filters`, async () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      nock(url)
        .post(/.*/)
        .reply(200, CSV)
      const actual = await queryTable(queryApi, 'ignored', newTable, {
        accept: [
          (row: string[]): boolean => Number(row[0]) < 3,
          (row: string[]): boolean => row[0] !== '1',
        ],
      })

      expect(actual.getColumn('result')).deep.equals([2])
    })
    it(`uses custom accept filters and maxTableLength`, async () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      nock(url)
        .post(/.*/)
        .reply(200, CSV)
      const actual = await queryTable(queryApi, 'ignored', newTable, {
        maxTableLength: 1,
        accept: (row: string[]) => Number(row[0]) > 1,
      })

      expect(actual.getColumn('result')).deep.equals([2])
    })
    it(`uses custom columns`, async () => {
      const CSV = `#group,false
#datatype,long
#default,
,result
,1
,2
,3`
      nock(url)
        .post(/.*/)
        .reply(200, CSV)
      const actual = await queryTable(queryApi, 'ignored', newTable, {
        columns: ['a'],
      })

      expect(actual.getColumn('result')).is.null
    })
    it(`handles server error`, async () => {
      nock(url)
        .post(/.*/)
        .reply(500, 'not ok')
      await queryTable(queryApi, 'ignored', newTable)
        .then(() => {
          expect.fail('must not succeed')
        })
        .catch(e => {
          expect(e)
            .property('statusCode')
            .to.equal(500)
        })
    })
    it(`handles client abort error with success`, async () => {
      const chunks = `#group,false
#datatype,long
#default,
,result
,1
,2
,3
`.split('\n')
      let chunkIndex = 0
      let res: any
      nock(url)
        .post(/.*/)
        .reply((_uri, _requestBody) => [
          200,
          new Readable({
            read(): any {
              if (chunkIndex === chunks.length) {
                res.emit('aborted')
                return
              }
              this.push(chunks[chunkIndex] + '\n')
              chunkIndex++
            },
          }),
          {
            'X-Whatever': (_req: any, _res: any, _body: any): string => {
              res = _res
              return '1'
            },
          },
        ])
      const actual = await queryTable(queryApi, 'ignored', newTable)
      expect(actual.getColumn('result')).deep.equals([1, 2, 3])
    })
  })
})

describe('queryFromFluxResult', () => {
  beforeEach(() => {
    nock.disableNetConnect()
  })
  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })
  it('returns a group key union', async () => {
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

    nock(url)
      .post(/.*/)
      .reply(200, CSV)
    typeof queryFromFluxResult === 'function'
    const {fluxGroupKeyUnion} = await queryFromFluxResult(
      queryApi,
      'ignored',
      newTable
    )
    expect(fluxGroupKeyUnion).deep.equals(['a', 'c', 'd'])
  })
})
