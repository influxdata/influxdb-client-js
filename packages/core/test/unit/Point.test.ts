import {expect} from 'chai'
import pointTables from '../fixture/pointTables.json'
import {Point, PointSettings} from '../../src'

interface PointTest {
  name?: string
  tags?: Array<[string, string]>
  fields?: Array<[string, 'n' | 's' | 'b' | 'i', any]>
  time?: string
  line: string | undefined
  toString: string | undefined
  index?: number
  fails?: boolean
  throws?: string

  pointSettings?: {
    defaultTags: {[key: string]: string}
    convertTime?: string
  }
}

let testIndex = 1
function createPoint(test: PointTest): Point {
  test.index = testIndex++
  const point =
    testIndex % 2 == 1
      ? new Point(test.name)
      : test.name
      ? new Point().measurement(test.name)
      : new Point()
  ;(test.fields ?? []).forEach(
    (field: [string, 'n' | 's' | 'b' | 'i', any]) => {
      switch (field[1]) {
        case 'n':
          point.floatField(field[0], field[2])
          break
        case 's':
          point.stringField(field[0], field[2])
          break
        case 'b':
          point.booleanField(field[0], field[2])
          break
        case 'i':
          point.intField(field[0], field[2])
          break
      }
    }
  )
  ;(test.tags || []).forEach((tag: [string, string]) => {
    point.tag(tag[0], tag[1])
  })
  if (test.time) {
    point.timestamp(test.time)
  } else {
    point.timestamp('')
  }
  return point
}

function createPointSettings(pointSettings: {
  defaultTags: {[key: string]: string}
  convertTime?: string
}): PointSettings {
  if (pointSettings.convertTime) {
    return {
      defaultTags: pointSettings.defaultTags,
      convertTime: (): string | undefined => pointSettings.convertTime,
    }
  } else {
    return {
      defaultTags: pointSettings.defaultTags,
    }
  }
}

describe('Point', () => {
  describe('toLineProtocol', () => {
    ;(pointTables as Array<PointTest>).forEach((test: PointTest) => {
      if (test.throws) {
        it(`throws error for ${test.name}`, () => {
          expect(() => createPoint(test)).to.throw(test.throws)
        })
      } else {
        const point = createPoint(test)
        it(`creates line for '${test.index}/${test.name}'`, () => {
          if (test.fails) {
            expect(point.toString()).to.include('invalid point')
          } else {
            if (test.pointSettings) {
              expect(
                point.toLineProtocol(createPointSettings(test.pointSettings))
              ).to.be.equal(test.line)
            } else {
              expect(point.toString()).to.be.equal(test.line)
            }
          }
        })
      }
    })
    it('creates line with JSON double encoded field #241', () => {
      const fieldValue = JSON.stringify({prop: JSON.stringify({str: 'test'})})
      const point = new Point('tst')
      point.stringField('a', fieldValue).timestamp('')
      expect(point.toLineProtocol()).equals(
        'tst a="{X"propX":X"{XXX"strXXX":XXX"testXXX"}X"}"'.replace(/X/g, '\\')
      )
    })
    it('serializes Point with current time nanosecond OOTB', () => {
      const point = new Point('tst').floatField('a', 1)
      const lpParts = point.toLineProtocol()?.split(' ') as string[]
      expect(lpParts).has.length(3)
      expect(lpParts[0]).equals('tst')
      expect(lpParts[1]).equals('a=1')
      // expect current time in nanoseconds
      const nowMillisStr = String(Date.now())
      expect(lpParts[2]).has.length(nowMillisStr.length + 6)
      expect(
        Number.parseInt(lpParts[2].substring(0, nowMillisStr.length)) - 1
      ).lte(Date.now())
    })
    it("serializes Point's Date timestamp with nanosecond precision OOTB", () => {
      const point = new Point('tst').floatField('a', 1).timestamp(new Date())
      const lpParts = point.toLineProtocol()?.split(' ') as string[]
      expect(lpParts).has.length(3)
      expect(lpParts[0]).equals('tst')
      expect(lpParts[1]).equals('a=1')
      // expect current time in nanoseconds
      const nowMillisStr = String(Date.now())
      expect(lpParts[2]).has.length(nowMillisStr.length + 6)
      expect(
        Number.parseInt(lpParts[2].substring(0, nowMillisStr.length)) - 1
      ).lte(Date.now())
    })
    it("serializes Point's number timestamp as-is OOTB", () => {
      const point = new Point('tst').floatField('a', 1).timestamp(1)
      expect(point.toLineProtocol()).equals('tst a=1 1')
    })
    it("serializes Point's unknown timestamp as-is OOTB", () => {
      const point = new Point('tst').floatField('a', 1).timestamp(({
        toString() {
          return 'any'
        },
      } as unknown) as undefined)
      expect(point.toLineProtocol()).equals('tst a=1 any')
    })
  })
})
