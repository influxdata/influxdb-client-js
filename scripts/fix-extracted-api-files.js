/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')
const referenceIds = {}
let fixedReferenceCount = 0
let fixedMarkdownLinks = 0

const ignoredReferencePackages = [
  '!' /* ts&js builtin types */,
  '@influxdata/giraffe!' /* giraffe references */,
  '@influxdata/influxdb-client!~__global' /*ignore global symbol declaration in packages/core/src/observable/symbol.ts */,
]
const mappedReferences = {
  // defect in api-extractor naming https://github.com/microsoft/rushstack/issues/3629
  '@influxdata/influxdb-client!FLUX_VALUE':
    '@influxdata/influxdb-client!FLUX_VALUE:var',
}

const markdownLinkRE = /\[([^\]]*)\]\(([^)]*)\)/g
function changeMarkdownLinks(text) {
  if (text) {
    // changes markdown style [text](link) to tsdoc {@link URL | text }
    return text.replace(markdownLinkRE, (match, text, link) => {
      const retVal = `{@link ${link} | ${text} }`
      console.log(` CHANGED ${match} => ${retVal}`)
      fixedMarkdownLinks++
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
              // https://github.com/microsoft/rushstack/issues/3624
              const replaced = canonicalReference.replace('!~', '!')
              if (referenceIds[replaced]) {
                fixedReferenceCount++
                console.log(` FIXED ${canonicalReference} => ${replaced}`)
                obj.canonicalReference = replaced
                return
              }
            }
            const mapped = mappedReferences[canonicalReference]
            if (mapped && referenceIds[mapped]) {
              fixedReferenceCount++
              console.log(` FIXED ${canonicalReference} => ${mapped}`)
              obj.canonicalReference = mapped
              return
            }
            for (const ignoredPackage of ignoredReferencePackages) {
              if (canonicalReference.startsWith(ignoredPackage)) {
                return
              }
            }
            // report unresolved references
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

console.info('Fixed markdown links: ' + fixedMarkdownLinks)
console.info('Fixed references: ' + fixedReferenceCount)
if (errors.length) {
  console.error(`\n\nERRORS:`)
  errors.forEach((e) => console.error(e))
  process.exit(1)
}
