import {TemplatesApi, DocumentListEntry, Document, DocumentCreate} from '../api'
import {ITemplate, TemplateSummary} from '../types'
import {addLabelDefaults} from './labels'

const addTemplateDefaults = (d: Document): ITemplate => {
  const labels = d.labels || []
  return {
    ...d,
    content: {data: {}, included: [], ...d.content},
    labels: labels.map(addLabelDefaults),
  }
}

const addTemplateSummaryDefaults = (d: DocumentListEntry): TemplateSummary => {
  const labels = d.labels || []
  return {
    ...d,
    labels: labels.map(addLabelDefaults),
  }
}

export default class {
  private service: TemplatesApi

  constructor(basePath: string) {
    this.service = new TemplatesApi({basePath})
  }

  public async getAll(orgName: string): Promise<TemplateSummary[]> {
    const {data} = await this.service.documentsTemplatesGet(orgName)

    if (data.documents) {
      return data.documents.map(addTemplateSummaryDefaults)
    }

    return []
  }

  public async get(templateID: string): Promise<ITemplate> {
    const {data} = await this.service.documentsTemplatesTemplateIDGet(
      templateID
    )

    return addTemplateDefaults(data)
  }

  public async create(templateCreate: DocumentCreate): Promise<ITemplate> {
    const {data} = await this.service.documentsTemplatesPost(templateCreate)

    return addTemplateDefaults(data)
  }
}
