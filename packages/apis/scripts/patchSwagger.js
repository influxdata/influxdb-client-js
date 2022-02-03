// Patch function is used by oats tool to modify a swagger document before generating API code.
exports.patch = async (doc, SwaggerParser) => {
  // Merges Resource enum values so that the client contains also values from cloud spec
  const cloudApi = await SwaggerParser.bundle('./resources/cloud.yml')
  const cloudTypes =
    cloudApi.components.schemas['Resource']['properties']['type']
  const ossTypes = doc.components.schemas['Resource']['properties']['type']
  ossTypes.enum = ossTypes.enum.concat(
    cloudTypes.enum.filter(cloudType => !ossTypes.enum.includes(cloudType))
  )

  return doc
}
