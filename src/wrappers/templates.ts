import {TemplatesApi, DocumentListEntry, Document, DocumentCreate} from '../api'
import {ITemplate, TemplateSummary, ILabel, ServiceOptions} from '../types'
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

  constructor(basePath: string, baseOptions: ServiceOptions) {
    this.service = new TemplatesApi({basePath, baseOptions})
  }

  public async getAll(orgID?: string): Promise<TemplateSummary[]> {
    const {data} = await this.service.documentsTemplatesGet(
      undefined,
      undefined,
      orgID
    )

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

  public async update(
    id: string,
    props: Partial<ITemplate>
  ): Promise<ITemplate> {
    const original = await this.get(id)
    const {data} = await this.service.documentsTemplatesTemplateIDPut(id, {
      ...original,
      ...props,
    })

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

  public async addLabel(templateID: string, labelID: string): Promise<ILabel> {
    const {data} = await this.service.documentsTemplatesTemplateIDLabelsPost(
      templateID,
      {
        labelID,
      }
    )

    if (!data.label) {
      throw new Error('Failed to add label')
    }

    return addLabelDefaults(data.label)
  }

  public async removeLabel(
    templateID: string,
    labelID: string
  ): Promise<Response> {
    const {
      data,
    } = await this.service.documentsTemplatesTemplateIDLabelsLabelIDDelete(
      templateID,
      labelID
    )

    return data
  }

  public addLabels(templateID: string, labelIDs: string[]): Promise<ILabel[]> {
    const promises = labelIDs.map(l => this.addLabel(templateID, l))

    return Promise.all(promises)
  }

  public removeLabels(
    templateID: string,
    labelIDs: string[]
  ): Promise<Response[]> {
    const promises = labelIDs.map(l => this.removeLabel(templateID, l))

    return Promise.all(promises)
  }

  public async clone(templateID: string, orgID: string): Promise<ITemplate> {
    const {data} = await this.service.documentsTemplatesTemplateIDGet(
      templateID
    )

    const {labels, content, meta} = data

    let labelsData: string[] = []
    if (labels) {
      labelsData = labels.map(l => l.name).filter((b): b is string => !!b)
    }

    const name = `${meta.name} (clone)`

    const templateToCreate = {
      meta: {...meta, name},
      content,
      orgID,
      labels: labelsData,
    }

    const createdTemplate = await this.create(templateToCreate)

    if (!createdTemplate || !createdTemplate.id) {
      throw new Error('Could not clone template')
    }

    return createdTemplate
  }
}
