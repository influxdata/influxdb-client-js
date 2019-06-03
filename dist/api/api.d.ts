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
export interface Axes {
    x?: Axis;
    y?: Axis;
    y2?: Axis;
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
    description?: string;
    orgID?: string;
    rp?: string;
    createdAt?: Date;
    updatedAt?: Date;
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
    x?: number;
    y?: number;
    w?: number;
    h?: number;
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
export interface DecimalPlaces {
    isEnforced?: boolean;
    digits?: number;
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
    type?: string;
    description?: string;
    version: string;
    createdAt?: Date;
    updatedAt?: Date;
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
export interface GaugeViewProperties extends ViewProperties {
    type?: GaugeViewProperties.TypeEnum;
    prefix?: string;
    suffix?: string;
    legend?: Legend;
    decimalPlaces?: DecimalPlaces;
}
export declare namespace GaugeViewProperties {
    enum TypeEnum {
        Gauge = "gauge"
    }
}
export interface HistogramViewProperties extends ViewProperties {
    type?: HistogramViewProperties.TypeEnum;
    xColumn?: string;
    fillColumns?: Array<string>;
    xDomain?: Array<number>;
    xAxisLabel?: string;
    position?: string;
    binCount?: number;
}
export declare namespace HistogramViewProperties {
    enum TypeEnum {
        Histogram = "histogram"
    }
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
export interface Legend {
    type?: Legend.TypeEnum;
    orientation?: Legend.OrientationEnum;
}
export declare namespace Legend {
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
export interface LinePlusSingleStatProperties extends ViewProperties {
    axes?: Axes;
    type?: LinePlusSingleStatProperties.TypeEnum;
    legend?: Legend;
    prefix?: string;
    suffix?: string;
    decimalPlaces?: DecimalPlaces;
}
export declare namespace LinePlusSingleStatProperties {
    enum TypeEnum {
        LinePlusSingleStat = "line-plus-single-stat"
    }
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
export interface MarkdownViewProperties {
    type?: MarkdownViewProperties.TypeEnum;
    note?: string;
}
export declare namespace MarkdownViewProperties {
    enum TypeEnum {
        Markdown = "markdown"
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
        TooManyRequests = "too many requests",
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
    userID?: string;
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
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
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
    log?: Array<RunLog>;
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
export interface RunLog {
    time?: string;
    message?: string;
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
    org?: string;
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
export interface SingleStatViewProperties extends ViewProperties {
    type?: SingleStatViewProperties.TypeEnum;
    prefix?: string;
    suffix?: string;
    legend?: Legend;
    decimalPlaces?: DecimalPlaces;
}
export declare namespace SingleStatViewProperties {
    enum TypeEnum {
        SingleStat = "single-stat"
    }
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
        Influxql = "influxql"
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
export interface TableViewProperties extends ViewProperties {
    type?: TableViewProperties.TypeEnum;
    tableOptions?: any;
    fieldOptions?: Array<RenamableField>;
    timeFormat?: string;
    decimalPlaces?: DecimalPlaces;
}
export declare namespace TableViewProperties {
    enum TypeEnum {
        Table = "table"
    }
}
export interface Task {
    id: string;
    orgID: string;
    org?: string;
    name: string;
    description?: string;
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
    orgID?: string;
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
export interface ViewProperties {
    queries?: Array<DashboardQuery>;
    colors?: Array<DashboardColor>;
    note?: string;
    showNoteWhenEmpty?: boolean;
}
export interface Views {
    links?: ViewLinks;
    views?: Array<View>;
}
export declare enum WritePrecision {
    Ms = "ms",
    S = "s",
    Us = "us",
    Ns = "ns"
}
export interface XYViewProperties extends ViewProperties {
    axes?: Axes;
    type?: XYViewProperties.TypeEnum;
    legend?: Legend;
    geom?: XYViewProperties.GeomEnum;
}
export declare namespace XYViewProperties {
    enum TypeEnum {
        Xy = "xy"
    }
    enum GeomEnum {
        Line = "line",
        Step = "step",
        Stacked = "stacked",
        Bar = "bar"
    }
}
export declare const AuthorizationsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteAuthorizationsID(authID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getAuthorizations(zapTraceSpan?: string | undefined, userID?: string | undefined, user?: string | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    getAuthorizationsID(authID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchAuthorizationsID(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postAuthorizations(authorization: Authorization, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const AuthorizationsApiFp: (configuration?: Configuration | undefined) => {
    deleteAuthorizationsID(authID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getAuthorizations(zapTraceSpan?: string | undefined, userID?: string | undefined, user?: string | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorizations>;
    getAuthorizationsID(authID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorization>;
    patchAuthorizationsID(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorization>;
    postAuthorizations(authorization: Authorization, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Authorization>;
};
export declare const AuthorizationsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteAuthorizationsID(authID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getAuthorizations(zapTraceSpan?: string | undefined, userID?: string | undefined, user?: string | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<Authorizations>;
    getAuthorizationsID(authID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Authorization>;
    patchAuthorizationsID(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Authorization>;
    postAuthorizations(authorization: Authorization, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Authorization>;
};
export declare class AuthorizationsApi extends BaseAPI {
    deleteAuthorizationsID(authID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getAuthorizations(zapTraceSpan?: string, userID?: string, user?: string, orgID?: string, org?: string, options?: any): AxiosPromise<Authorizations>;
    getAuthorizationsID(authID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Authorization>;
    patchAuthorizationsID(authID: string, authorizationUpdateRequest: AuthorizationUpdateRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Authorization>;
    postAuthorizations(authorization: Authorization, zapTraceSpan?: string, options?: any): AxiosPromise<Authorization>;
}
export declare const BucketsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteBucketsID(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteBucketsIDLabelsID(bucketID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getBuckets(zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, org?: string | undefined, orgID?: string | undefined, name?: string | undefined, options?: any): RequestArgs;
    getBucketsID(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getBucketsIDLabels(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    patchBucketsID(bucketID: string, bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postBuckets(bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postBucketsIDLabels(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const BucketsApiFp: (configuration?: Configuration | undefined) => {
    deleteBucketsID(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteBucketsIDLabelsID(bucketID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getBuckets(zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, org?: string | undefined, orgID?: string | undefined, name?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Buckets>;
    getBucketsID(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Bucket>;
    getBucketsIDLabels(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Buckets>;
    patchBucketsID(bucketID: string, bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Bucket>;
    postBuckets(bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Bucket>;
    postBucketsIDLabels(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
};
export declare const BucketsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteBucketsID(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteBucketsIDLabelsID(bucketID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getBuckets(zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, org?: string | undefined, orgID?: string | undefined, name?: string | undefined, options?: any): AxiosPromise<Buckets>;
    getBucketsID(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Bucket>;
    getBucketsIDLabels(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<Buckets>;
    patchBucketsID(bucketID: string, bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Bucket>;
    postBuckets(bucket: Bucket, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Bucket>;
    postBucketsIDLabels(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
};
export declare class BucketsApi extends BaseAPI {
    deleteBucketsID(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteBucketsIDLabelsID(bucketID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getBuckets(zapTraceSpan?: string, offset?: number, limit?: number, org?: string, orgID?: string, name?: string, options?: any): AxiosPromise<Buckets>;
    getBucketsID(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Bucket>;
    getBucketsIDLabels(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string, org?: string, options?: any): AxiosPromise<Buckets>;
    patchBucketsID(bucketID: string, bucket: Bucket, zapTraceSpan?: string, options?: any): AxiosPromise<Bucket>;
    postBuckets(bucket: Bucket, zapTraceSpan?: string, options?: any): AxiosPromise<Bucket>;
    postBucketsIDLabels(bucketID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
}
export declare const CellsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    putDashboardsIDCells(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const CellsApiFp: (configuration?: Configuration | undefined) => {
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    putDashboardsIDCells(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
};
export declare const CellsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    putDashboardsIDCells(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
};
export declare class CellsApi extends BaseAPI {
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    putDashboardsIDCells(dashboardID: string, cell: Array<Cell>, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
}
export declare const DashboardsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteDashboardsID(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteDashboardsIDLabelsID(dashboardID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboards(zapTraceSpan?: string | undefined, owner?: string | undefined, sortBy?: "ID" | "CreatedAt" | "UpdatedAt" | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    getDashboardsID(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboardsIDLabels(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchDashboardsID(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboards(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboardsIDLabels(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    putDashboardsIDCells(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const DashboardsApiFp: (configuration?: Configuration | undefined) => {
    deleteDashboardsID(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteDashboardsIDLabelsID(dashboardID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getDashboards(zapTraceSpan?: string | undefined, owner?: string | undefined, sortBy?: "ID" | "CreatedAt" | "UpdatedAt" | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboards>;
    getDashboardsID(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    getDashboardsIDLabels(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    patchDashboardsID(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    postDashboards(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Cell>;
    postDashboardsIDLabels(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    putDashboardsIDCells(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Dashboard>;
};
export declare const DashboardsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteDashboardsID(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDLabelsID(dashboardID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getDashboards(zapTraceSpan?: string | undefined, owner?: string | undefined, sortBy?: "ID" | "CreatedAt" | "UpdatedAt" | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<Dashboards>;
    getDashboardsID(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    getDashboardsIDLabels(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    patchDashboardsID(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    postDashboards(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Cell>;
    postDashboardsIDLabels(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    putDashboardsIDCells(dashboardID: string, cell: Cell[], zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Dashboard>;
};
export declare class DashboardsApi extends BaseAPI {
    deleteDashboardsID(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDCellsID(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDLabelsID(dashboardID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getDashboards(zapTraceSpan?: string, owner?: string, sortBy?: 'ID' | 'CreatedAt' | 'UpdatedAt', id?: Array<string>, orgID?: string, org?: string, options?: any): AxiosPromise<Dashboards>;
    getDashboardsID(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    getDashboardsIDLabels(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    patchDashboardsID(dashboardID: string, dashboard: Dashboard, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
    patchDashboardsIDCellsID(dashboardID: string, cellID: string, cellUpdate: CellUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    postDashboards(createDashboardRequest: CreateDashboardRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
    postDashboardsIDCells(dashboardID: string, createCell: CreateCell, zapTraceSpan?: string, options?: any): AxiosPromise<Cell>;
    postDashboardsIDLabels(dashboardID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    putDashboardsIDCells(dashboardID: string, cell: Array<Cell>, zapTraceSpan?: string, options?: any): AxiosPromise<Dashboard>;
}
export declare const DefaultApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getRoutes(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postSignin(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postSignout(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const DefaultApiFp: (configuration?: Configuration | undefined) => {
    getRoutes(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Routes>;
    postSignin(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    postSignout(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const DefaultApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getRoutes(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Routes>;
    postSignin(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    postSignout(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
};
export declare class DefaultApi extends BaseAPI {
    getRoutes(zapTraceSpan?: string, options?: any): AxiosPromise<Routes>;
    postSignin(zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    postSignout(zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
}
export declare const HealthApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getHealth(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const HealthApiFp: (configuration?: Configuration | undefined) => {
    getHealth(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Check>;
};
export declare const HealthApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getHealth(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Check>;
};
export declare class HealthApi extends BaseAPI {
    getHealth(zapTraceSpan?: string, options?: any): AxiosPromise<Check>;
}
export declare const LabelsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteLabelsID(labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getLabels(zapTraceSpan?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    getLabelsID(labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchLabelsID(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postLabels(labelCreateRequest: LabelCreateRequest, options?: any): RequestArgs;
};
export declare const LabelsApiFp: (configuration?: Configuration | undefined) => {
    deleteLabelsID(labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getLabels(zapTraceSpan?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    getLabelsID(labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    patchLabelsID(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    postLabels(labelCreateRequest: LabelCreateRequest, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
};
export declare const LabelsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteLabelsID(labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getLabels(zapTraceSpan?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    getLabelsID(labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    patchLabelsID(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    postLabels(labelCreateRequest: LabelCreateRequest, options?: any): AxiosPromise<LabelResponse>;
};
export declare class LabelsApi extends BaseAPI {
    deleteLabelsID(labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getLabels(zapTraceSpan?: string, orgID?: string, options?: any): AxiosPromise<LabelsResponse>;
    getLabelsID(labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    patchLabelsID(labelID: string, labelUpdate: LabelUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    postLabels(labelCreateRequest: LabelCreateRequest, options?: any): AxiosPromise<LabelResponse>;
}
export declare const OperationLogsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    getUsersIDLogs(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
};
export declare const OperationLogsApiFp: (configuration?: Configuration | undefined) => {
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    getUsersIDLogs(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
};
export declare const OperationLogsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    getUsersIDLogs(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
};
export declare class OperationLogsApi extends BaseAPI {
    getBucketsIDLogs(bucketID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    getDashboardsIDLogs(dashboardID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    getUsersIDLogs(userID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
}
export declare const OrganizationsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteOrgsID(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteOrgsIDLabelsID(orgID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getOrgs(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    getOrgsID(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getOrgsIDLabels(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchOrgsID(orgID: string, organization: Organization, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgs(organization: Organization, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgsIDLabels(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const OrganizationsApiFp: (configuration?: Configuration | undefined) => {
    deleteOrgsID(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteOrgsIDLabelsID(orgID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getOrgs(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organizations>;
    getOrgsID(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organization>;
    getOrgsIDLabels(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SecretKeysResponse>;
    patchOrgsID(orgID: string, organization: Organization, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organization>;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    postOrgs(organization: Organization, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Organization>;
    postOrgsIDLabels(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const OrganizationsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteOrgsID(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteOrgsIDLabelsID(orgID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getOrgs(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<Organizations>;
    getOrgsID(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Organization>;
    getOrgsIDLabels(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<SecretKeysResponse>;
    patchOrgsID(orgID: string, organization: Organization, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Organization>;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    postOrgs(organization: Organization, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Organization>;
    postOrgsIDLabels(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
};
export declare class OrganizationsApi extends BaseAPI {
    deleteOrgsID(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteOrgsIDLabelsID(orgID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getOrgs(zapTraceSpan?: string, org?: string, orgID?: string, options?: any): AxiosPromise<Organizations>;
    getOrgsID(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Organization>;
    getOrgsIDLabels(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    getOrgsIDLogs(orgID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<SecretKeysResponse>;
    patchOrgsID(orgID: string, organization: Organization, zapTraceSpan?: string, options?: any): AxiosPromise<Organization>;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    postOrgs(organization: Organization, zapTraceSpan?: string, options?: any): AxiosPromise<Organization>;
    postOrgsIDLabels(orgID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
}
export declare const QueryApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getQuerySuggestions(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getQuerySuggestionsName(name: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postQuery(zapTraceSpan?: string | undefined, contentType?: "application/json" | "application/vnd.flux" | undefined, org?: string | undefined, orgID?: string | undefined, query?: Query | undefined, options?: any): RequestArgs;
    postQueryAnalyze(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, query?: Query | undefined, options?: any): RequestArgs;
    postQueryAst(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): RequestArgs;
};
export declare const QueryApiFp: (configuration?: Configuration | undefined) => {
    getQuerySuggestions(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<FluxSuggestions>;
    getQuerySuggestionsName(name: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<FluxSuggestions>;
    postQuery(zapTraceSpan?: string | undefined, contentType?: "application/json" | "application/vnd.flux" | undefined, org?: string | undefined, orgID?: string | undefined, query?: Query | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    postQueryAnalyze(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, query?: Query | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<AnalyzeQueryResponse>;
    postQueryAst(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ASTResponse>;
};
export declare const QueryApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getQuerySuggestions(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<FluxSuggestions>;
    getQuerySuggestionsName(name: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<FluxSuggestions>;
    postQuery(zapTraceSpan?: string | undefined, contentType?: "application/json" | "application/vnd.flux" | undefined, org?: string | undefined, orgID?: string | undefined, query?: Query | undefined, options?: any): AxiosPromise<string>;
    postQueryAnalyze(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, query?: Query | undefined, options?: any): AxiosPromise<AnalyzeQueryResponse>;
    postQueryAst(zapTraceSpan?: string | undefined, contentType?: "application/json" | undefined, languageRequest?: LanguageRequest | undefined, options?: any): AxiosPromise<ASTResponse>;
};
export declare class QueryApi extends BaseAPI {
    getQuerySuggestions(zapTraceSpan?: string, options?: any): AxiosPromise<FluxSuggestions>;
    getQuerySuggestionsName(name: string, zapTraceSpan?: string, options?: any): AxiosPromise<FluxSuggestions>;
    postQuery(zapTraceSpan?: string, contentType?: 'application/json' | 'application/vnd.flux', org?: string, orgID?: string, query?: Query, options?: any): AxiosPromise<string>;
    postQueryAnalyze(zapTraceSpan?: string, contentType?: 'application/json', query?: Query, options?: any): AxiosPromise<AnalyzeQueryResponse>;
    postQueryAst(zapTraceSpan?: string, contentType?: 'application/json', languageRequest?: LanguageRequest, options?: any): AxiosPromise<ASTResponse>;
}
export declare const ReadyApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getReady(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const ReadyApiFp: (configuration?: Configuration | undefined) => {
    getReady(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Ready>;
};
export declare const ReadyApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getReady(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Ready>;
};
export declare class ReadyApi extends BaseAPI {
    getReady(zapTraceSpan?: string, options?: any): AxiosPromise<Ready>;
}
export declare const ScraperTargetsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteScrapersID(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteScrapersIDLabelsID(scraperTargetID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getScrapers(zapTraceSpan?: string | undefined, name?: string | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    getScrapersID(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getScrapersIDLabels(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchScrapersID(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchScrapersIDLabelsID(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postScrapers(scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postScrapersIDLabels(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const ScraperTargetsApiFp: (configuration?: Configuration | undefined) => {
    deleteScrapersID(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteScrapersIDLabelsID(scraperTargetID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getScrapers(zapTraceSpan?: string | undefined, name?: string | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ScraperTargetResponses>;
    getScrapersID(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ScraperTargetResponse>;
    getScrapersIDLabels(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    patchScrapersID(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ScraperTargetResponse>;
    patchScrapersIDLabelsID(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    postScrapers(scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ScraperTargetResponse>;
    postScrapersIDLabels(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
};
export declare const ScraperTargetsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteScrapersID(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteScrapersIDLabelsID(scraperTargetID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getScrapers(zapTraceSpan?: string | undefined, name?: string | undefined, id?: string[] | undefined, orgID?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<ScraperTargetResponses>;
    getScrapersID(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ScraperTargetResponse>;
    getScrapersIDLabels(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    patchScrapersID(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ScraperTargetResponse>;
    patchScrapersIDLabelsID(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    postScrapers(scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ScraperTargetResponse>;
    postScrapersIDLabels(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
};
export declare class ScraperTargetsApi extends BaseAPI {
    deleteScrapersID(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteScrapersIDLabelsID(scraperTargetID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getScrapers(zapTraceSpan?: string, name?: string, id?: Array<string>, orgID?: string, org?: string, options?: any): AxiosPromise<ScraperTargetResponses>;
    getScrapersID(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ScraperTargetResponse>;
    getScrapersIDLabels(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    patchScrapersID(scraperTargetID: string, scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string, options?: any): AxiosPromise<ScraperTargetResponse>;
    patchScrapersIDLabelsID(scraperTargetID: string, labelID: string, label: Label, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    postScrapers(scraperTargetRequest: ScraperTargetRequest, zapTraceSpan?: string, options?: any): AxiosPromise<ScraperTargetResponse>;
    postScrapersIDLabels(scraperTargetID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
}
export declare const SecretsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const SecretsApiFp: (configuration?: Configuration | undefined) => {
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SecretKeysResponse>;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const SecretsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<SecretKeysResponse>;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
};
export declare class SecretsApi extends BaseAPI {
    getOrgsIDSecrets(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<SecretKeysResponse>;
    patchOrgsIDSecrets(orgID: string, requestBody: {
        [key: string]: string;
    }, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    postOrgsIDSecrets(orgID: string, secretKeys: SecretKeys, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
}
export declare const SetupApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getSetup(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postSetup(onboardingRequest: OnboardingRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const SetupApiFp: (configuration?: Configuration | undefined) => {
    getSetup(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<IsOnboarding>;
    postSetup(onboardingRequest: OnboardingRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OnboardingResponse>;
};
export declare const SetupApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getSetup(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<IsOnboarding>;
    postSetup(onboardingRequest: OnboardingRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<OnboardingResponse>;
};
export declare class SetupApi extends BaseAPI {
    getSetup(zapTraceSpan?: string, options?: any): AxiosPromise<IsOnboarding>;
    postSetup(onboardingRequest: OnboardingRequest, zapTraceSpan?: string, options?: any): AxiosPromise<OnboardingResponse>;
}
export declare const SourcesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteSourcesID(sourceID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getSources(zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    getSourcesID(sourceID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): RequestArgs;
    getSourcesIDHealth(sourceID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchSourcesID(sourceID: string, source: Source, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postSources(source: Source, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const SourcesApiFp: (configuration?: Configuration | undefined) => {
    deleteSourcesID(sourceID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getSources(zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Sources>;
    getSourcesID(sourceID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Source>;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Buckets>;
    getSourcesIDHealth(sourceID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Check>;
    patchSourcesID(sourceID: string, source: Source, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Source>;
    postSources(source: Source, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Source>;
};
export declare const SourcesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteSourcesID(sourceID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getSources(zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<Sources>;
    getSourcesID(sourceID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Source>;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string | undefined, org?: string | undefined, options?: any): AxiosPromise<Buckets>;
    getSourcesIDHealth(sourceID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Check>;
    patchSourcesID(sourceID: string, source: Source, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Source>;
    postSources(source: Source, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Source>;
};
export declare class SourcesApi extends BaseAPI {
    deleteSourcesID(sourceID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getSources(zapTraceSpan?: string, org?: string, options?: any): AxiosPromise<Sources>;
    getSourcesID(sourceID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Source>;
    getSourcesIDBuckets(sourceID: string, zapTraceSpan?: string, org?: string, options?: any): AxiosPromise<Buckets>;
    getSourcesIDHealth(sourceID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Check>;
    patchSourcesID(sourceID: string, source: Source, zapTraceSpan?: string, options?: any): AxiosPromise<Source>;
    postSources(source: Source, zapTraceSpan?: string, options?: any): AxiosPromise<Source>;
}
export declare const TasksApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteTasksID(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTasksIDLabelsID(taskID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasks(zapTraceSpan?: string | undefined, after?: string | undefined, user?: string | undefined, org?: string | undefined, orgID?: string | undefined, limit?: number | undefined, options?: any): RequestArgs;
    getTasksID(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDLabels(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDLogs(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDRuns(taskID: string, zapTraceSpan?: string | undefined, after?: string | undefined, limit?: number | undefined, afterTime?: Date | undefined, beforeTime?: Date | undefined, options?: any): RequestArgs;
    getTasksIDRunsID(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDRunsIDLogs(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchTasksID(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTasks(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTasksIDLabels(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTasksIDRuns(taskID: string, zapTraceSpan?: string | undefined, runManually?: RunManually | undefined, options?: any): RequestArgs;
    postTasksIDRunsIDRetry(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const TasksApiFp: (configuration?: Configuration | undefined) => {
    deleteTasksID(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTasksIDLabelsID(taskID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getTasks(zapTraceSpan?: string | undefined, after?: string | undefined, user?: string | undefined, org?: string | undefined, orgID?: string | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Tasks>;
    getTasksID(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Task>;
    getTasksIDLabels(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    getTasksIDLogs(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Logs>;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getTasksIDRuns(taskID: string, zapTraceSpan?: string | undefined, after?: string | undefined, limit?: number | undefined, afterTime?: Date | undefined, beforeTime?: Date | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Runs>;
    getTasksIDRunsID(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Run>;
    getTasksIDRunsIDLogs(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Logs>;
    patchTasksID(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Task>;
    postTasks(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Task>;
    postTasksIDLabels(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postTasksIDRuns(taskID: string, zapTraceSpan?: string | undefined, runManually?: RunManually | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Run>;
    postTasksIDRunsIDRetry(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Run>;
};
export declare const TasksApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteTasksID(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTasksIDLabelsID(taskID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getTasks(zapTraceSpan?: string | undefined, after?: string | undefined, user?: string | undefined, org?: string | undefined, orgID?: string | undefined, limit?: number | undefined, options?: any): AxiosPromise<Tasks>;
    getTasksID(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Task>;
    getTasksIDLabels(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    getTasksIDLogs(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Logs>;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getTasksIDRuns(taskID: string, zapTraceSpan?: string | undefined, after?: string | undefined, limit?: number | undefined, afterTime?: Date | undefined, beforeTime?: Date | undefined, options?: any): AxiosPromise<Runs>;
    getTasksIDRunsID(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Run>;
    getTasksIDRunsIDLogs(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Logs>;
    patchTasksID(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Task>;
    postTasks(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Task>;
    postTasksIDLabels(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postTasksIDRuns(taskID: string, zapTraceSpan?: string | undefined, runManually?: RunManually | undefined, options?: any): AxiosPromise<Run>;
    postTasksIDRunsIDRetry(taskID: string, runID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Run>;
};
export declare class TasksApi extends BaseAPI {
    deleteTasksID(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTasksIDLabelsID(taskID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getTasks(zapTraceSpan?: string, after?: string, user?: string, org?: string, orgID?: string, limit?: number, options?: any): AxiosPromise<Tasks>;
    getTasksID(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Task>;
    getTasksIDLabels(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    getTasksIDLogs(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Logs>;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getTasksIDRuns(taskID: string, zapTraceSpan?: string, after?: string, limit?: number, afterTime?: Date, beforeTime?: Date, options?: any): AxiosPromise<Runs>;
    getTasksIDRunsID(taskID: string, runID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Run>;
    getTasksIDRunsIDLogs(taskID: string, runID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Logs>;
    patchTasksID(taskID: string, taskUpdateRequest: TaskUpdateRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Task>;
    postTasks(taskCreateRequest: TaskCreateRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Task>;
    postTasksIDLabels(taskID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postTasksIDRuns(taskID: string, zapTraceSpan?: string, runManually?: RunManually, options?: any): AxiosPromise<Run>;
    postTasksIDRunsIDRetry(taskID: string, runID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Run>;
}
export declare const TelegrafsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteTelegrafsID(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTelegrafsIDLabelsID(telegrafID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTelegrafs(zapTraceSpan?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    getTelegrafsID(telegrafID: string, zapTraceSpan?: string | undefined, accept?: "application/json" | "application/toml" | "application/octet-stream" | undefined, options?: any): RequestArgs;
    getTelegrafsIDLabels(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTelegrafs(telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTelegrafsIDLabels(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    putTelegrafsID(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const TelegrafsApiFp: (configuration?: Configuration | undefined) => {
    deleteTelegrafsID(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTelegrafsIDLabelsID(telegrafID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getTelegrafs(zapTraceSpan?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Telegrafs>;
    getTelegrafsID(telegrafID: string, zapTraceSpan?: string | undefined, accept?: "application/json" | "application/toml" | "application/octet-stream" | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<string>;
    getTelegrafsIDLabels(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    postTelegrafs(telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Telegraf>;
    postTelegrafsIDLabels(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    putTelegrafsID(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Telegraf>;
};
export declare const TelegrafsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteTelegrafsID(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDLabelsID(telegrafID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getTelegrafs(zapTraceSpan?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<Telegrafs>;
    getTelegrafsID(telegrafID: string, zapTraceSpan?: string | undefined, accept?: "application/json" | "application/toml" | "application/octet-stream" | undefined, options?: any): AxiosPromise<string>;
    getTelegrafsIDLabels(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    postTelegrafs(telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Telegraf>;
    postTelegrafsIDLabels(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    putTelegrafsID(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Telegraf>;
};
export declare class TelegrafsApi extends BaseAPI {
    deleteTelegrafsID(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDLabelsID(telegrafID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getTelegrafs(zapTraceSpan?: string, orgID?: string, options?: any): AxiosPromise<Telegrafs>;
    getTelegrafsID(telegrafID: string, zapTraceSpan?: string, accept?: 'application/toml' | 'application/json' | 'application/octet-stream', options?: any): AxiosPromise<string>;
    getTelegrafsIDLabels(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    postTelegrafs(telegrafRequest: TelegrafRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Telegraf>;
    postTelegrafsIDLabels(telegrafID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    putTelegrafsID(telegrafID: string, telegrafRequest: TelegrafRequest, zapTraceSpan?: string, options?: any): AxiosPromise<Telegraf>;
}
export declare const TemplatesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteDocumentsTemplatesID(templateID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteDocumentsTemplatesIDLabelsID(templateID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDocumentsTemplates(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    getDocumentsTemplatesID(templateID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDocumentsTemplatesIDLabels(templateID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDocumentsTemplates(documentCreate: DocumentCreate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDocumentsTemplatesIDLabels(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    putDocumentsTemplatesID(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const TemplatesApiFp: (configuration?: Configuration | undefined) => {
    deleteDocumentsTemplatesID(templateID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteDocumentsTemplatesIDLabelsID(templateID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getDocumentsTemplates(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Documents>;
    getDocumentsTemplatesID(templateID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Document>;
    getDocumentsTemplatesIDLabels(templateID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    postDocumentsTemplates(documentCreate: DocumentCreate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Document>;
    postDocumentsTemplatesIDLabels(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    putDocumentsTemplatesID(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Document>;
};
export declare const TemplatesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteDocumentsTemplatesID(templateID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteDocumentsTemplatesIDLabelsID(templateID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getDocumentsTemplates(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<Documents>;
    getDocumentsTemplatesID(templateID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Document>;
    getDocumentsTemplatesIDLabels(templateID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    postDocumentsTemplates(documentCreate: DocumentCreate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Document>;
    postDocumentsTemplatesIDLabels(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    putDocumentsTemplatesID(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Document>;
};
export declare class TemplatesApi extends BaseAPI {
    deleteDocumentsTemplatesID(templateID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteDocumentsTemplatesIDLabelsID(templateID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getDocumentsTemplates(zapTraceSpan?: string, org?: string, orgID?: string, options?: any): AxiosPromise<Documents>;
    getDocumentsTemplatesID(templateID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Document>;
    getDocumentsTemplatesIDLabels(templateID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    postDocumentsTemplates(documentCreate: DocumentCreate, zapTraceSpan?: string, options?: any): AxiosPromise<Document>;
    postDocumentsTemplatesIDLabels(templateID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    putDocumentsTemplatesID(templateID: string, documentUpdate: DocumentUpdate, zapTraceSpan?: string, options?: any): AxiosPromise<Document>;
}
export declare const UsersApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteUsersID(userID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getMe(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getUsers(zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getUsersID(userID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getUsersIDLogs(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    patchUsersID(userID: string, user: User, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postUsers(user: User, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    putMePassword(passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    putUsersIDPassword(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const UsersApiFp: (configuration?: Configuration | undefined) => {
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteUsersID(userID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getMe(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMembers>;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwners>;
    getUsers(zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Users>;
    getUsersID(userID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
    getUsersIDLogs(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OperationLogs>;
    patchUsersID(userID: string, user: User, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceMember>;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ResourceOwner>;
    postUsers(user: User, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<User>;
    putMePassword(passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    putUsersIDPassword(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const UsersApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteUsersID(userID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getMe(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<User>;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMembers>;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwners>;
    getUsers(zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Users>;
    getUsersID(userID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<User>;
    getUsersIDLogs(userID: string, zapTraceSpan?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<OperationLogs>;
    patchUsersID(userID: string, user: User, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<User>;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceMember>;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<ResourceOwner>;
    postUsers(user: User, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<User>;
    putMePassword(passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    putUsersIDPassword(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
};
export declare class UsersApi extends BaseAPI {
    deleteBucketsIDMembersID(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteBucketsIDOwnersID(userID: string, bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDMembersID(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteDashboardsIDOwnersID(userID: string, dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteOrgsIDMembersID(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteOrgsIDOwnersID(userID: string, orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteScrapersIDMembersID(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteScrapersIDOwnersID(userID: string, scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTasksIDMembersID(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTasksIDOwnersID(userID: string, taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDMembersID(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteTelegrafsIDOwnersID(userID: string, telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteUsersID(userID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getBucketsIDMembers(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getBucketsIDOwners(bucketID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getDashboardsIDMembers(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getDashboardsIDOwners(dashboardID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getMe(zapTraceSpan?: string, options?: any): AxiosPromise<User>;
    getOrgsIDMembers(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getOrgsIDOwners(orgID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getScrapersIDMembers(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getScrapersIDOwners(scraperTargetID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getTasksIDMembers(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getTasksIDOwners(taskID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getTelegrafsIDMembers(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMembers>;
    getTelegrafsIDOwners(telegrafID: string, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwners>;
    getUsers(zapTraceSpan?: string, options?: any): AxiosPromise<Users>;
    getUsersID(userID: string, zapTraceSpan?: string, options?: any): AxiosPromise<User>;
    getUsersIDLogs(userID: string, zapTraceSpan?: string, offset?: number, limit?: number, options?: any): AxiosPromise<OperationLogs>;
    patchUsersID(userID: string, user: User, zapTraceSpan?: string, options?: any): AxiosPromise<User>;
    postBucketsIDMembers(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postBucketsIDOwners(bucketID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postDashboardsIDMembers(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postDashboardsIDOwners(dashboardID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postOrgsIDMembers(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postOrgsIDOwners(orgID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postScrapersIDMembers(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postScrapersIDOwners(scraperTargetID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postTasksIDMembers(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postTasksIDOwners(taskID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postTelegrafsIDMembers(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceMember>;
    postTelegrafsIDOwners(telegrafID: string, addResourceMemberRequestBody: AddResourceMemberRequestBody, zapTraceSpan?: string, options?: any): AxiosPromise<ResourceOwner>;
    postUsers(user: User, zapTraceSpan?: string, options?: any): AxiosPromise<User>;
    putMePassword(passwordResetBody: PasswordResetBody, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    putUsersIDPassword(userID: string, passwordResetBody: PasswordResetBody, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
}
export declare const VariablesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    deleteVariablesID(variableID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    deleteVariablesIDLabelsID(variableID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getVariables(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): RequestArgs;
    getVariablesID(variableID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    getVariablesIDLabels(variableID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postVariables(variable: Variable, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    postVariablesIDLabels(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    putVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const VariablesApiFp: (configuration?: Configuration | undefined) => {
    deleteVariablesID(variableID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    deleteVariablesIDLabelsID(variableID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
    getVariables(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variables>;
    getVariablesID(variableID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
    getVariablesIDLabels(variableID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelsResponse>;
    patchVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
    postVariables(variable: Variable, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
    postVariablesIDLabels(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LabelResponse>;
    putVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Variable>;
};
export declare const VariablesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    deleteVariablesID(variableID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    deleteVariablesIDLabelsID(variableID: string, labelID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Response>;
    getVariables(zapTraceSpan?: string | undefined, org?: string | undefined, orgID?: string | undefined, options?: any): AxiosPromise<Variables>;
    getVariablesID(variableID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
    getVariablesIDLabels(variableID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelsResponse>;
    patchVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
    postVariables(variable: Variable, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
    postVariablesIDLabels(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<LabelResponse>;
    putVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<Variable>;
};
export declare class VariablesApi extends BaseAPI {
    deleteVariablesID(variableID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    deleteVariablesIDLabelsID(variableID: string, labelID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Response>;
    getVariables(zapTraceSpan?: string, org?: string, orgID?: string, options?: any): AxiosPromise<Variables>;
    getVariablesID(variableID: string, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
    getVariablesIDLabels(variableID: string, zapTraceSpan?: string, options?: any): AxiosPromise<LabelsResponse>;
    patchVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
    postVariables(variable: Variable, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
    postVariablesIDLabels(variableID: string, labelMapping: LabelMapping, zapTraceSpan?: string, options?: any): AxiosPromise<LabelResponse>;
    putVariablesID(variableID: string, variable: Variable, zapTraceSpan?: string, options?: any): AxiosPromise<Variable>;
}
export declare const ViewsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): RequestArgs;
};
export declare const ViewsApiFp: (configuration?: Configuration | undefined) => {
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<View>;
};
export declare const ViewsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string | undefined, options?: any): AxiosPromise<View>;
};
export declare class ViewsApi extends BaseAPI {
    getDashboardsIDCellsIDView(dashboardID: string, cellID: string, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
    patchDashboardsIDCellsIDView(dashboardID: string, cellID: string, view: View, zapTraceSpan?: string, options?: any): AxiosPromise<View>;
}
export declare const WriteApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    postWrite(org: string, bucket: string, body: string, zapTraceSpan?: string | undefined, contentEncoding?: "gzip" | "identity" | undefined, contentType?: "text/plain" | "text/plain; charset=utf-8" | "application/vnd.influx.arrow" | undefined, contentLength?: number | undefined, accept?: "application/json" | undefined, precision?: WritePrecision | undefined, options?: any): RequestArgs;
};
export declare const WriteApiFp: (configuration?: Configuration | undefined) => {
    postWrite(org: string, bucket: string, body: string, zapTraceSpan?: string | undefined, contentEncoding?: "gzip" | "identity" | undefined, contentType?: "text/plain" | "text/plain; charset=utf-8" | "application/vnd.influx.arrow" | undefined, contentLength?: number | undefined, accept?: "application/json" | undefined, precision?: WritePrecision | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>;
};
export declare const WriteApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    postWrite(org: string, bucket: string, body: string, zapTraceSpan?: string | undefined, contentEncoding?: "gzip" | "identity" | undefined, contentType?: "text/plain" | "text/plain; charset=utf-8" | "application/vnd.influx.arrow" | undefined, contentLength?: number | undefined, accept?: "application/json" | undefined, precision?: WritePrecision | undefined, options?: any): AxiosPromise<Response>;
};
export declare class WriteApi extends BaseAPI {
    postWrite(org: string, bucket: string, body: string, zapTraceSpan?: string, contentEncoding?: 'gzip' | 'identity', contentType?: 'text/plain' | 'text/plain; charset=utf-8' | 'application/vnd.influx.arrow', contentLength?: number, accept?: 'application/json', precision?: WritePrecision, options?: any): AxiosPromise<Response>;
}
