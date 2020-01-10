import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
  OperationLogs,
  Organization,
  Organizations,
  ResourceMember,
  ResourceMembers,
  ResourceOwner,
  ResourceOwners,
  SecretKeys,
  SecretKeysResponse,
  Secrets,
} from './types'

export interface GetOrgsRequest {
  query: {
    /** Filter organizations to a specific organization name. */
    org?: string
    /** Filter organizations to a specific organization ID. */
    orgID?: string
  }
}
export interface PostOrgsRequest {
  /** Organization to create */
  body: Organization
}
export interface GetOrgsIDRequest {}
export interface PatchOrgsIDRequest {
  /** Organization update to apply */
  body: Organization
}
export interface DeleteOrgsIDRequest {}
export interface GetOrgsIDLabelsRequest {}
export interface PostOrgsIDLabelsRequest {
  /** Label to add */
  body: LabelMapping
}
export interface DeleteOrgsIDLabelsIDRequest {}
export interface GetOrgsIDSecretsRequest {}
export interface PatchOrgsIDSecretsRequest {
  /** Secret key value pairs to update/add */
  body: Secrets
}
export interface PostOrgsIDSecretsRequest {
  /** Secret key to delete */
  body: SecretKeys
}
export interface GetOrgsIDMembersRequest {}
export interface PostOrgsIDMembersRequest {
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteOrgsIDMembersIDRequest {}
export interface GetOrgsIDOwnersRequest {}
export interface PostOrgsIDOwnersRequest {
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteOrgsIDOwnersIDRequest {}
export interface GetOrgsIDLogsRequest {
  query: {
    offset?: number
    limit?: number
  }
}
/**
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgs
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgs
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDLabels
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDLabelsID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDSecrets
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsIDSecrets
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDSecrets
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDMembers
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDMembersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDOwners
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDOwnersID
 * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLogs
 */
export class OrgsAPI extends APIBase {
  /**
   * Creates OrgsAPI from an influxDB object.
   */
  constructor(influxDB: any) {
    super(influxDB)
  }
  /**
   * List all organizations.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgs
   */
  getOrgs(
    request?: GetOrgsRequest,
    requestOptions?: RequestOptions
  ): Promise<Organizations> {
    return this.request(
      'GET',
      `/api/v2/orgs${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
  /**
   * Create an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgs
   */
  postOrgs(
    request: PostOrgsRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.request(
      'POST',
      `/api/v2/orgs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve an organization.
   * @param orgID The ID of the organization to get.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsID
   */
  getOrgsID(
    orgID: string,
    request?: GetOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.request('GET', `/api/v2/orgs/${orgID}`, request, requestOptions)
  }
  /**
   * Update an organization.
   * @param orgID The ID of the organization to get.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsID
   */
  patchOrgsID(
    orgID: string,
    request: PatchOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.request(
      'PATCH',
      `/api/v2/orgs/${orgID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete an organization.
   * @param orgID The ID of the organization to delete.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsID
   */
  deleteOrgsID(
    orgID: string,
    request?: DeleteOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${orgID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLabels
   */
  getOrgsIDLabels(
    orgID: string,
    request?: GetOrgsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/orgs/${orgID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDLabels
   */
  postOrgsIDLabels(
    orgID: string,
    request: PostOrgsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/orgs/${orgID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from an organization.
   * @param orgID The organization ID.
   * @param labelID The label ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDLabelsID
   */
  deleteOrgsIDLabelsID(
    orgID: string,
    labelID: string,
    request?: DeleteOrgsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${orgID}/labels/${labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all secret keys for an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDSecrets
   */
  getOrgsIDSecrets(
    orgID: string,
    request?: GetOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<SecretKeysResponse> {
    return this.request(
      'GET',
      `/api/v2/orgs/${orgID}/secrets`,
      request,
      requestOptions
    )
  }
  /**
   * Update secrets in an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsIDSecrets
   */
  patchOrgsIDSecrets(
    orgID: string,
    request: PatchOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'PATCH',
      `/api/v2/orgs/${orgID}/secrets`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete secrets from an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDSecrets
   */
  postOrgsIDSecrets(
    orgID: string,
    request: PostOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'POST',
      `/api/v2/orgs/${orgID}/secrets/delete`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * List all members of an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDMembers
   */
  getOrgsIDMembers(
    orgID: string,
    request?: GetOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/orgs/${orgID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDMembers
   */
  postOrgsIDMembers(
    orgID: string,
    request: PostOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/orgs/${orgID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from an organization.
   * @param userID The ID of the member to remove.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDMembersID
   */
  deleteOrgsIDMembersID(
    userID: string,
    orgID: string,
    request?: DeleteOrgsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${orgID}/members/${userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDOwners
   */
  getOrgsIDOwners(
    orgID: string,
    request?: GetOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/orgs/${orgID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDOwners
   */
  postOrgsIDOwners(
    orgID: string,
    request: PostOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/orgs/${orgID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from an organization.
   * @param userID The ID of the owner to remove.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDOwnersID
   */
  deleteOrgsIDOwnersID(
    userID: string,
    orgID: string,
    request?: DeleteOrgsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${orgID}/owners/${userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve operation logs for an organization.
   * @param orgID The organization ID.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLogs
   */
  getOrgsIDLogs(
    orgID: string,
    request?: GetOrgsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/orgs/${orgID}/logs${this.queryString(request)}`,
      request,
      requestOptions
    )
  }
}
