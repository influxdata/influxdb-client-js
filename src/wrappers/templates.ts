import {ILabelProperties} from "./labels";

export enum TemplateType {
    Label = "label",
    Task = "task",
}

interface IKeyValuePairs {[key: string]: any;}

interface ITemplate {
    meta: ITemplateMeta;
    data: ITemplateData[];
    included?: ITemplateIncluded[];
}

interface ITemplateMeta extends IKeyValuePairs {
    name: string;
}

interface ITemplateData {
    type: TemplateType;
    attributes: IKeyValuePairs;
    relationships?: {[key in TemplateType]?: {data: IRelationshipDataItem[]}};
}

interface IRelationshipDataItem {
    type: TemplateType;
    id: string;
}

interface ITemplateIncluded {
    type: TemplateType;
    id: string;
    attributes: IKeyValuePairs;
}

export interface ITaskTemplate extends ITemplate {
    data: ITaskTemplateData[];
    included?: ITaskTemplateIncluded[];
}

interface ITaskTemplateData extends ITemplateData {
    type: TemplateType.Task;
    attributes: {name: string, flux: string};
    relationships?: {
        [TemplateType.Label]: {data: ILabelRelationshipDataItem[]};
    };
}

interface ILabelRelationshipDataItem {
    type: TemplateType.Label;
    id: string;
}

interface ITaskTemplateIncluded extends ITemplateIncluded {
    type: TemplateType.Label;
    attributes: {name: string; properties: ILabelProperties};
}
