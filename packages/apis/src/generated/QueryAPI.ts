import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  ASTResponse,
  AnalyzeQueryResponse,
  FluxSuggestion,
  FluxSuggestions,
  InfluxQLQuery,
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
  body: Query | InfluxQLQuery
  /** Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence. */
  org?: string
  /** Specifies the ID of the organization executing the query. If both `orgID` and `org` are specified, `org` takes precedence. */
  orgID?: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAst
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestions
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestionsName
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAnalyze
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostQuery
 */
export class QueryAPI extends APIBase {
  /**
   * Creates QueryAPI
   * @param influxDB InfluxDB
   */
  constructor(influxDB: InfluxDB) {
    super(influxDB)
  }
  /**
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAst
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestions
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetQuerySuggestionsName
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostQueryAnalyze
   * @param request
   * @return promise of response
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
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostQuery
   * @param request
   * @return promise of response
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
