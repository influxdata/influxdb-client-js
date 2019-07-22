import Auth from './wrappers/auth'
import Authorizations from './wrappers/authorizations'
import Buckets from './wrappers/buckets'
import Dashboards from './wrappers/dashboards'
import Labels from './wrappers/labels'
import Links from './wrappers/links'
import Organizations from './wrappers/organizations'
import Queries from './wrappers/queries'
import Scrapers from './wrappers/scrapers'
import Setup from './wrappers/setup'
import Tasks from './wrappers/tasks'
import TelegrafConfigs from './wrappers/telegrafConfigs'
import Users from './wrappers/users'
import Variables from './wrappers/variables'
import Write from './wrappers/write'
import Templates from './wrappers/templates'
import Checks from './wrappers/checks'
import NotificationRules from './wrappers/notifications'

export {CancellationError, LargeResponseError} from './utils/errors'

export * from './api'
export * from './types'
// Must locally re-export manually generated types to resolve
// ts compiler ambiguity with swagger generated types.
export {
  ArrayExpression,
  BadStatement,
  BinaryExpression,
  Block,
  BooleanLiteral,
  BuiltinStatement,
  CallExpression,
  ConditionalExpression,
  DateTimeLiteral,
  Duration,
  DurationLiteral,
  Expression,
  ExpressionStatement,
  FloatLiteral,
  FunctionExpression,
  Identifier,
  ImportDeclaration,
  IndexExpression,
  IntegerLiteral,
  LogicalExpression,
  MemberAssignment,
  MemberExpression,
  Node,
  ObjectExpression,
  OptionStatement,
  Package,
  PackageClause,
  PipeExpression,
  PipeLiteral,
  Property,
  PropertyKey,
  RegexpLiteral,
  ReturnStatement,
  Statement,
  StringLiteral,
  UnaryExpression,
  UnsignedIntegerLiteral,
  VariableAssignment,
} from './types/ast'

export {
  Check,
  NotificationRule,
  Checks,
  DeadmanCheck,
  ThresholdCheck,
  NotificationRules,
  GreaterThresold,
  LesserThreshold,
  RangeThreshold,
  SlackNotificationRule,
  SMTPNotificationRule,
  PagerDutyNotificationRule,
} from './types/alerts'

export {
  View,
  ViewProperties,
  XYViewProperties,
  LinePlusSingleStatProperties,
  SingleStatViewProperties,
  TableViewProperties,
  GaugeViewProperties,
  HistogramViewProperties,
  HeatmapViewProperties,
  ScatterViewProperties,
  CheckViewProperties,
  EmptyViewProperties,
  MarkdownViewProperties,
  XYView,
  LinePlusSingleStatView,
  SingleStatView,
  TableView,
  GaugeView,
  HistogramView,
  HeatmapView,
  ScatterView,
  CheckView,
  EmptyView,
  MarkdownView,
} from './types/dashboards'

export class Client {
  public auth: Auth
  public authorizations: Authorizations
  public buckets: Buckets
  public dashboards: Dashboards
  public labels: Labels
  public links: Links
  public organizations: Organizations
  public queries: Queries
  public scrapers: Scrapers
  public setup: Setup
  public tasks: Tasks
  public telegrafConfigs: TelegrafConfigs
  public users: Users
  public variables: Variables
  public write: Write
  public templates: Templates
  public checks: Checks
  public notificationRules: NotificationRules

  constructor(basePath: string, token?: string) {
    let options = {}

    if (token) {
      options = {...options, headers: {Authorization: `Token ${token}`}}
    }

    this.auth = new Auth(basePath, options)
    this.authorizations = new Authorizations(basePath, options)
    this.buckets = new Buckets(basePath, options)
    this.dashboards = new Dashboards(basePath, options)
    this.labels = new Labels(basePath, options)
    this.links = new Links(basePath, options)
    this.organizations = new Organizations(basePath, options)
    this.queries = new Queries(basePath, options)
    this.scrapers = new Scrapers(basePath, options)
    this.setup = new Setup(basePath, options)
    this.tasks = new Tasks(basePath, options)
    this.telegrafConfigs = new TelegrafConfigs(basePath, options)
    this.users = new Users(basePath, options)
    this.variables = new Variables(basePath, options)
    this.write = new Write(basePath, options)
    this.templates = new Templates(basePath, options)
    this.checks = new Checks(basePath, options)
    this.notificationRules = new NotificationRules(basePath, options)
  }
}
