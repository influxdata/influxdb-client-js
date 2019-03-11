import Auth from './wrappers/auth'
import Authorizations from './wrappers/authorizations'
import Buckets from './wrappers/buckets'
import Dashboards from './wrappers/dashboards'
import Labels from './wrappers/labels'
import Links from './wrappers/links'
import Organizations from './wrappers/organizations'
import Protos from './wrappers/protos'
import Queries from './wrappers/queries'
import Scrapers from './wrappers/scrapers'
import Setup from './wrappers/setup'
import Sources from './wrappers/sources'
import Tasks from './wrappers/tasks'
import TelegrafConfigs from './wrappers/telegrafConfigs'
import Users from './wrappers/users'
import Variables from './wrappers/variables'
import Write from './wrappers/write'
import Templates from './wrappers/templates'

export * from './types'
export * from './api'

export default class Client {
  public auth: Auth
  public authorizations: Authorizations
  public buckets: Buckets
  public dashboards: Dashboards
  public labels: Labels
  public links: Links
  public organizations: Organizations
  public protos: Protos
  public queries: Queries
  public scrapers: Scrapers
  public setup: Setup
  public sources: Sources
  public tasks: Tasks
  public telegrafConfigs: TelegrafConfigs
  public users: Users
  public variables: Variables
  public write: Write
  public templates: Templates

  constructor(basePath: string) {
    this.auth = new Auth(basePath)
    this.authorizations = new Authorizations(basePath)
    this.buckets = new Buckets(basePath)
    this.dashboards = new Dashboards(basePath)
    this.labels = new Labels(basePath)
    this.links = new Links(basePath)
    this.organizations = new Organizations(basePath)
    this.protos = new Protos(basePath)
    this.queries = new Queries(basePath)
    this.scrapers = new Scrapers(basePath)
    this.setup = new Setup(basePath)
    this.sources = new Sources(basePath)
    this.tasks = new Tasks(basePath)
    this.telegrafConfigs = new TelegrafConfigs(basePath)
    this.users = new Users(basePath)
    this.variables = new Variables(basePath)
    this.write = new Write(basePath)
    this.templates = new Templates(basePath)
  }
}
