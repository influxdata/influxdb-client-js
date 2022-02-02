exports.patch = async (doc, swaggerParser) => {
  const cloudApi = await swaggerParser('./resources/cloud.yml')
  const cloudTypes =
    cloudApi.components.schemas['Resource']['properties']['type']
  const ossTypes = doc.components.schemas['Resource']['properties']['type']
  ossTypes.enum = ossTypes.enum.concat(
    cloudTypes.enum.filter(cloudType => !ossTypes.enum.includes(cloudType))
  )

  return doc
}
