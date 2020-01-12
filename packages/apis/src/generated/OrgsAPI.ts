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
  /** Filter organizations to a specific organization name. */
  org?: string
  /** Filter organizations to a specific organization ID. */
  orgID?: string
}
export interface PostOrgsRequest {
  /** Organization to create */
  body: Organization
}
export interface GetOrgsIDRequest {
  /** The ID of the organization to get. */
  orgID: string
}
export interface PatchOrgsIDRequest {
  /** The ID of the organization to get. */
  orgID: string
  /** Organization update to apply */
  body: Organization
}
export interface DeleteOrgsIDRequest {
  /** The ID of the organization to delete. */
  orgID: string
}
export interface GetOrgsIDLabelsRequest {
  /** The organization ID. */
  orgID: string
}
export interface PostOrgsIDLabelsRequest {
  /** The organization ID. */
  orgID: string
  /** Label to add */
  body: LabelMapping
}
export interface DeleteOrgsIDLabelsIDRequest {
  /** The organization ID. */
  orgID: string
  /** The label ID. */
  labelID: string
}
export interface GetOrgsIDSecretsRequest {
  /** The organization ID. */
  orgID: string
}
export interface PatchOrgsIDSecretsRequest {
  /** The organization ID. */
  orgID: string
  /** Secret key value pairs to update/add */
  body: Secrets
}
export interface PostOrgsIDSecretsRequest {
  /** The organization ID. */
  orgID: string
  /** Secret key to delete */
  body: SecretKeys
}
export interface GetOrgsIDMembersRequest {
  /** The organization ID. */
  orgID: string
}
export interface PostOrgsIDMembersRequest {
  /** The organization ID. */
  orgID: string
  /** User to add as member */
  body: AddResourceMemberRequestBody
}
export interface DeleteOrgsIDMembersIDRequest {
  /** The ID of the member to remove. */
  userID: string
  /** The organization ID. */
  orgID: string
}
export interface GetOrgsIDOwnersRequest {
  /** The organization ID. */
  orgID: string
}
export interface PostOrgsIDOwnersRequest {
  /** The organization ID. */
  orgID: string
  /** User to add as owner */
  body: AddResourceMemberRequestBody
}
export interface DeleteOrgsIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The organization ID. */
  orgID: string
}
export interface GetOrgsIDLogsRequest {
  /** The organization ID. */
  orgID: string
  offset?: number
  limit?: number
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
      `/api/v2/orgs${this.queryString(request, ['org', 'orgID'])}`,
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
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsID
   */
  getOrgsID(
    request: GetOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.request(
      'GET',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsID
   */
  patchOrgsID(
    request: PatchOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.request(
      'PATCH',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsID
   */
  deleteOrgsID(
    request: DeleteOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLabels
   */
  getOrgsIDLabels(
    request: GetOrgsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDLabels
   */
  postOrgsIDLabels(
    request: PostOrgsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDLabelsID
   */
  deleteOrgsIDLabelsID(
    request: DeleteOrgsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all secret keys for an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDSecrets
   */
  getOrgsIDSecrets(
    request: GetOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<SecretKeysResponse> {
    return this.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/secrets`,
      request,
      requestOptions
    )
  }
  /**
   * Update secrets in an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsIDSecrets
   */
  patchOrgsIDSecrets(
    request: PatchOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'PATCH',
      `/api/v2/orgs/${request.orgID}/secrets`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete secrets from an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDSecrets
   */
  postOrgsIDSecrets(
    request: PostOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/secrets/delete`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * List all members of an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDMembers
   */
  getOrgsIDMembers(
    request: GetOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDMembers
   */
  postOrgsIDMembers(
    request: PostOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDMembersID
   */
  deleteOrgsIDMembersID(
    request: DeleteOrgsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDOwners
   */
  getOrgsIDOwners(
    request: GetOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDOwners
   */
  postOrgsIDOwners(
    request: PostOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an owner from an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDOwnersID
   */
  deleteOrgsIDOwnersID(
    request: DeleteOrgsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Retrieve operation logs for an organization.
   * @param request
   * @return promise of response
   * @see https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLogs
   */
  getOrgsIDLogs(
    request: GetOrgsIDLogsRequest,
    requestOptions?: RequestOptions
  ): Promise<OperationLogs> {
    return this.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/logs${this.queryString(request, [
        'offset',
        'limit',
      ])}`,
      request,
      requestOptions
    )
  }
}
