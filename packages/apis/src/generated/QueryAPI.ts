import {APIBase, RequestOptions} from '../APIBase'
import {
  ASTResponse,
  AnalyzeQueryResponse,
  FluxSuggestion,
  FluxSuggestions,
  LanguageRequest,
  Query,
} from './types'

export interface PostQueryAstRequest {
  /** Analyzed Flux query to generate abstract syntax tree. */
  body: LanguageRequest
}
export interface GetQuerySuggestionsRequest {}
export interface GetQuerySuggestionsNameRequest {
  /** The name of the branching suggestion. */
  name: string
}
export interface PostQueryAnalyzeRequest {
  /** Flux or InfluxQL query to analyze */
  body: Query
}
export interface PostQueryRequest {
  /** Flux query or specification to execute */
  body: Query
  /** Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence. */
  org?: string
  /** Specifies the ID of the organization executing the query. If both `orgID` and `org` are specified, `org` takes precedence. */
  orgID?: string
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAst
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestions
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestionsName
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAnalyze
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostQuery
 */
export class QueryAPI extends APIBase {
  /**
   * Creates QueryAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAst
   */
  postQueryAst(
    request: PostQueryAstRequest,
    requestOptions?: RequestOptions
  ): Promise<ASTResponse> {
    return this.request(
      'POST',
      `/api/v2/query/ast`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestions
   */
  getQuerySuggestions(
    request?: GetQuerySuggestionsRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxSuggestions> {
    return this.request(
      'GET',
      `/api/v2/query/suggestions`,
      request,
      requestOptions
    )
  }
  /**
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestionsName
   */
  getQuerySuggestionsName(
    request: GetQuerySuggestionsNameRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxSuggestion> {
    return this.request(
      'GET',
      `/api/v2/query/suggestions/${request.name}`,
      request,
      requestOptions
    )
  }
  /**
   * Analyze an InfluxQL or Flux query.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAnalyze
   */
  postQueryAnalyze(
    request: PostQueryAnalyzeRequest,
    requestOptions?: RequestOptions
  ): Promise<AnalyzeQueryResponse> {
    return this.request(
      'POST',
      `/api/v2/query/analyze`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Query InfluxDB.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostQuery
   */
  postQuery(
    request: PostQueryRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.request(
      'POST',
      `/api/v2/query${this.queryString(request, ['org', 'orgID'])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
