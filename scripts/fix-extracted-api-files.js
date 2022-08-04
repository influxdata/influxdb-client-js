/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs')

const markdownLinkRE = /\[([^\]]*)\]\(([^)]*)\)/g
function changeMarkdownLinks(text) {
  if (text) {
    // changes markdown style [text](link) to tsdoc {@link URL | text }
    return text.replace(markdownLinkRE, (match, text, link) => {
      const retVal = `{@link ${link} | ${text} }`
      console.log(` ${match} => ${retVal}`)
      return retVal
    })
  }
  return text
}

function replaceInExtractorFile(file) {
  const data = fs.readFileSync(file, 'utf8')
  const json = JSON.parse(data)
  console.log(`correct: ${file}`)

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
files.forEach((file) => {
  replaceInExtractorFile(path.resolve(docsDir, file))
})
