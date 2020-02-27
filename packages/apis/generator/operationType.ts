// type of the operation os operations.json's array
export interface Parameter {
  name: string //"Zap-Trace-Span",
  description?: string // "OpenTracing span context",
  required?: boolean // false,
  type: string // "string"
  mediaType?: string // "application/json",
}
export interface ResponseBody {
  mediaType: string // "application/json",
  type: string //"OnboardingResponse"
}
export interface Response {
  code: string // "201", "default"
  description?: string //"Created default user, bucket, org",
  mediaTypes: Array<ResponseBody>
}
export interface Operation {
  server: string //"/api/v2",
  path: string //"path": "/setup",
  operation: string //"operation": "post",
  operationId?: string // "PostSetup",
  basicAuth?: boolean //false,
  summary?: string // "Set up initial user, org and bucket",
  positionalParams: Array<Parameter>
  headerParams: Array<Parameter>
  queryParams: Array<Parameter>
  bodyParam: Omit<Parameter, 'name'> | null
  responses: Array<Response>
}
