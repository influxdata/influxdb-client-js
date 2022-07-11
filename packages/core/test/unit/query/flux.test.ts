import {
  fluxExpression,
  fluxInteger,
  fluxFloat,
  fluxDuration,
  fluxDateTime,
  fluxRegExp,
  fluxString,
  toFluxValue,
  fluxBool,
  flux,
  FLUX_VALUE,
} from '../../../src'
import {expect} from 'chai'

describe('Flux Values', () => {
  it('creates fluxExpression', () => {
    const value = '12345'
    const subject = fluxExpression(value)
    expect(subject.toString()).equals(value)
    expect((subject as any)[FLUX_VALUE]()).equals(value)
  })
  it('creates fluxInteger', () => {
    const subject = fluxInteger(123)
    expect(subject.toString()).equals('123')
    expect((subject as any)[FLUX_VALUE]()).equals('123')
    expect(fluxInteger(123).toString()).equals('123')
    expect(fluxInteger(-123).toString()).equals('-123')
    expect(() => fluxInteger('-1.1')).to.throw()
    expect(() => fluxInteger('123a')).to.throw()
    expect(() => fluxInteger(NaN)).to.throw()
    expect(() => fluxInteger(Infinity)).to.throw()
    expect(() => fluxInteger(-Infinity)).to.throw()
  })
  it('creates fluxBool', () => {
    expect(fluxBool('true').toString()).equals('true')
    expect((fluxBool('true') as any)[FLUX_VALUE]()).equals('true')
    expect(fluxBool('false').toString()).equals('false')
    expect((fluxBool('false') as any)[FLUX_VALUE]()).equals('false')
    expect(fluxBool(true).toString()).equals('true')
    expect((fluxBool(true) as any)[FLUX_VALUE]()).equals('true')
    expect(fluxBool(false).toString()).equals('false')
    expect((fluxBool(false) as any)[FLUX_VALUE]()).equals('false')
    expect(fluxBool(1).toString()).equals('true')
    expect((fluxBool(1) as any)[FLUX_VALUE]()).equals('true')
    expect(fluxBool(0).toString()).equals('false')
    expect((fluxBool(0) as any)[FLUX_VALUE]()).equals('false')
  })
  it('creates fluxFloat', () => {
    const subject = fluxFloat(123.456)
    expect(subject.toString()).equals('123.456')
    expect((subject as any)[FLUX_VALUE]()).equals('123.456')
    expect(fluxFloat('-123').toString()).equals('-123')
    expect(() => fluxFloat('123..')).to.throw()
    expect(() => fluxFloat('123.a')).to.throw()
    expect(() => fluxFloat(NaN)).to.throw()
    expect(() => fluxFloat(Infinity)).to.throw()
    expect(() => fluxFloat(-Infinity)).to.throw()
  })
  it('creates fluxDuration', () => {
    const subject = fluxDuration('1ms')
    const fluxValue = 'duration(v: "1ms")'
    expect(subject.toString()).equals(fluxValue)
    expect((subject as any)[FLUX_VALUE]()).equals(fluxValue)
  })
  it('creates fluxDateTime', () => {
    const subject = fluxDateTime('2020-06-06T21:56:00.000Z')
    const fluxValue = 'time(v: "2020-06-06T21:56:00.000Z")'
    expect(subject.toString()).equals(fluxValue)
    expect((subject as any)[FLUX_VALUE]()).equals(fluxValue)
  })
  it('creates fluxRegExp', () => {
    const subject = fluxRegExp('/abc/')
    const fluxValue = 'regexp.compile(v: "/abc/")'
    expect(subject.toString()).equals(fluxValue)
    expect((subject as any)[FLUX_VALUE]()).equals(fluxValue)
  })
  it('creates fluxString', () => {
    const subject = fluxString('abc')
    expect(subject.toString()).equals('"abc"')
    expect((subject as any)[FLUX_VALUE]()).equals('"abc"')
    expect(fluxString(null).toString()).equals('""')
    expect((fluxString(null) as any)[FLUX_VALUE]()).equals('""')
    expect(fluxString(undefined).toString()).equals('""')
    expect((fluxString(undefined) as any)[FLUX_VALUE]()).equals('""')
  })
  describe('toFluxValue', () => {
    const pairs: Array<{value: any; flux: string}> = [
      {value: null, flux: 'null'},
      {value: undefined, flux: ''},
      {value: false, flux: 'false'},
      {value: 1, flux: '1'},
      {value: 1.1, flux: '1.1'},
      {value: -1.1, flux: '-1.1'},
      {value: 'a', flux: '"a"'},
      {value: new Date(1589521447471), flux: '2020-05-15T05:44:07.471Z'},
      {value: /abc/, flux: 'regexp.compile(v: "/abc/")'},
      {
        value: {
          toString: function (): string {
            return 'whatever'
          },
        },
        flux: '"whatever"',
      },
      {value: fluxExpression('1ms'), flux: '1ms'},
      {value: 'abc\n\r\t\\"def', flux: '"abc\\n\\r\\t\\\\\\"def"'},
      {value: 'abc${val}def', flux: '"abc\\${val}def"'},
      {value: 'abc$', flux: '"abc$"'},
      {value: 'a"$d', flux: '"a\\"$d"'},
      {value: [], flux: '[]'},
      {value: ['a"$d'], flux: '["a\\"$d"]'},
      {value: Symbol('thisSym'), flux: `"${Symbol('thisSym').toString()}"`},
    ]
    pairs.forEach((pair) => {
      it(`converts ${JSON.stringify(String(pair.value))} to '${
        pair.flux
      }'`, () => {
        expect(toFluxValue(pair.value)).equals(pair.flux)
      })
    })
  })
})

