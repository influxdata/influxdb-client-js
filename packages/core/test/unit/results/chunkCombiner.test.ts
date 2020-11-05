import {expect} from 'chai'
import {createTextDecoderCombiner} from '../../../src/results'

describe('createTextDecoderCombiner', () => {
  const pureJsChunkCombiner = createTextDecoderCombiner()
  it('concatenates chunks', () => {
    expect(
      pureJsChunkCombiner.concat(
        Uint8Array.from([1, 2]),
        Uint8Array.from([3, 4])
      )
    ).is.deep.equal(Uint8Array.from([1, 2, 3, 4]))
    expect(
      pureJsChunkCombiner.concat(Uint8Array.from([]), Uint8Array.from([3, 4]))
    ).is.deep.equal(Uint8Array.from([3, 4]))
  })
  it('copies chunks', () => {
    const src = Uint8Array.from([1, 2])
    const copy = pureJsChunkCombiner.copy(src, 1, 2)
    expect(copy).is.deep.equal(Uint8Array.from([2]))
    src[1] = 3
    expect(copy[0]).is.equal(2)
  })
  // see examples in https://en.wikipedia.org/wiki/UTF-8
  const chunks = [
    ...[0, 1, 2, 3, 4, 5, 6, 7].map(num => [
      String.fromCharCode(num << 4),
      Uint8Array.from([num << 4]),
    ]),
    ['$', Uint8Array.from([0x24])],
    ['\u{A2}', Uint8Array.from([0xc2, 0xa2])],
    ['\u{4FF}', Uint8Array.from([0xd3, 0xbf])],
    ['\u{939}', Uint8Array.from([0xe0, 0xa4, 0xb9])],
    ['\u{10348}', Uint8Array.from([0xf0, 0x90, 0x8d, 0x88])],
  ]
  chunks.forEach(([str, chunk]) => {
    it(`utf-8 encodes chunk ${JSON.stringify(str)}`, () => {
      // console.log(Buffer.from(str as string, 'utf8'))
      const encoded = pureJsChunkCombiner.toUtf8String(
        chunk as Uint8Array,
        0,
        chunk.length
      )
      expect(encoded).equals(str)
    })
  })
})
