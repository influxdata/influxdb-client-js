import {TemplatesApi, DocumentListEntry, Document, DocumentCreate} from '../api'
import {ITemplate} from '../types'
import {addLabelDefaults} from './labels'

export const addTemplateDefaults = (d: Document): ITemplate => ({
  ...d,
  content: {data: {}, included: [], ...d.content},
  labels: d.labels.map(addLabelDefaults),
})

export default class {
  private service: TemplatesApi

  constructor(basePath: string) {
    this.service = new TemplatesApi({basePath})
  }

  public async getAll(orgName: string): Promise<DocumentListEntry[]> {
    const {data} = await this.service.documentsTemplatesGet(orgName)

    if (data.documents) {
      return data.documents
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
