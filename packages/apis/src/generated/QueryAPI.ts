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
  /** Specifies the name of the organization executing the query. Takes either the ID or Name. If both `orgID` and `org` are specified, `org` takes precedence. */
  org?: string
  /** Specifies the ID of the organization executing the query. If both `orgID` and `org` are specified, `org` takes precedence. */
  orgID?: string
}
/**
 * Query API
 */
export class QueryAPI {
  // internal
  private base: APIBase

  /**
   * Creates QueryAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * Generate an Abstract Syntax Tree (AST) from a query.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostQueryAst }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postQueryAst(
    request: PostQueryAstRequest,
    requestOptions?: RequestOptions
  ): Promise<ASTResponse> {
    return this.base.request(
      'POST',
      `/api/v2/query/ast`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve query suggestions.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetQuerySuggestions }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getQuerySuggestions(
    request?: GetQuerySuggestionsRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxSuggestions> {
    return this.base.request(
      'GET',
      `/api/v2/query/suggestions`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve query suggestions for a branching suggestion.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/GetQuerySuggestionsName }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  getQuerySuggestionsName(
    request: GetQuerySuggestionsNameRequest,
    requestOptions?: RequestOptions
  ): Promise<FluxSuggestion> {
    return this.base.request(
      'GET',
      `/api/v2/query/suggestions/${request.name}`,
      request,
      requestOptions
    )
  }
  /**
   * Analyze an InfluxQL or Flux query.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostQueryAnalyze }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postQueryAnalyze(
    request: PostQueryAnalyzeRequest,
    requestOptions?: RequestOptions
  ): Promise<AnalyzeQueryResponse> {
    return this.base.request(
      'POST',
      `/api/v2/query/analyze`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Query data.
   * See {@link https://docs.influxdata.com/influxdb/v2.1/api/#operation/PostQuery }
   * @param request - request parameters and body (if supported)
   * @param requestOptions - optional transport options
   * @returns promise of response
   */
  postQuery(
    request: PostQueryRequest,
    requestOptions?: RequestOptions
  ): Promise<string> {
    return this.base.request(
      'POST',
      `/api/v2/query${this.base.queryString(request, ['org', 'orgID'])}`,
      request,
      requestOptions,
      'application/json'
    )
  }
}
