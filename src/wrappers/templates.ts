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

  public async delete(templateID: string): Promise<Response> {
    const {data} = await this.service.documentsTemplatesTemplateIDDelete(
      templateID
    )

    return data
  }

  public async clone(templateID: string): Promise<ITemplate> {
    const {data} = await this.service.documentsTemplatesTemplateIDGet(
      templateID
    )

    let labels: string[] = []
    if (data.labels) {
      labels = data.labels.map(l => l.name).filter((b): b is string => !!b)
    }

    const name = `${data.meta.name} (clone)`

    const meta = {...data.meta, name}
    const templateToCreate = {...data, labels, meta}

    const createdTemplate = await this.create(templateToCreate)

    if (!createdTemplate || !createdTemplate.id) {
      throw new Error('Could not clone template')
    }

    return createdTemplate
  }
}
