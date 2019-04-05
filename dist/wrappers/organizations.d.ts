import { AddResourceMemberRequestBody, Organization, ResourceMember, ResourceOwner } from '../api';
export default class {
    private service;
    constructor(basePath: string);
    get(id: string): Promise<Organization>;
    getAll(): Promise<Organization[]>;
    create(org: Organization): Promise<Organization>;
    delete(id: string): Promise<Response>;
    update(id: string, org: Partial<Organization>): Promise<Organization>;
    members(id: string): Promise<ResourceMember[]>;
    owners(id: string): Promise<ResourceOwner[]>;
    createOwner(id: string, user: AddResourceMemberRequestBody): Promise<ResourceOwner>;
    addMember(id: string, user: AddResourceMemberRequestBody): Promise<ResourceMember>;
    removeMember(orgID: string, userID: string): Promise<Response>;
}