describe('Flux Tagged Template', () => {
  it('creates a string from a simple string', () => {
    expect(
      flux`from(bucket:"my-bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")`.toString()
    ).equals(
      'from(bucket:"my-bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")'
    )
  })
  it('interpolates a number', () => {
    expect(
      flux`from(bucket:"my-bucket") |> range(start: ${0}) |> filter(fn: (r) => r._measurement == ${'temperature'})`.toString()
    ).equals(
      'from(bucket:"my-bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")'
    )
  })
  it('interpolates a string', () => {
    expect(
      flux`from(bucket:${'my-bucket'}) |> range(start: 0) |> filter(fn: (r) => r._measurement == ${'temperature'})`.toString()
    ).equals(
      'from(bucket:"my-bucket") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")'
    )
  })
  it('interpolates a wrapped string', () => {
    expect(flux`from(bucket:"${'my-bucket'}")`.toString()).equals(
      'from(bucket:"my-bucket")'
    )
  })
  it('fails on undefined', () => {
    expect(() => flux`${undefined}`).to.throw()
  })
  it('converts object with empty toString to ""', () => {
    const x = {
      toString(): string {
        return ''
      },
    }
    expect(flux`${x}`.toString()).equals('""')
  })
  it('fails on wrong usage of template', () => {
    try {
      flux(['1', '2'] as any as TemplateStringsArray)
      expect.fail()
    } catch (_e) {
      // ok expected, too few arguments supplied to a tagged template
    }
  })

  it('processes a simple nested flux template', () => {
    const flux1 = flux`from(bucket:"my-bucket")`
    expect(flux`${flux1} |> range(start: ${0})")`.toString()).equals(
      'from(bucket:"my-bucket") |> range(start: 0)")'
    )
  })
  it('processes a parameterized nested flux template', () => {
    const flux1 = flux`from(bucket:${'my-bucket'})`
    expect(flux`${flux1} |> range(start: ${0})")`.toString()).equals(
      'from(bucket:"my-bucket") |> range(start: 0)")'
    )
  })
  it('processes an empty nested flux template', () => {
    const empty = flux``
    expect(flux`from(bucket:"my-bucket")${empty}`.toString()).equals(
      'from(bucket:"my-bucket")'
    )
  })
  it('interpolates parameter with escaping', () => {
    const pairs: Array<{value: any; flux: string}> = [
      {value: flux`${null}`, flux: 'null'},
      {value: flux`${false}`, flux: 'false'},
      {value: flux`${1}`, flux: '1'},
      {value: flux`${1.1}`, flux: '1.1'},
      {value: flux`${-1.1}`, flux: '-1.1'},
      {value: flux`${'a'}`, flux: '"a"'},
      {
        value: flux`${new Date(1589521447471)}`,
        flux: '2020-05-15T05:44:07.471Z',
      },
      {value: flux`${/abc/}`, flux: 'regexp.compile(v: "/abc/")'},
      {
        value: flux`${{
          toString: function (): string {
            return 'whatever'
          },
        }}`,
        flux: '"whatever"',
      },
      {value: flux`${fluxExpression('1ms')}`, flux: '1ms'},
      {value: flux`${'abc\n\r\t\\"def'}`, flux: '"abc\\n\\r\\t\\\\\\"def"'},
      {value: flux`${'abc${val}def'}`, flux: '"abc\\${val}def"'},
      {value: flux`${'abc$'}`, flux: '"abc$"'},
      {value: flux`${'a"$d'}`, flux: '"a\\"$d"'},
      {value: flux`${[]}`, flux: '[]'},
      {value: flux`${['a"$d']}`, flux: '["a\\"$d"]'},
      {
        value: flux`${Symbol('thisSym')}`,
        flux: `"${Symbol('thisSym').toString()}"`,
      },
    ]
    pairs.forEach((pair) => {
      expect(pair.value.toString()).equals(pair.flux)
    })
  })
  it('interpolates double quoted parameter with escaping', () => {
    const pairs: Array<{value: any; flux: string}> = [
      {value: flux`"${null}"`, flux: '""'},
      {value: flux`"${undefined}"`, flux: '""'},
      {value: flux`"${false}"`, flux: '"false"'},
      {value: flux`"${1}"`, flux: '"1"'},
      {value: flux`"${1.1}"`, flux: '"1.1"'},
      {value: flux`"${-1.1}"`, flux: '"-1.1"'},
      {value: flux`"${'a'}"`, flux: '"a"'},
      {
        value: flux`"${new Date(1589521447471)}"`,
        flux: `"${new Date(1589521447471)}"`,
      },
      {value: flux`"${/abc/}"`, flux: `"${/abc/.toString()}"`},
      {
        value: flux`"${{
          toString: function (): string {
            return 'whatever'
          },
        }}"`,
        flux: '"whatever"',
      },
      {value: flux`"${fluxExpression('1ms')}"`, flux: '"1ms"'},
      {value: flux`"${'abc\n\r\t\\"def'}"`, flux: '"abc\\n\\r\\t\\\\\\"def"'},
      {value: flux`"${'abc${val}def'}"`, flux: '"abc\\${val}def"'},
      {value: flux`"${'abc$'}"`, flux: '"abc$"'},
      {value: flux`"${'a"$d'}"`, flux: '"a\\"$d"'},
      {value: flux`"${[]}"`, flux: `""`},
      {value: flux`"${['a"$d']}"`, flux: `"a\\"$d"`},
      {
        value: flux`"${Symbol('thisSym')}"`,
        flux: `"${Symbol('thisSym').toString()}"`,
      },
    ]
    pairs.forEach((pair) => {
      expect(pair.value.toString()).equals(pair.flux)
    })
  })
})
