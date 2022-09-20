// This script repairs code blocks (wrapped between ```)
// in the supplied typescript file so that
// the backticks are indented to the start of the line.
//
// ES-Lint correctly complain about tsdoc/syntax that this script fixes :
// warning  tsdoc-code-fence-opening-indent: The opening backtick for a code fence must appear at the start of the line

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {readFileSync, writeFileSync} = require('fs')

const fileName = process.argv[2]
if (!fileName) {
  console.error('ERROR: Please supply a file to repair')
  process.exit(1)
}
const lines = readFileSync(fileName, 'utf8').split('\n')
let backTicksCorrected = 0
let result = ''
let cutPrefix = 0
for (let line of lines) {
  const trippleBackTickIndex = line.indexOf('```')
  if (trippleBackTickIndex >= 0) {
    backTicksCorrected++
    line = line.substring(trippleBackTickIndex)
    result += line
    result += '\n'
    cutPrefix = cutPrefix === 0 ? trippleBackTickIndex : 0
    continue
  }
  result += line.length >= cutPrefix ? line.substring(cutPrefix) : line
  result += '\n'
}
writeFileSync(fileName, result)
console.info(`${backTicksCorrected / 2} code blocks indented in ${fileName}`)
