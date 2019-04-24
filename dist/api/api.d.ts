/// <reference path="../../src/api/custom.d.ts" />
import { Configuration } from "./configuration";
import { AxiosPromise, AxiosInstance } from 'axios';
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
export interface RequestArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    protected basePath: string;
    protected axios: AxiosInstance;
    protected configuration: Configuration | undefined;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance);
}
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
export interface ASTResponse {
    ast?: Package;
}
export interface AddResourceMemberRequestBody {
    id: string;
    name?: string;
}
export interface AnalyzeQueryResponse {
    errors?: Array<AnalyzeQueryResponseErrors>;
}
export interface AnalyzeQueryResponseErrors {
    line?: number;
    column?: number;
    character?: number;
    message?: string;
}
export interface ArrayExpression {
    type?: string;
    elements?: Array<Expression>;
}
export interface Authorization extends AuthorizationUpdateRequest {
    orgID?: string;
    permissions?: Array<Permission>;
    id?: string;
    token?: string;
    userID?: string;
    user?: string;
    org?: string;
    links?: any;
}
export declare namespace Authorization {
}
export interface AuthorizationUpdateRequest {
    status?: AuthorizationUpdateRequest.StatusEnum;
    description?: string;
}
export declare namespace AuthorizationUpdateRequest {
    enum StatusEnum {
        Active = "active",
        Inactive = "inactive"
    }
}
export interface Authorizations {
    links?: Links;
    authorizations?: Array<Authorization>;
}
export interface Axis {
    bounds?: Array<number>;
    label?: string;
    prefix?: string;
    suffix?: string;
    base?: string;
    scale?: string;
}
export interface BadStatement {
    type?: string;
    text?: string;
}
export interface BinaryExpression {
    type?: string;
    operator?: string;
    left?: Expression;
    right?: Expression;
}
export interface Block {
    type?: string;
    body?: Array<Statement>;
}
export interface BooleanLiteral {
    type?: string;
    value?: boolean;
}
export interface Bucket {
    links?: BucketLinks;
    id?: string;
    name: string;
    organizationID?: string;
    organization?: string;
    rp?: string;
    retentionRules: Array<BucketRetentionRules>;
    labels?: Array<Label>;
}
export interface BucketLinks {
    labels?: string;
    logs?: string;
    members?: string;
    org?: string;
    owners?: string;
    self?: string;
    write?: string;
}
export interface BucketRetentionRules {
    type: BucketRetentionRules.TypeEnum;
    everySeconds: number;
}
export declare namespace BucketRetentionRules {
    enum TypeEnum {
        Expire = "expire"
    }
}
export interface Buckets {
    links?: Links;
    buckets?: Array<Bucket>;
}
export interface BuiltinStatement {
    type?: string;
    id?: Identifier;
}
export interface CallExpression {
    type?: string;
    callee?: Expression;
    arguments?: Array<Expression>;
}
export interface Cell {
    id?: string;
    links?: CellLinks;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    viewID?: string;
}
export interface CellLinks {
    self?: string;
    view?: string;
}
export interface CellUpdate {
    name?: string;
}
export interface Check {
    name: string;
    message?: string;
    checks?: Array<Check>;
    status: Check.StatusEnum;
}
export declare namespace Check {
    enum StatusEnum {
        Pass = "pass",
        Fail = "fail"
    }
}
export interface ConditionalExpression {
    type?: string;
    test?: Expression;
    alternate?: Expression;
    consequent?: Expression;
}
export interface ConstantVariableProperties {
    type?: ConstantVariableProperties.TypeEnum;
    values?: Array<string>;
}
export declare namespace ConstantVariableProperties {
    enum TypeEnum {
        Constant = "constant"
    }
}
export interface CreateCell {
    name?: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    viewID?: string;
    usingView?: string;
}
export interface CreateDashboardRequest {
    orgID: string;
    name: string;
    description?: string;
}
export interface Dashboard extends CreateDashboardRequest {
    links?: any;
    id?: string;
    meta?: any;
    cells?: Array<Cell>;
    labels?: Array<Label>;
}
export interface DashboardColor {
    id?: string;
    type?: DashboardColor.TypeEnum;
    hex?: string;
    name?: string;
    value?: string;
}
export declare namespace DashboardColor {
    enum TypeEnum {
        Min = "min",
        Max = "max",
        Threshold = "threshold"
    }
}
export interface DashboardQuery {
    label?: string;
    range?: DashboardQueryRange;
    query: string;
    source?: string;
    queryConfig?: QueryConfig;
}
export interface DashboardQueryRange {
    upper: number;
    lower: number;
}
export interface Dashboards {
    links?: Links;
    dashboards?: Array<Dashboard>;
}
export interface DateTimeLiteral {
    type?: string;
    value?: string;
}
export interface Dialect {
    header?: boolean;
    delimiter?: string;
    annotations?: Array<Dialect.AnnotationsEnum>;
    commentPrefix?: string;
    dateTimeFormat?: Dialect.DateTimeFormatEnum;
}
export declare namespace Dialect {
    enum AnnotationsEnum {
        Group = "group",
        Datatype = "datatype",
        Default = "default"
    }
    enum DateTimeFormatEnum {
        RFC3339 = "RFC3339",
        RFC3339Nano = "RFC3339Nano"
    }
}
export interface Document {
    id: string;
    meta: DocumentMeta;
    content: any;
    labels?: Array<Label>;
    links?: DocumentLinks;
}
export interface DocumentCreate {
    meta: DocumentMeta;
    content: any;
    org?: string;
    orgID?: string;
    labels?: Array<string>;
}
export interface DocumentLinks {
    self?: string;
}
export interface DocumentListEntry {
    id: string;
    meta: DocumentMeta;
    labels?: Array<Label>;
    links?: DocumentLinks;
}
export interface DocumentMeta {
    name: string;
    version: string;
}
export interface DocumentUpdate {
    meta?: DocumentMeta;
    content?: any;
}
export interface Documents {
    documents?: Array<DocumentListEntry>;
}
export interface Duration {
    type?: string;
    magnitude?: number;
    unit?: string;
}
export interface DurationLiteral {
    type?: string;
    values?: Array<Duration>;
}
export interface EmptyViewProperties {
    type?: EmptyViewProperties.TypeEnum;
}
export declare namespace EmptyViewProperties {
    enum TypeEnum {
        Empty = "empty"
    }
}
export interface Expression {
}
export interface ExpressionStatement {
    type?: string;
    expression?: Expression;
}
export interface Field {
    value?: string;
    type?: Field.TypeEnum;
    alias?: string;
    args?: Array<Field>;
}
export declare namespace Field {
    enum TypeEnum {
        Func = "func",
        Field = "field",
        Integer = "integer",
        Number = "number",
        Regex = "regex",
        Wildcard = "wildcard"
    }
}
export interface FloatLiteral {
    type?: string;
    value?: number;
}
export interface FluxSuggestions {
    funcs?: FluxSuggestionsFuncs;
}
export interface FluxSuggestionsFuncs {
    name?: string;
    params?: any;
}
export interface FunctionExpression {
    type?: string;
    params?: Array<Property>;
    body?: Node;
}
export interface Identifier {
    type?: string;
    name?: string;
}
export interface ImportDeclaration {
    type?: string;
    as?: Identifier;
    path?: StringLiteral;
}
export interface IndexExpression {
    type?: string;
    array?: Expression;
    index?: Expression;
}
export interface IntegerLiteral {
    type?: string;
    value?: string;
}
export interface IsOnboarding {
    allowed?: boolean;
}
export interface Label {
    id?: string;
    orgID?: string;
    name?: string;
    properties?: {
        [key: string]: string;
    };
}
export interface LabelCreateRequest {
    orgID: string;
    name?: string;
    properties?: {
        [key: string]: string;
    };
}
export interface LabelMapping {
    labelID?: string;
}
export interface LabelResponse {
    label?: Label;
    links?: Links;
}
export interface LabelUpdate {
    name?: string;
    properties?: any;
}
export interface LabelsResponse {
    labels?: Array<Label>;
    links?: Links;
}
export interface LanguageRequest {
    query: string;
}
export interface LineProtocolError {
    code: LineProtocolError.CodeEnum;
    message: string;
    op: string;
    err: string;
    line?: number;
}
export declare namespace LineProtocolError {
    enum CodeEnum {
        InternalError = "internal error",
        NotFound = "not found",
        Conflict = "conflict",
        Invalid = "invalid",
        EmptyValue = "empty value",
        Unavailable = "unavailable"
    }
}
export interface LineProtocolLengthError {
    code: LineProtocolLengthError.CodeEnum;
    message: string;
    maxLength: number;
}
export declare namespace LineProtocolLengthError {
    enum CodeEnum {
        Invalid = "invalid"
    }
}
export interface Links {
    next?: string;
    self: string;
    prev?: string;
}
export interface LogEvent {
    time?: Date;
    message?: string;
}
export interface LogViewProperties {
    shape: LogViewProperties.ShapeEnum;
    type: LogViewProperties.TypeEnum;
    columns: Array<LogViewerColumn>;
}
export declare namespace LogViewProperties {
    enum ShapeEnum {
        ChronografV2 = "chronograf-v2"
    }
    enum TypeEnum {
        LogViewer = "log-viewer"
    }
}
export interface LogViewerColumn {
    name: string;
    position: number;
    settings: Array<LogViewerColumnSettings>;
}
export interface LogViewerColumnSettings {
    type: string;
    value: string;
    name?: string;
}
export interface LogicalExpression {
    type?: string;
    operator?: string;
    left?: Expression;
    right?: Expression;
}
export interface Logs {
    events?: Array<LogEvent>;
}
export interface MapVariableProperties {
    type?: MapVariableProperties.TypeEnum;
    values?: {
        [key: string]: string;
    };
}
export declare namespace MapVariableProperties {
    enum TypeEnum {
        Map = "map"
    }
}
export interface MemberAssignment {
    type?: string;
    member?: MemberExpression;
    init?: Expression;
}
export interface MemberExpression {
    type?: string;
    object?: Expression;
    property?: PropertyKey;
}
export interface ModelError {
    code: ModelError.CodeEnum;
    message: string;
    op?: string;
    err?: string;
}
export declare namespace ModelError {
    enum CodeEnum {
        InternalError = "internal error",
        NotFound = "not found",
        Conflict = "conflict",
        Invalid = "invalid",
        UnprocessableEntity = "unprocessable entity",
        EmptyValue = "empty value",
        Unavailable = "unavailable",
        Forbidden = "forbidden",
        Unauthorized = "unauthorized",
        MethodNotAllowed = "method not allowed"
    }
}
export interface ModelFile {
    type?: string;
    name?: string;
    _package?: PackageClause;
    imports?: Array<ImportDeclaration>;
    body?: Array<Statement>;
}
export interface Node {
}
export interface ObjectExpression {
    type?: string;
    properties?: Array<Property>;
}
export interface OnboardingRequest {
    username: string;
    password: string;
    org: string;
    bucket: string;
    retentionPeriodHrs?: number;
}
export interface OnboardingResponse {
    user?: User;
    org?: Organization;
    bucket?: Bucket;
    auth?: Authorization;
}
export interface OperationLog {
    description?: string;
    time?: Date;
    links?: OperationLogLinks;
}
export interface OperationLogLinks {
    user?: string;
}
export interface OperationLogs {
    logs?: Array<OperationLog>;
    links?: Links;
}
export interface OptionStatement {
    type?: string;
    assignment?: any;
}
export interface Organization {
    links?: OrganizationLinks;
    id?: string;
    name: string;
    status?: Organization.StatusEnum;
}
export declare namespace Organization {
    enum StatusEnum {
        Active = "active",
        Inactive = "inactive"
    }
}
export interface OrganizationLinks {
    self?: string;
    members?: string;
    owners?: string;
    labels?: string;
    secrets?: string;
    buckets?: string;
    tasks?: string;
    dashboards?: string;
    logs?: string;
}
export interface Organizations {
    links?: Links;
    orgs?: Array<Organization>;
}
export interface Package {
    type?: string;
    path?: string;
    _package?: string;
    files?: Array<any>;
}
export interface PackageClause {
    type?: string;
    name?: Identifier;
}
export interface PasswordResetBody {
    password: string;
}
export interface Permission {
    action: Permission.ActionEnum;
    resource: PermissionResource;
}
export declare namespace Permission {
    enum ActionEnum {
        Read = "read",
        Write = "write"
    }
}
export interface PermissionResource {
    type: PermissionResource.TypeEnum;
    id?: string;
    name?: string;
    orgID?: string;
    org?: string;
}
export declare namespace PermissionResource {
    enum TypeEnum {
        Authorizations = "authorizations",
        Buckets = "buckets",
        Dashboards = "dashboards",
        Orgs = "orgs",
        Sources = "sources",
        Tasks = "tasks",
        Telegrafs = "telegrafs",
        Users = "users",
        Variables = "variables",
        Scrapers = "scrapers",
        Secrets = "secrets",
        Labels = "labels",
        Views = "views",
        Documents = "documents"
    }
}
export interface PipeExpression {
    type?: string;
    argument?: Expression;
    call?: CallExpression;
}
export interface PipeLiteral {
    type?: string;
}
export interface Property {
    type?: string;
    key?: PropertyKey;
    value?: Expression;
}
export interface PropertyKey {
}
export interface Query {
    extern?: any;
    query: string;
    spec?: QuerySpecification;
    type?: Query.TypeEnum;
    db?: string;
    rp?: string;
    cluster?: string;
    dialect?: Dialect;
}
export declare namespace Query {
    enum TypeEnum {
        Flux = "flux",
        Influxql = "influxql"
    }
}
export interface QueryConfig {
    id?: string;
    database: string;
    measurement: string;
    retentionPolicy: string;
    areTagsAccepted: boolean;
    rawText?: string;
    tags: any;
    groupBy: QueryConfigGroupBy;
    fields: Array<Field>;
    range?: QueryConfigRange;
}
export interface QueryConfigGroupBy {
    time: string;
    tags: Array<string>;
}
export interface QueryConfigRange {
    lower: string;
    upper: string;
}
export interface QuerySpecification {
    operations?: Array<QuerySpecificationOperations>;
    edges?: Array<QuerySpecificationEdges>;
    resources?: QuerySpecificationResources;
    dialect?: Dialect;
}
export interface QuerySpecificationEdges {
    parent?: string;
    child?: string;
}
export interface QuerySpecificationOperations {
    kind?: string;
    id?: string;
    spec?: any;
}
export interface QuerySpecificationResources {
    priority?: any;
    concurrencyQuota?: number;
    memoryBytesQuota?: number;
}
export interface QueryVariableProperties {
    type?: QueryVariableProperties.TypeEnum;
    values?: QueryVariablePropertiesValues;
}
export declare namespace QueryVariableProperties {
    enum TypeEnum {
        Query = "query"
    }
}
export interface QueryVariablePropertiesValues {
    query?: string;
    language?: string;
}
export interface Ready {
    status?: Ready.StatusEnum;
    started?: Date;
    up?: string;
}
export declare namespace Ready {
    enum StatusEnum {
        Ready = "ready"
    }
}
export interface RegexpLiteral {
    type?: string;
    value?: string;
}
export interface RenamableField {
    internalName?: string;
    displayName?: string;
    visible?: boolean;
}
export interface ResourceMember extends User {
    role?: ResourceMember.RoleEnum;
}
export declare namespace ResourceMember {
    enum RoleEnum {
        Member = "member"
    }
}
export interface ResourceMembers {
    links?: UsersLinks;
    users?: Array<ResourceMember>;
}
export interface ResourceOwner extends User {
    role?: ResourceOwner.RoleEnum;
}
export declare namespace ResourceOwner {
    enum RoleEnum {
        Owner = "owner"
    }
}
export interface ResourceOwners {
    links?: UsersLinks;
    users?: Array<ResourceOwner>;
}
export interface ReturnStatement {
    type?: string;
    argument?: Expression;
}
export interface Routes {
    authorizations?: string;
    buckets?: string;
    dashboards?: string;
    external?: RoutesExternal;
    variables?: string;
    me?: string;
    orgs?: string;
    query?: RoutesQuery;
    setup?: string;
    signin?: string;
    signout?: string;
    sources?: string;
    system?: RoutesSystem;
    tasks?: string;
    telegrafs?: string;
    users?: string;
    write?: string;
}
export interface RoutesExternal {
    statusFeed?: string;
}
export interface RoutesQuery {
    self?: string;
    ast?: string;
    analyze?: string;
    spec?: string;
    suggestions?: string;
}
export interface RoutesSystem {
    metrics?: string;
    debug?: string;
    health?: string;
}
export interface Run {
    id?: string;
    taskID?: string;
    status?: Run.StatusEnum;
    scheduledFor?: Date;
    startedAt?: Date;
    finishedAt?: Date;
    requestedAt?: Date;
    links?: RunLinks;
}
export declare namespace Run {
    enum StatusEnum {
        Scheduled = "scheduled",
        Started = "started",
        Failed = "failed",
        Success = "success",
        Canceled = "canceled"
    }
}
export interface RunLinks {
    self?: string;
    task?: string;
    logs?: string;
    retry?: string;
}
export interface RunManually {
    scheduledFor?: Date;
}
export interface Runs {
    links?: Links;
    runs?: Array<Run>;
}
export interface ScraperTargetRequest {
    name?: string;
    type?: ScraperTargetRequest.TypeEnum;
    url?: string;
    orgID?: string;
    bucketID?: string;
}
export declare namespace ScraperTargetRequest {
    enum TypeEnum {
        Prometheus = "prometheus"
    }
}
export interface ScraperTargetResponse extends ScraperTargetRequest {
    id?: string;
    organization?: string;
    bucket?: string;
    links?: any;
}
export declare namespace ScraperTargetResponse {
}
export interface ScraperTargetResponses {
    configurations?: Array<ScraperTargetResponse>;
}
export interface SecretKeys {
    secrets?: Array<string>;
}
export interface SecretKeysResponse extends SecretKeys {
    links?: any;
}
export interface Source {
    links?: SourceLinks;
    id?: string;
    orgID?: string;
    _default?: boolean;
    name?: string;
    type?: Source.TypeEnum;
    url?: string;
    insecureSkipVerify?: boolean;
    telegraf?: string;
    token?: string;
    username?: string;
    password?: string;
    sharedSecret?: string;
    metaUrl?: string;
    defaultRP?: string;
    languages?: Array<Source.LanguagesEnum>;
}
export declare namespace Source {
    enum TypeEnum {
        V1 = "v1",
        V2 = "v2",
        Self = "self"
    }
    enum LanguagesEnum {
        Flux = "flux",
        Influxql = "influxql",
        Spec = "spec"
    }
}
export interface SourceLinks {
    self?: string;
    query?: string;
    health?: string;
    buckets?: string;
}
export interface Sources {
    links?: UsersLinks;
    sources?: Array<Source>;
}
export interface Statement {
}
export interface StringLiteral {
    type?: string;
    value?: string;
}
export interface Task {
    id: string;
    orgID: string;
    org?: string;
    name: string;
    status?: Task.StatusEnum;
    labels?: Array<Label>;
    authorizationID?: string;
    flux: string;
    every?: string;
    cron?: string;
    offset?: string;
    latestCompleted?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    links?: TaskLinks;
}
export declare namespace Task {
    enum StatusEnum {
        Active = "active",
        Inactive = "inactive"
    }
}
export interface TaskCreateRequest {
    orgID?: string;
    org?: string;
    status?: TaskCreateRequest.StatusEnum;
    flux: string;
    token?: string;
}
export declare namespace TaskCreateRequest {
    enum StatusEnum {
        Active = "active",
        Inactive = "inactive"
    }
}
export interface TaskLinks {
    self?: string;
    owners?: string;
    members?: string;
    runs?: string;
    logs?: string;
    labels?: string;
}
export interface TaskUpdateRequest {
    status?: TaskUpdateRequest.StatusEnum;
    flux?: string;
    name?: string;
    every?: string;
    cron?: string;
    offset?: string;
    token?: string;
}
export declare namespace TaskUpdateRequest {
    enum StatusEnum {
        Active = "active",
        Inactive = "inactive"
    }
}
export interface Tasks {
    links?: Links;
    tasks?: Array<Task>;
}
export interface Telegraf extends TelegrafRequest {
    id?: string;
    links?: any;
    labels?: Array<Label>;
}
export interface TelegrafPluginInputCpu {
    name: TelegrafPluginInputCpu.NameEnum;
    type: TelegrafPluginInputCpu.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputCpu {
    enum NameEnum {
        Cpu = "cpu"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputDisk {
    name: TelegrafPluginInputDisk.NameEnum;
    type: TelegrafPluginInputDisk.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputDisk {
    enum NameEnum {
        Disk = "disk"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputDiskio {
    name: TelegrafPluginInputDiskio.NameEnum;
    type: TelegrafPluginInputDiskio.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputDiskio {
    enum NameEnum {
        Diskio = "diskio"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputDocker {
    name: TelegrafPluginInputDocker.NameEnum;
    type: TelegrafPluginInputDocker.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputDockerConfig;
}
export declare namespace TelegrafPluginInputDocker {
    enum NameEnum {
        Docker = "docker"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputDockerConfig {
    endpoint: string;
}
export interface TelegrafPluginInputFile {
    name: TelegrafPluginInputFile.NameEnum;
    type: TelegrafPluginInputFile.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputFileConfig;
}
export declare namespace TelegrafPluginInputFile {
    enum NameEnum {
        File = "file"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputFileConfig {
    files?: Array<string>;
}
export interface TelegrafPluginInputKernel {
    name: TelegrafPluginInputKernel.NameEnum;
    type: TelegrafPluginInputKernel.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputKernel {
    enum NameEnum {
        Kernel = "kernel"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputKubernetes {
    name: TelegrafPluginInputKubernetes.NameEnum;
    type: TelegrafPluginInputKubernetes.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputKubernetesConfig;
}
export declare namespace TelegrafPluginInputKubernetes {
    enum NameEnum {
        Kubernetes = "kubernetes"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputKubernetesConfig {
    url?: string;
}
export interface TelegrafPluginInputLogParser {
    name: TelegrafPluginInputLogParser.NameEnum;
    type: TelegrafPluginInputLogParser.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputLogParserConfig;
}
export declare namespace TelegrafPluginInputLogParser {
    enum NameEnum {
        Logparser = "logparser"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputLogParserConfig {
    files?: Array<string>;
}
export interface TelegrafPluginInputMem {
    name: TelegrafPluginInputMem.NameEnum;
    type: TelegrafPluginInputMem.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputMem {
    enum NameEnum {
        Mem = "mem"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputNet {
    name: TelegrafPluginInputNet.NameEnum;
    type: TelegrafPluginInputNet.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputNet {
    enum NameEnum {
        Net = "net"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputNetResponse {
    name: TelegrafPluginInputNetResponse.NameEnum;
    type: TelegrafPluginInputNetResponse.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputNetResponse {
    enum NameEnum {
        NetResponse = "net_response"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputNginx {
    name: TelegrafPluginInputNginx.NameEnum;
    type: TelegrafPluginInputNginx.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputNginx {
    enum NameEnum {
        Nginx = "nginx"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputProcesses {
    name: TelegrafPluginInputProcesses.NameEnum;
    type: TelegrafPluginInputProcesses.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputProcesses {
    enum NameEnum {
        Processes = "processes"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputProcstat {
    name: TelegrafPluginInputProcstat.NameEnum;
    type: TelegrafPluginInputProcstat.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputProcstatConfig;
}
export declare namespace TelegrafPluginInputProcstat {
    enum NameEnum {
        Procstat = "procstat"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputProcstatConfig {
    exe?: string;
}
export interface TelegrafPluginInputPrometheus {
    name: TelegrafPluginInputPrometheus.NameEnum;
    type: TelegrafPluginInputPrometheus.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputPrometheusConfig;
}
export declare namespace TelegrafPluginInputPrometheus {
    enum NameEnum {
        Prometheus = "prometheus"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputPrometheusConfig {
    urls?: Array<string>;
}
export interface TelegrafPluginInputRedis {
    name: TelegrafPluginInputRedis.NameEnum;
    type: TelegrafPluginInputRedis.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputRedisConfig;
}
export declare namespace TelegrafPluginInputRedis {
    enum NameEnum {
        Redis = "redis"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputRedisConfig {
    servers?: Array<string>;
    password?: string;
}
export interface TelegrafPluginInputSwap {
    name: TelegrafPluginInputSwap.NameEnum;
    type: TelegrafPluginInputSwap.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputSwap {
    enum NameEnum {
        Swap = "swap"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputSyslog {
    name: TelegrafPluginInputSyslog.NameEnum;
    type: TelegrafPluginInputSyslog.TypeEnum;
    comment?: string;
    config: TelegrafPluginInputSyslogConfig;
}
export declare namespace TelegrafPluginInputSyslog {
    enum NameEnum {
        Syslog = "syslog"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputSyslogConfig {
    server?: string;
}
export interface TelegrafPluginInputSystem {
    name: TelegrafPluginInputSystem.NameEnum;
    type: TelegrafPluginInputSystem.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputSystem {
    enum NameEnum {
        System = "system"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginInputTail {
    name: TelegrafPluginInputTail.NameEnum;
    type: TelegrafPluginInputTail.TypeEnum;
    comment?: string;
}
export declare namespace TelegrafPluginInputTail {
    enum NameEnum {
        Tail = "tail"
    }
    enum TypeEnum {
        Input = "input"
    }
}
export interface TelegrafPluginOutputFile {
    name: TelegrafPluginOutputFile.NameEnum;
    type: TelegrafPluginOutputFile.TypeEnum;
    comment?: string;
    config: TelegrafPluginOutputFileConfig;
}
export declare namespace TelegrafPluginOutputFile {
    enum NameEnum {
        File = "file"
    }
    enum TypeEnum {
        Output = "output"
    }
}
export interface TelegrafPluginOutputFileConfig {
    files: Array<TelegrafPluginOutputFileConfigFiles>;
}
export interface TelegrafPluginOutputFileConfigFiles {
    type?: TelegrafPluginOutputFileConfigFiles.TypeEnum;
    path?: string;
}
export declare namespace TelegrafPluginOutputFileConfigFiles {
    enum TypeEnum {
        Stdout = "stdout",
        Path = "path"
    }
}
export interface TelegrafPluginOutputInfluxDBV2 {
    name: TelegrafPluginOutputInfluxDBV2.NameEnum;
    type: TelegrafPluginOutputInfluxDBV2.TypeEnum;
    comment?: string;
    config: TelegrafPluginOutputInfluxDBV2Config;
}
export declare namespace TelegrafPluginOutputInfluxDBV2 {
    enum NameEnum {
        InfluxdbV2 = "influxdb_v2"
    }
    enum TypeEnum {
        Output = "output"
    }
}
export interface TelegrafPluginOutputInfluxDBV2Config {
    urls: Array<string>;
    token: string;
    organization: string;
    bucket: string;
}
export interface TelegrafRequest {
    name?: string;
    description?: string;
    agent?: TelegrafRequestAgent;
    plugins?: Array<TelegrafRequestPlugin>;
    organizationID?: string;
}
export interface TelegrafRequestAgent {
    collectionInterval?: number;
}
export interface TelegrafRequestPlugin {
}
export declare namespace TelegrafRequestPlugin {
}
export interface Telegrafs {
    configurations?: Array<Telegraf>;
}
export interface TestStatement {
    type?: string;
    assignment?: VariableAssignment;
}
export interface UnaryExpression {
    type?: string;
    operator?: string;
    argument?: Expression;
}
export interface UnsignedIntegerLiteral {
    type?: string;
    value?: string;
}
export interface User {
    id?: string;
    name: string;
    status?: User.StatusEnum;
    links?: UserLinks;
}
export declare namespace User {
    enum StatusEnum {
        Active = "active",
        Inactive = "inactive"
    }
}
export interface UserLinks {
    self?: string;
    logs?: string;
}
export interface Users {
    links?: UsersLinks;
    users?: Array<User>;
}
export interface UsersLinks {
    self?: string;
}
export interface V1ViewProperties {
    type?: V1ViewProperties.TypeEnum;
    queries?: Array<DashboardQuery>;
    axes?: V1ViewPropertiesAxes;
    graphType?: V1ViewProperties.GraphTypeEnum;
    colors?: Array<DashboardColor>;
    legend?: V1ViewPropertiesLegend;
    tableOptions?: any;
    fieldOptions?: Array<RenamableField>;
    timeFormat?: string;
    decimalPoints?: V1ViewPropertiesDecimalPoints;
}
export declare namespace V1ViewProperties {
    enum TypeEnum {
        ChronografV1 = "chronograf-v1"
    }
    enum GraphTypeEnum {
        SingleStat = "single-stat",
        Line = "line",
        LinePlusSingleStat = "line-plus-single-stat",
        LineStacked = "line-stacked",
        LineStepplot = "line-stepplot",
        Bar = "bar",
        Gauge = "gauge",
        Table = "table"
    }
}
export interface V1ViewPropertiesAxes {
    x?: Axis;
    y?: Axis;
    y2?: Axis;
}
export interface V1ViewPropertiesDecimalPoints {
    isEnforced?: boolean;
    digits?: number;
}
export interface V1ViewPropertiesLegend {
    type?: V1ViewPropertiesLegend.TypeEnum;
    orientation?: V1ViewPropertiesLegend.OrientationEnum;
}
export declare namespace V1ViewPropertiesLegend {
    enum TypeEnum {
        Static = "static"
    }
    enum OrientationEnum {
        Top = "top",
        Bottom = "bottom",
        Left = "left",
        Right = "right"
    }
}
export interface Variable {
    links?: VariableLinks;
    id?: string;
    orgID: string;
    name: string;
    description?: string;
    selected?: Array<string>;
    labels?: Array<Label>;
    arguments: any;
}
export interface VariableAssignment {
    type?: string;
    id?: Identifier;
    init?: Expression;
}
export interface VariableLinks {
    self?: string;
    org?: string;
    labels?: string;
}
export interface Variables {
    variables?: Array<Variable>;
}
export interface View {
    links?: ViewLinks;
    id?: string;
    name?: string;
    properties?: any;
}
export interface ViewLinks {
    self?: string;
}
export declare enum WritePrecision {
    Ms = "ms",
    S = "s",
    Us = "us",
    Ns = "ns"
}
export declare const AuthorizationsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    authorizationsAuthIDDelete(authID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    authorizationsAuthIDGet(authID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    authorizationsAuthIDPatch(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    authorizationsGet(zapTraceSpan?: string | undefined, userID?: string | undefined, user?: string | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    authorizationsPost(authorization: Authorization, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const AuthorizationsApiFp: (configuration?: Configuration | undefined) => {
    authorizationsAuthIDDelete(authID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    authorizationsAuthIDGet(authID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorization>;
    authorizationsAuthIDPatch(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorization>;
    authorizationsGet(zapTraceSpan?: string | undefined, userID?: string | undefined, user?: string | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorizations>;
    authorizationsPost(authorization: Authorization, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorization>;
};
export declare const AuthorizationsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    authorizationsAuthIDDelete(authID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    authorizationsAuthIDGet(authID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Authorization>;
    authorizationsAuthIDPatch(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Authorization>;
    authorizationsGet(zapTraceSpan?: string | undefined, userID?: string | undefined, user?: string | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<Authorizations>;
    authorizationsPost(authorization: Authorization, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Authorization>;
};
export declare class AuthorizationsApi extends BaseAPI {
    authorizationsAuthIDDelete(authID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    authorizationsAuthIDGet(authID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Authorization>;
    authorizationsAuthIDPatch(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Authorization>;
    authorizationsGet(zapTraceSpan?: string, userID?: string, user?: string, orgID?: string, org?: string, options?: any): AxiosPromise<Authorizations>;
    authorizationsPost(authorization: Authorization, zapTraceSpan?: string, options?: any): AxiosPromise<Authorization>;
}
export declare const BucketsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    bucketsBucketIDDelete(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDLabelsGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDLabelsLabelIDDelete(bucketID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDLabelsPost(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDPatch(bucketID: string, bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsGet(zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, org?: string | undefined, orgID?: string | undefined, name?: string | undefined, options?: any): RequestArgs;
    bucketsPost(bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const BucketsApiFp: (configuration?: Configuration | undefined) => {
    bucketsBucketIDDelete(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    bucketsBucketIDGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Bucket>;
    bucketsBucketIDLabelsGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    bucketsBucketIDLabelsLabelIDDelete(bucketID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    bucketsBucketIDLabelsPost(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    bucketsBucketIDPatch(bucketID: string, bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Bucket>;
    bucketsGet(zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, org?: string | undefined, orgID?: string | undefined, name?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Buckets>;
    bucketsPost(bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Bucket>;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Buckets>;
};
export declare const BucketsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    bucketsBucketIDDelete(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    bucketsBucketIDGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Bucket>;
    bucketsBucketIDLabelsGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    bucketsBucketIDLabelsLabelIDDelete(bucketID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    bucketsBucketIDLabelsPost(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    bucketsBucketIDPatch(bucketID: string, bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Bucket>;
    bucketsGet(zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, org?: string | undefined, orgID?: string | undefined, name?: string | undefined, options?: any): AxiosPromise<Buckets>;
    bucketsPost(bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Bucket>;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Buckets>;
};
export declare class BucketsApi extends BaseAPI {
    bucketsBucketIDDelete(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    bucketsBucketIDGet(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Bucket>;
    bucketsBucketIDLabelsGet(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    bucketsBucketIDLabelsLabelIDDelete(bucketID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    bucketsBucketIDLabelsPost(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    bucketsBucketIDPatch(bucketID: string, bucket: Bucket, zapTraceSpan?: string, options?: any): AxiosPromise<Bucket>;
    bucketsGet(zapTraceSpan?: string, offset?: number, limit?: number, org?: string, orgID?: string, name?: string, options?: any): AxiosPromise<Buckets>;
    bucketsPost(bucket: Bucket, zapTraceSpan?: string, options?: any): AxiosPromise<Bucket>;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string, options?: any): AxiosPromise<Buckets>;
}
export declare const CellsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const CellsApiFp: (configuration?: Configuration | undefined) => {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
};
export declare const CellsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
};
export declare class CellsApi extends BaseAPI {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Array<Cell>, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
}
export declare const DashboardsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDDelete(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDLabelsGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDLabelsLabelIDDelete(dashboardID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDLabelsPost(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDPatch(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsGet(zapTraceSpan?: string | undefined, owner?: string | undefined, sortBy?: "ID" | "CreatedAt" | "UpdatedAt" | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    dashboardsPost(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const DashboardsApiFp: (configuration?: Configuration | undefined) => {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
    dashboardsDashboardIDDelete(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
    dashboardsDashboardIDLabelsGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    dashboardsDashboardIDLabelsLabelIDDelete(dashboardID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDLabelsPost(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDPatch(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
    dashboardsGet(zapTraceSpan?: string | undefined, owner?: string | undefined, sortBy?: "ID" | "CreatedAt" | "UpdatedAt" | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboards>;
    dashboardsPost(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
};
export declare const DashboardsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
    dashboardsDashboardIDDelete(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
    dashboardsDashboardIDLabelsGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    dashboardsDashboardIDLabelsLabelIDDelete(dashboardID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDLabelsPost(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDPatch(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
    dashboardsGet(zapTraceSpan?: string | undefined, owner?: string | undefined, sortBy?: "ID" | "CreatedAt" | "UpdatedAt" | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<Dashboards>;
    dashboardsPost(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
};
export declare class DashboardsApi extends BaseAPI {
    dashboardsDashboardIDCellsCellIDDelete(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDCellsCellIDPatch(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsPost(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    dashboardsDashboardIDCellsPut(dashboardID: string, cell: Array<Cell>, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
    dashboardsDashboardIDDelete(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDGet(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
    dashboardsDashboardIDLabelsGet(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    dashboardsDashboardIDLabelsLabelIDDelete(dashboardID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDLabelsPost(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDPatch(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
    dashboardsGet(zapTraceSpan?: string, owner?: string, sortBy?: 'ID' | 'CreatedAt' | 'UpdatedAt', id?: Array<string>, orgID?: string, org?: string, options?: any): AxiosPromise<Dashboards>;
    dashboardsPost(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
}
export declare const DefaultApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    rootGet(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    signinPost(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    signoutPost(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const DefaultApiFp: (configuration?: Configuration | undefined) => {
    rootGet(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Routes>;
    signinPost(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    signoutPost(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const DefaultApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    rootGet(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Routes>;
    signinPost(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    signoutPost(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
};
export declare class DefaultApi extends BaseAPI {
    rootGet(zapTraceSpan?: string, options?: any): AxiosPromise<Routes>;
    signinPost(zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    signoutPost(zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
}
export declare const HealthApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    healthGet(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const HealthApiFp: (configuration?: Configuration | undefined) => {
    healthGet(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Check>;
};
export declare const HealthApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    healthGet(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Check>;
};
export declare class HealthApi extends BaseAPI {
    healthGet(zapTraceSpan?: string, options?: any): AxiosPromise<Check>;
}
export declare const LabelsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    labelsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    labelsLabelIDDelete(labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    labelsLabelIDGet(labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    labelsLabelIDPatch(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    labelsPost(labelCreateRequest: LabelCreateRequest, options?: any): RequestArgs;
};
export declare const LabelsApiFp: (configuration?: Configuration | undefined) => {
    labelsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    labelsLabelIDDelete(labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    labelsLabelIDGet(labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    labelsLabelIDPatch(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    labelsPost(labelCreateRequest: LabelCreateRequest, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
};
export declare const LabelsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    labelsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    labelsLabelIDDelete(labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    labelsLabelIDGet(labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    labelsLabelIDPatch(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    labelsPost(labelCreateRequest: LabelCreateRequest, options?: any): AxiosPromise<LabelResponse>;
};
export declare class LabelsApi extends BaseAPI {
    labelsGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    labelsLabelIDDelete(labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    labelsLabelIDGet(labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    labelsLabelIDPatch(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    labelsPost(labelCreateRequest: LabelCreateRequest, options?: any): AxiosPromise<LabelResponse>;
}
export declare const OperationLogsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
};
export declare const OperationLogsApiFp: (configuration?: Configuration | undefined) => {
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
};
export declare const OperationLogsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
};
export declare class OperationLogsApi extends BaseAPI {
    bucketsBucketIDLogsGet(bucketID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    dashboardsDashboardIDLogsGet(dashboardID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
}
export declare const OrganizationsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    orgsGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDDelete(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDLabelsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDLabelsLabelIDDelete(orgID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDLabelsPost(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDPatch(orgID: string, organization: Organization, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsPost(organization: Organization, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const OrganizationsApiFp: (configuration?: Configuration | undefined) => {
    orgsGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organizations>;
    orgsOrgIDDelete(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organization>;
    orgsOrgIDLabelsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    orgsOrgIDLabelsLabelIDDelete(orgID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDLabelsPost(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDPatch(orgID: string, organization: Organization, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organization>;
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SecretKeysResponse>;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsPost(organization: Organization, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organization>;
};
export declare const OrganizationsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    orgsGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<Organizations>;
    orgsOrgIDDelete(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Organization>;
    orgsOrgIDLabelsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    orgsOrgIDLabelsLabelIDDelete(orgID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDLabelsPost(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDPatch(orgID: string, organization: Organization, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Organization>;
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<SecretKeysResponse>;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsPost(organization: Organization, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Organization>;
};
export declare class OrganizationsApi extends BaseAPI {
    orgsGet(zapTraceSpan?: string, org?: string, orgID?: string, options?: any): AxiosPromise<Organizations>;
    orgsOrgIDDelete(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Organization>;
    orgsOrgIDLabelsGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    orgsOrgIDLabelsLabelIDDelete(orgID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDLabelsPost(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    orgsOrgIDLogsGet(orgID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDPatch(orgID: string, organization: Organization, zapTraceSpan?: string, options?: any): AxiosPromise<Organization>;
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<SecretKeysResponse>;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsPost(organization: Organization, zapTraceSpan?: string, options?: any): AxiosPromise<Organization>;
}
export declare const QueryApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    queryAnalyzePost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, query?: Query | undefined, options?: any): RequestArgs;
    queryAstPost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): RequestArgs;
    queryPost(zapTraceSpan?: string | undefined, accept?: "text/csv" | "application/vnd.influx.arrow" | undefined, contentType?: "application/json" | "application/vnd.flux" | undefined, org?: string | undefined, orgID?: string | undefined, query?: Query | undefined, options?: any): RequestArgs;
    querySpecPost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): RequestArgs;
    querySuggestionsGet(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    querySuggestionsNameGet(name: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const QueryApiFp: (configuration?: Configuration | undefined) => {
    queryAnalyzePost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, query?: Query | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<AnalyzeQueryResponse>;
    queryAstPost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ASTResponse>;
    queryPost(zapTraceSpan?: string | undefined, accept?: "text/csv" | "application/vnd.influx.arrow" | undefined, contentType?: "application/json" | "application/vnd.flux" | undefined, org?: string | undefined, orgID?: string | undefined, query?: Query | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    querySpecPost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<QuerySpecification>;
    querySuggestionsGet(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<FluxSuggestions>;
    querySuggestionsNameGet(name: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<FluxSuggestions>;
};
export declare const QueryApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    queryAnalyzePost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, query?: Query | undefined, options?: any): AxiosPromise<AnalyzeQueryResponse>;
    queryAstPost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): AxiosPromise<ASTResponse>;
    queryPost(zapTraceSpan?: string | undefined, accept?: "text/csv" | "application/vnd.influx.arrow" | undefined, contentType?: "application/json" | "application/vnd.flux" | undefined, org?: string | undefined, orgID?: string | undefined, query?: Query | undefined, options?: any): AxiosPromise<string>;
    querySpecPost(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): AxiosPromise<QuerySpecification>;
    querySuggestionsGet(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<FluxSuggestions>;
    querySuggestionsNameGet(name: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<FluxSuggestions>;
};
export declare class QueryApi extends BaseAPI {
    queryAnalyzePost(zapTraceSpan?: string, contentType?: 'application/json', query?: Query, options?: any): AxiosPromise<AnalyzeQueryResponse>;
    queryAstPost(zapTraceSpan?: string, contentType?: 'application/json', languageRequest?: LanguageRequest, options?: any): AxiosPromise<ASTResponse>;
    queryPost(zapTraceSpan?: string, accept?: 'text/csv' | 'application/vnd.influx.arrow', contentType?: 'application/json' | 'application/vnd.flux', org?: string, orgID?: string, query?: Query, options?: any): AxiosPromise<string>;
    querySpecPost(zapTraceSpan?: string, contentType?: 'application/json', languageRequest?: LanguageRequest, options?: any): AxiosPromise<QuerySpecification>;
    querySuggestionsGet(zapTraceSpan?: string, options?: any): AxiosPromise<FluxSuggestions>;
    querySuggestionsNameGet(name: string, zapTraceSpan?: string, options?: any): AxiosPromise<FluxSuggestions>;
}
export declare const ReadyApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    readyGet(options?: any): RequestArgs;
};
export declare const ReadyApiFp: (configuration?: Configuration | undefined) => {
    readyGet(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Ready>;
};
export declare const ReadyApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    readyGet(options?: any): AxiosPromise<Ready>;
};
export declare class ReadyApi extends BaseAPI {
    readyGet(options?: any): AxiosPromise<Ready>;
}
export declare const ScraperTargetsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    scrapersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersPost(scraperTargetRequest: ScraperTargetRequest, options?: any): RequestArgs;
    scrapersScraperTargetIDDelete(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDLabelsGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDLabelsLabelIDDelete(scraperTargetID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDLabelsLabelIDPatch(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDLabelsPost(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDPatch(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const ScraperTargetsApiFp: (configuration?: Configuration | undefined) => {
    scrapersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ScraperTargetResponses>;
    scrapersPost(scraperTargetRequest: ScraperTargetRequest, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ScraperTargetResponse>;
    scrapersScraperTargetIDDelete(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    scrapersScraperTargetIDLabelsLabelIDDelete(scraperTargetID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsLabelIDPatch(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsPost(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    scrapersScraperTargetIDPatch(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ScraperTargetResponse>;
};
export declare const ScraperTargetsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    scrapersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ScraperTargetResponses>;
    scrapersPost(scraperTargetRequest: ScraperTargetRequest, options?: any): AxiosPromise<ScraperTargetResponse>;
    scrapersScraperTargetIDDelete(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    scrapersScraperTargetIDLabelsLabelIDDelete(scraperTargetID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsLabelIDPatch(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsPost(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDPatch(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ScraperTargetResponse>;
};
export declare class ScraperTargetsApi extends BaseAPI {
    scrapersGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ScraperTargetResponses>;
    scrapersPost(scraperTargetRequest: ScraperTargetRequest, options?: any): AxiosPromise<ScraperTargetResponse>;
    scrapersScraperTargetIDDelete(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsGet(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    scrapersScraperTargetIDLabelsLabelIDDelete(scraperTargetID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsLabelIDPatch(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDLabelsPost(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDPatch(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string, options?: any): AxiosPromise<ScraperTargetResponse>;
}
export declare const SecretsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const SecretsApiFp: (configuration?: Configuration | undefined) => {
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SecretKeysResponse>;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const SecretsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<SecretKeysResponse>;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
};
export declare class SecretsApi extends BaseAPI {
    orgsOrgIDSecretsDeletePost(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDSecretsGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<SecretKeysResponse>;
    orgsOrgIDSecretsPatch(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
}
export declare const SetupApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    setupGet(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    setupPost(onboardingRequest: OnboardingRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const SetupApiFp: (configuration?: Configuration | undefined) => {
    setupGet(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<IsOnboarding>;
    setupPost(onboardingRequest: OnboardingRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OnboardingResponse>;
};
export declare const SetupApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    setupGet(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<IsOnboarding>;
    setupPost(onboardingRequest: OnboardingRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<OnboardingResponse>;
};
export declare class SetupApi extends BaseAPI {
    setupGet(zapTraceSpan?: string, options?: any): AxiosPromise<IsOnboarding>;
    setupPost(onboardingRequest: OnboardingRequest, zapTraceSpan?: string, options?: any): AxiosPromise<OnboardingResponse>;
}
export declare const SourcesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    sourcesGet(org: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    sourcesPost(source: Source, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    sourcesSourceIDDelete(sourceID: string, options?: any): RequestArgs;
    sourcesSourceIDGet(sourceID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    sourcesSourceIDHealthGet(sourceID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    sourcesSourceIDPatch(sourceID: string, source: Source, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const SourcesApiFp: (configuration?: Configuration | undefined) => {
    sourcesGet(org: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Sources>;
    sourcesPost(source: Source, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Source>;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Buckets>;
    sourcesSourceIDDelete(sourceID: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    sourcesSourceIDGet(sourceID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Source>;
    sourcesSourceIDHealthGet(sourceID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Check>;
    sourcesSourceIDPatch(sourceID: string, source: Source, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Source>;
};
export declare const SourcesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    sourcesGet(org: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Sources>;
    sourcesPost(source: Source, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Source>;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Buckets>;
    sourcesSourceIDDelete(sourceID: string, options?: any): AxiosPromise<Response>;
    sourcesSourceIDGet(sourceID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Source>;
    sourcesSourceIDHealthGet(sourceID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Check>;
    sourcesSourceIDPatch(sourceID: string, source: Source, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Source>;
};
export declare class SourcesApi extends BaseAPI {
    sourcesGet(org: string, zapTraceSpan?: string, options?: any): AxiosPromise<Sources>;
    sourcesPost(source: Source, zapTraceSpan?: string, options?: any): AxiosPromise<Source>;
    sourcesSourceIDBucketsGet(sourceID: string, org: string, zapTraceSpan?: string, options?: any): AxiosPromise<Buckets>;
    sourcesSourceIDDelete(sourceID: string, options?: any): AxiosPromise<Response>;
    sourcesSourceIDGet(sourceID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Source>;
    sourcesSourceIDHealthGet(sourceID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Check>;
    sourcesSourceIDPatch(sourceID: string, source: Source, zapTraceSpan?: string, options?: any): AxiosPromise<Source>;
}
export declare const TasksApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    tasksGet(zapTraceSpan?: string | undefined, after?: string | undefined, user?: string | undefined, org?: string | undefined, orgID?: string | undefined, limit?: number | undefined, options?: any): RequestArgs;
    tasksPost(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDDelete(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDLabelsGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDLabelsLabelIDDelete(taskID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDLabelsPost(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDLogsGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDPatch(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDRunsGet(taskID: string, zapTraceSpan?: string | undefined, after?: string | undefined, limit?: number | undefined, afterTime?: Date | undefined, beforeTime?: Date | undefined, options?: any): RequestArgs;
    tasksTaskIDRunsPost(taskID: string, runManually?: RunManually | undefined, options?: any): RequestArgs;
    tasksTaskIDRunsRunIDGet(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDRunsRunIDLogsGet(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDRunsRunIDRetryPost(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const TasksApiFp: (configuration?: Configuration | undefined) => {
    tasksGet(zapTraceSpan?: string | undefined, after?: string | undefined, user?: string | undefined, org?: string | undefined, orgID?: string | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Tasks>;
    tasksPost(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Task>;
    tasksTaskIDDelete(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    tasksTaskIDGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Task>;
    tasksTaskIDLabelsGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    tasksTaskIDLabelsLabelIDDelete(taskID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    tasksTaskIDLabelsPost(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    tasksTaskIDLogsGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Logs>;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    tasksTaskIDPatch(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Task>;
    tasksTaskIDRunsGet(taskID: string, zapTraceSpan?: string | undefined, after?: string | undefined, limit?: number | undefined, afterTime?: Date | undefined, beforeTime?: Date | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Runs>;
    tasksTaskIDRunsPost(taskID: string, runManually?: RunManually | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Run>;
    tasksTaskIDRunsRunIDGet(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Run>;
    tasksTaskIDRunsRunIDLogsGet(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Logs>;
    tasksTaskIDRunsRunIDRetryPost(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Run>;
};
export declare const TasksApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    tasksGet(zapTraceSpan?: string | undefined, after?: string | undefined, user?: string | undefined, org?: string | undefined, orgID?: string | undefined, limit?: number | undefined, options?: any): AxiosPromise<Tasks>;
    tasksPost(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Task>;
    tasksTaskIDDelete(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    tasksTaskIDGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Task>;
    tasksTaskIDLabelsGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    tasksTaskIDLabelsLabelIDDelete(taskID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    tasksTaskIDLabelsPost(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    tasksTaskIDLogsGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Logs>;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    tasksTaskIDPatch(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Task>;
    tasksTaskIDRunsGet(taskID: string, zapTraceSpan?: string | undefined, after?: string | undefined, limit?: number | undefined, afterTime?: Date | undefined, beforeTime?: Date | undefined, options?: any): AxiosPromise<Runs>;
    tasksTaskIDRunsPost(taskID: string, runManually?: RunManually | undefined, options?: any): AxiosPromise<Run>;
    tasksTaskIDRunsRunIDGet(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Run>;
    tasksTaskIDRunsRunIDLogsGet(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Logs>;
    tasksTaskIDRunsRunIDRetryPost(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Run>;
};
export declare class TasksApi extends BaseAPI {
    tasksGet(zapTraceSpan?: string, after?: string, user?: string, org?: string, orgID?: string, limit?: number, options?: any): AxiosPromise<Tasks>;
    tasksPost(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Task>;
    tasksTaskIDDelete(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    tasksTaskIDGet(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Task>;
    tasksTaskIDLabelsGet(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    tasksTaskIDLabelsLabelIDDelete(taskID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    tasksTaskIDLabelsPost(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    tasksTaskIDLogsGet(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Logs>;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    tasksTaskIDPatch(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Task>;
    tasksTaskIDRunsGet(taskID: string, zapTraceSpan?: string, after?: string, limit?: number, afterTime?: Date, beforeTime?: Date, options?: any): AxiosPromise<Runs>;
    tasksTaskIDRunsPost(taskID: string, runManually?: RunManually, options?: any): AxiosPromise<Run>;
    tasksTaskIDRunsRunIDGet(taskID: string, runID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Run>;
    tasksTaskIDRunsRunIDLogsGet(taskID: string, runID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Logs>;
    tasksTaskIDRunsRunIDRetryPost(taskID: string, runID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Run>;
}
export declare const TelegrafsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    telegrafsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsPost(telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDDelete(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDLabelsGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDLabelsLabelIDDelete(telegrafID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDLabelsPost(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDPut(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const TelegrafsApiFp: (configuration?: Configuration | undefined) => {
    telegrafsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Telegrafs>;
    telegrafsPost(telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Telegraf>;
    telegrafsTelegrafIDDelete(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    telegrafsTelegrafIDGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Telegraf>;
    telegrafsTelegrafIDLabelsGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    telegrafsTelegrafIDLabelsLabelIDDelete(telegrafID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    telegrafsTelegrafIDLabelsPost(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    telegrafsTelegrafIDPut(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Telegraf>;
};
export declare const TelegrafsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    telegrafsGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Telegrafs>;
    telegrafsPost(telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Telegraf>;
    telegrafsTelegrafIDDelete(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Telegraf>;
    telegrafsTelegrafIDLabelsGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    telegrafsTelegrafIDLabelsLabelIDDelete(telegrafID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDLabelsPost(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDPut(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Telegraf>;
};
export declare class TelegrafsApi extends BaseAPI {
    telegrafsGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Telegrafs>;
    telegrafsPost(telegrafRequest: TelegrafRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Telegraf>;
    telegrafsTelegrafIDDelete(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDGet(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Telegraf>;
    telegrafsTelegrafIDLabelsGet(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    telegrafsTelegrafIDLabelsLabelIDDelete(telegrafID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDLabelsPost(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDPut(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Telegraf>;
}
export declare const TemplatesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    documentsTemplatesGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    documentsTemplatesPost(documentCreate: DocumentCreate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    documentsTemplatesTemplateIDDelete(templateID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    documentsTemplatesTemplateIDGet(templateID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    documentsTemplatesTemplateIDLabelsGet(templateID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    documentsTemplatesTemplateIDLabelsLabelIDDelete(templateID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    documentsTemplatesTemplateIDLabelsPost(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    documentsTemplatesTemplateIDPut(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const TemplatesApiFp: (configuration?: Configuration | undefined) => {
    documentsTemplatesGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Documents>;
    documentsTemplatesPost(documentCreate: DocumentCreate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Document>;
    documentsTemplatesTemplateIDDelete(templateID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    documentsTemplatesTemplateIDGet(templateID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Document>;
    documentsTemplatesTemplateIDLabelsGet(templateID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    documentsTemplatesTemplateIDLabelsLabelIDDelete(templateID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    documentsTemplatesTemplateIDLabelsPost(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    documentsTemplatesTemplateIDPut(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Document>;
};
export declare const TemplatesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    documentsTemplatesGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<Documents>;
    documentsTemplatesPost(documentCreate: DocumentCreate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Document>;
    documentsTemplatesTemplateIDDelete(templateID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    documentsTemplatesTemplateIDGet(templateID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Document>;
    documentsTemplatesTemplateIDLabelsGet(templateID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    documentsTemplatesTemplateIDLabelsLabelIDDelete(templateID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    documentsTemplatesTemplateIDLabelsPost(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    documentsTemplatesTemplateIDPut(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Document>;
};
export declare class TemplatesApi extends BaseAPI {
    documentsTemplatesGet(zapTraceSpan?: string, org?: string, orgID?: string, options?: any): AxiosPromise<Documents>;
    documentsTemplatesPost(documentCreate: DocumentCreate, zapTraceSpan?: string, options?: any): AxiosPromise<Document>;
    documentsTemplatesTemplateIDDelete(templateID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    documentsTemplatesTemplateIDGet(templateID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Document>;
    documentsTemplatesTemplateIDLabelsGet(templateID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    documentsTemplatesTemplateIDLabelsLabelIDDelete(templateID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    documentsTemplatesTemplateIDLabelsPost(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    documentsTemplatesTemplateIDPut(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<Document>;
}
export declare const UsersApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    meGet(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    mePasswordPut(passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    usersGet(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    usersPost(user: User, options?: any): RequestArgs;
    usersUserIDDelete(userID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    usersUserIDGet(userID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    usersUserIDPasswordPut(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    usersUserIDPatch(userID: string, user: User, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const UsersApiFp: (configuration?: Configuration | undefined) => {
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    meGet(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
    mePasswordPut(passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    usersGet(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Users>;
    usersPost(user: User, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
    usersUserIDDelete(userID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    usersUserIDGet(userID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    usersUserIDPasswordPut(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    usersUserIDPatch(userID: string, user: User, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
};
export declare const UsersApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    meGet(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<User>;
    mePasswordPut(passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    usersGet(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Users>;
    usersPost(user: User, options?: any): AxiosPromise<User>;
    usersUserIDDelete(userID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    usersUserIDGet(userID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<User>;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    usersUserIDPasswordPut(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    usersUserIDPatch(userID: string, user: User, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<User>;
};
export declare class UsersApi extends BaseAPI {
    bucketsBucketIDMembersGet(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    bucketsBucketIDMembersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    bucketsBucketIDMembersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    bucketsBucketIDOwnersGet(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    bucketsBucketIDOwnersPost(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    bucketsBucketIDOwnersUserIDDelete(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDMembersGet(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    dashboardsDashboardIDMembersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    dashboardsDashboardIDMembersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    dashboardsDashboardIDOwnersGet(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    dashboardsDashboardIDOwnersPost(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    dashboardsDashboardIDOwnersUserIDDelete(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    meGet(zapTraceSpan?: string, options?: any): AxiosPromise<User>;
    mePasswordPut(passwordResetBody: PasswordResetBody, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDMembersGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    orgsOrgIDMembersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    orgsOrgIDMembersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    orgsOrgIDOwnersGet(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    orgsOrgIDOwnersPost(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    orgsOrgIDOwnersUserIDDelete(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDMembersGet(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    scrapersScraperTargetIDMembersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    scrapersScraperTargetIDMembersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    scrapersScraperTargetIDOwnersGet(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    scrapersScraperTargetIDOwnersPost(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    scrapersScraperTargetIDOwnersUserIDDelete(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    tasksTaskIDMembersGet(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    tasksTaskIDMembersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    tasksTaskIDMembersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    tasksTaskIDOwnersGet(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    tasksTaskIDOwnersPost(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    tasksTaskIDOwnersUserIDDelete(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDMembersGet(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    telegrafsTelegrafIDMembersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    telegrafsTelegrafIDMembersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    telegrafsTelegrafIDOwnersGet(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    telegrafsTelegrafIDOwnersPost(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    telegrafsTelegrafIDOwnersUserIDDelete(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    usersGet(zapTraceSpan?: string, options?: any): AxiosPromise<Users>;
    usersPost(user: User, options?: any): AxiosPromise<User>;
    usersUserIDDelete(userID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    usersUserIDGet(userID: string, zapTraceSpan?: string, options?: any): AxiosPromise<User>;
    usersUserIDLogsGet(userID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    usersUserIDPasswordPut(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    usersUserIDPatch(userID: string, user: User, zapTraceSpan?: string, options?: any): AxiosPromise<User>;
}
export declare const VariablesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    variablesGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    variablesPost(variable: Variable, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    variablesVariableIDDelete(variableID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    variablesVariableIDGet(variableID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    variablesVariableIDLabelsGet(variableID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    variablesVariableIDLabelsLabelIDDelete(variableID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    variablesVariableIDLabelsPost(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    variablesVariableIDPatch(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    variablesVariableIDPut(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const VariablesApiFp: (configuration?: Configuration | undefined) => {
    variablesGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variables>;
    variablesPost(variable: Variable, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
    variablesVariableIDDelete(variableID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    variablesVariableIDGet(variableID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
    variablesVariableIDLabelsGet(variableID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    variablesVariableIDLabelsLabelIDDelete(variableID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    variablesVariableIDLabelsPost(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    variablesVariableIDPatch(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
    variablesVariableIDPut(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
};
export declare const VariablesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    variablesGet(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<Variables>;
    variablesPost(variable: Variable, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
    variablesVariableIDDelete(variableID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    variablesVariableIDGet(variableID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
    variablesVariableIDLabelsGet(variableID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    variablesVariableIDLabelsLabelIDDelete(variableID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    variablesVariableIDLabelsPost(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    variablesVariableIDPatch(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
    variablesVariableIDPut(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
};
export declare class VariablesApi extends BaseAPI {
    variablesGet(zapTraceSpan?: string, org?: string, orgID?: string, options?: any): AxiosPromise<Variables>;
    variablesPost(variable: Variable, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
    variablesVariableIDDelete(variableID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    variablesVariableIDGet(variableID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
    variablesVariableIDLabelsGet(variableID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    variablesVariableIDLabelsLabelIDDelete(variableID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    variablesVariableIDLabelsPost(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    variablesVariableIDPatch(variableID: string, variable: Variable, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
    variablesVariableIDPut(variableID: string, variable: Variable, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
}
export declare const ViewsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const ViewsApiFp: (configuration?: Configuration | undefined) => {
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
};
export declare const ViewsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
};
export declare class ViewsApi extends BaseAPI {
    dashboardsDashboardIDCellsCellIDViewGet(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    dashboardsDashboardIDCellsCellIDViewPatch(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
}
export declare const WriteApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    writePost(org: string, bucket: string, body: string, zapTraceSpan?: string | undefined, contentEncoding?: "gzip" | "identity" | undefined, contentType?: "application/vnd.influx.arrow" | "text/plain" | "text/plain; charset=utf-8" | undefined, contentLength?: number | undefined, accept?: "application/json" | undefined, precision?: WritePrecision | undefined, options?: any): RequestArgs;
};
export declare const WriteApiFp: (configuration?: Configuration | undefined) => {
    writePost(org: string, bucket: string, body: string, zapTraceSpan?: string | undefined, contentEncoding?: "gzip" | "identity" | undefined, contentType?: "application/vnd.influx.arrow" | "text/plain" | "text/plain; charset=utf-8" | undefined, contentLength?: number | undefined, accept?: "application/json" | undefined, precision?: WritePrecision | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const WriteApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    writePost(org: string, bucket: string, body: string, zapTraceSpan?: string | undefined, contentEncoding?: "gzip" | "identity" | undefined, contentType?: "application/vnd.influx.arrow" | "text/plain" | "text/plain; charset=utf-8" | undefined, contentLength?: number | undefined, accept?: "application/json" | undefined, precision?: WritePrecision | undefined, options?: any): AxiosPromise<Response>;
};
export declare class WriteApi extends BaseAPI {
    writePost(org: string, bucket: string, body: string, zapTraceSpan?: string, contentEncoding?: 'gzip' | 'identity', contentType?: 'text/plain' | 'text/plain; charset=utf-8' | 'application/vnd.influx.arrow', contentLength?: number, accept?: 'application/json', precision?: WritePrecision, options?: any): AxiosPromise<Response>;
}
