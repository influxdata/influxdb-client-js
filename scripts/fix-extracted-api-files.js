/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const referenceIds = {}

const ignoredReferencePackages = [
  '!' /* ts&js builtin types */,
  '@influxdata/giraffe!' /* giraffe references */,
]

const markdownLinkRE = /\[([^\]]*)\]\(([^)]*)\)/g
function changeMarkdownLinks(text) {
  if (text) {
    // changes markdown style [text](link) to tsdoc {@link URL | text }
    return text.replace(markdownLinkRE, (match, text, link) => {
      const retVal = `{@link ${link} | ${text} }`
      console.log(` CHANGED ${match} => ${retVal}`)
      return retVal
    })
  }
  return text
}

function storeCanonicalReferences(json, references) {
  function walk(obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        obj.forEach(walk)
      } else {
        const canonicalReference = obj['canonicalReference']
        if (canonicalReference && obj['kind'] && obj['kind'] !== 'Reference') {
          references[canonicalReference] = true
        }
        for (const key in obj) {
          walk(obj[key])
        }
      }
    }
  }
  walk(json)
}

function fixExtractedFile(file, json, errors = []) {
  console.log(`\nCheck and correct: ${file}`)

  function replaceObject(obj) {
    if (typeof obj === 'object') {
      if (Array.isArray(obj)) {
        obj.forEach(replaceObject)
      } else {
        if (obj['kind'] === 'Reference') {
          const canonicalReference = obj['canonicalReference']
          if (canonicalReference && !referenceIds[canonicalReference]) {
            if (canonicalReference.indexOf('!~') > 0) {
              const replaced = canonicalReference.replace('!~', '!')
              console.log(` FIXED ${canonicalReference} => ${replaced}`)
              obj.canonicalReference = replaced
              return
            }
            // report unresolved reference
            for (const ignoredPackage of ignoredReferencePackages) {
              if (canonicalReference.startsWith(ignoredPackage)) {
                return
              }
            }
            const msg = ` MISSING ${canonicalReference}`
            errors.push(`${file}: ${msg}`)
            console.log(msg)
          }
        } else {
          for (const key in obj) {
            if (key === 'docComment') {
              obj.docComment = changeMarkdownLinks(obj.docComment)
              continue
            }
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
const files = fs.readdirSync(docsDir).filter((x) => /\.api\.json$/.test(x))
const fileToJson = files.reduce((acc, file) => {
  file = path.resolve(docsDir, file)
  const json = JSON.parse(fs.readFileSync(file, 'utf8'))
  acc[file] = json
  storeCanonicalReferences(json, referenceIds)
  return acc
}, {})

const errors = []
for (const [file, json] of Object.entries(fileToJson)) {
  fixExtractedFile(file, json, errors)
}

if (errors.length) {
  console.error(`\n\nERRORS:`)
  errors.forEach((e) => console.error(e))
  process.exit(1)
}
