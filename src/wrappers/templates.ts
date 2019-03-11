import {TemplatesApi, DocumentListEntry, Document, DocumentCreate} from '../api'

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

  public async get(templateID: string): Promise<Document> {
    const {data} = await this.service.documentsTemplatesTemplateIDGet(
      templateID
    )

    return data
  }

  public async create(templateCreate: DocumentCreate): Promise<Document> {
    const {data} = await this.service.documentsTemplatesPost(templateCreate)

    return data
  }
}
