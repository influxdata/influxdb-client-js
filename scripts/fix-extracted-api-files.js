/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')

function replaceInExtractorFile(file) {
  console.log(`correct references in: ${file}`)
  const data = fs.readFileSync(file, 'utf8')
  const json = JSON.parse(data)

  function replaceObject(obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        obj.forEach(replaceObject)
      } else {
        if (obj['kind'] === 'Reference') {
          const canonicalReference = obj['canonicalReference']
          if (canonicalReference.indexOf('!default:') > 0) {
            const text = obj['text']
            const replaced = canonicalReference.replace(
              /!(default):/,
              `!${text}:`
            )
            console.log(` ${canonicalReference} => ${replaced}`)
            obj.canonicalReference = replaced
          }
        } else {
          for (const key in obj) {
            replaceObject(obj[key])
          }
        }
      }
    }
  }
  replaceObject(json)

  fs.writeFileSync(file, JSON.stringify(json, null, 2), 'utf8')
}

const docsDir = path.resolve(__dirname, '..', 'docs')
const files = fs.readdirSync(docsDir).filter(x => /\.api\.json$/.test(x))
files.forEach(file => {
  replaceInExtractorFile(path.resolve(docsDir, file))
})
