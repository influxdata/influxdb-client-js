import {InfluxDB} from '@influxdata/influxdb-client'
import {APIBase, RequestOptions} from '../APIBase'
import {
  AddResourceMemberRequestBody,
  CloudUsers,
  Invite,
  LabelMapping,
  LabelResponse,
  LabelsResponse,
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
  /** Filter organizations to a specific user ID. */
  userID?: string
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
export interface PostOrgsIDInvitesRequest {
  /** The organization ID. */
  orgID: string
  /** Invite to be sent */
  body: Invite
}
export interface DeleteOrgsIDInviteIDRequest {
  /** The ID of the invite to remove. */
  inviteID: string
  /** The organization ID. */
  orgID: string
}
export interface PostOrgsIDInviteIDRequest {
  /** The ID of the invite to resend. */
  inviteID: string
  /** The organization ID. */
  orgID: string
}
export interface GetCloudUsersRequest {
  /** Specifies the organization ID of the CloudUser. */
  orgID: string
}
export interface DeleteOrgsIDCloudUserIDRequest {
  /** The ID of the user to remove. */
  userID: string
  /** The organization ID. */
  orgID: string
}
export interface DeleteOrgsIDOwnersIDRequest {
  /** The ID of the owner to remove. */
  userID: string
  /** The organization ID. */
  orgID: string
}
/**
 * See
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgs
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDLabels
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDLabelsID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDSecrets
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsIDSecrets
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDSecrets
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDMembers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDMembersID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDOwners
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDInvites
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDInviteID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDInviteID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/GetCloudUsers
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDCloudUserID
 * * https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDOwnersID
 */
export class OrgsAPI {
  // internal
  private base: APIBase

  /**
   * Creates OrgsAPI
   * @param influxDB - an instance that knows how to communicate with InfluxDB server
   */
  constructor(influxDB: InfluxDB) {
    this.base = new APIBase(influxDB)
  }
  /**
   * List all organizations.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgs
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getOrgs(
    request?: GetOrgsRequest,
    requestOptions?: RequestOptions
  ): Promise<Organizations> {
    return this.base.request(
      'GET',
      `/api/v2/orgs${this.base.queryString(request, [
        'org',
        'orgID',
        'userID',
      ])}`,
      request,
      requestOptions
    )
  }
  /**
   * Create an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgs
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postOrgs(
    request: PostOrgsRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.base.request(
      'POST',
      `/api/v2/orgs`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Retrieve an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getOrgsID(
    request: GetOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions
    )
  }
  /**
   * Update an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  patchOrgsID(
    request: PatchOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Organization> {
    return this.base.request(
      'PATCH',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteOrgsID(
    request: DeleteOrgsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all labels for a organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDLabels
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getOrgsIDLabels(
    request: GetOrgsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelsResponse> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/labels`,
      request,
      requestOptions
    )
  }
  /**
   * Add a label to an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDLabels
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postOrgsIDLabels(
    request: PostOrgsIDLabelsRequest,
    requestOptions?: RequestOptions
  ): Promise<LabelResponse> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/labels`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete a label from an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDLabelsID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteOrgsIDLabelsID(
    request: DeleteOrgsIDLabelsIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/labels/${request.labelID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all secret keys for an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDSecrets
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getOrgsIDSecrets(
    request: GetOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<SecretKeysResponse> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/secrets`,
      request,
      requestOptions
    )
  }
  /**
   * Update secrets in an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PatchOrgsIDSecrets
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  patchOrgsIDSecrets(
    request: PatchOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'PATCH',
      `/api/v2/orgs/${request.orgID}/secrets`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Delete secrets from an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDSecrets
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postOrgsIDSecrets(
    request: PostOrgsIDSecretsRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/secrets/delete`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * List all members of an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDMembers
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getOrgsIDMembers(
    request: GetOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMembers> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/members`,
      request,
      requestOptions
    )
  }
  /**
   * Add a member to an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDMembers
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postOrgsIDMembers(
    request: PostOrgsIDMembersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceMember> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/members`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove a member from an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDMembersID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteOrgsIDMembersID(
    request: DeleteOrgsIDMembersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/members/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * List all owners of an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetOrgsIDOwners
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getOrgsIDOwners(
    request: GetOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwners> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/owners`,
      request,
      requestOptions
    )
  }
  /**
   * Add an owner to an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDOwners
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postOrgsIDOwners(
    request: PostOrgsIDOwnersRequest,
    requestOptions?: RequestOptions
  ): Promise<ResourceOwner> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/owners`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Creates an invite to an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDInvites
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postOrgsIDInvites(
    request: PostOrgsIDInvitesRequest,
    requestOptions?: RequestOptions
  ): Promise<Invite> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/invites`,
      request,
      requestOptions,
      'application/json'
    )
  }
  /**
   * Remove an invite to an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDInviteID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteOrgsIDInviteID(
    request: DeleteOrgsIDInviteIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/invites/${request.inviteID}`,
      request,
      requestOptions
    )
  }
  /**
   * Resends an invite.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/PostOrgsIDInviteID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  postOrgsIDInviteID(
    request: PostOrgsIDInviteIDRequest,
    requestOptions?: RequestOptions
  ): Promise<Invite> {
    return this.base.request(
      'POST',
      `/api/v2/orgs/${request.orgID}/invites/${request.inviteID}/resend`,
      request,
      requestOptions
    )
  }
  /**
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/GetCloudUsers
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  getCloudUsers(
    request: GetCloudUsersRequest,
    requestOptions?: RequestOptions
  ): Promise<CloudUsers> {
    return this.base.request(
      'GET',
      `/api/v2/orgs/${request.orgID}/users`,
      request,
      requestOptions
    )
  }
  /**
   * Deletes a cloud user.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDCloudUserID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteOrgsIDCloudUserID(
    request: DeleteOrgsIDCloudUserIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/users/${request.userID}`,
      request,
      requestOptions
    )
  }
  /**
   * Remove an owner from an organization.
   * See https://v2.docs.influxdata.com/v2.0/api/#operation/DeleteOrgsIDOwnersID
   * @param request - request parameters and body (if supported)
   * @returns promise of response
   */
  deleteOrgsIDOwnersID(
    request: DeleteOrgsIDOwnersIDRequest,
    requestOptions?: RequestOptions
  ): Promise<void> {
    return this.base.request(
      'DELETE',
      `/api/v2/orgs/${request.orgID}/owners/${request.userID}`,
      request,
      requestOptions
    )
  }
}
