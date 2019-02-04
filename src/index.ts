import Auth from "./wrappers/auth";
import Authorizations from "./wrappers/authorizations";
import Buckets from "./wrappers/buckets";
import Labels from "./wrappers/labels";
import Links from "./wrappers/links";
import Organizations from "./wrappers/organizations";
import Scrapers from "./wrappers/scrapers";
import Setup from "./wrappers/setup";
import Sources from "./wrappers/sources";
import Tasks from "./wrappers/tasks";
import TelegrafConfigs from "./wrappers/telegrafConfigs";
import Users from "./wrappers/users";
import Write from "./wrappers/write";

export default class Client {
  public auth: Auth;
  public authorizations: Authorizations;
  public buckets: Buckets;
  public labels: Labels;
  public links: Links;
  public organizations: Organizations;
  public scrapers: Scrapers;
  public tasks: Tasks;
  public telegrafConfigs: TelegrafConfigs;
  public users: Users;
  public write: Write;
  public setup: Setup;
  public sources: Sources;

  constructor(basePath: string) {
    this.auth = new Auth(basePath);
    this.authorizations = new Authorizations(basePath);
    this.buckets = new Buckets(basePath);
    this.labels = new Labels(basePath);
    this.links = new Links(basePath);
    this.organizations = new Organizations(basePath);
    this.scrapers = new Scrapers(basePath);
    this.tasks = new Tasks(basePath);
    this.telegrafConfigs = new TelegrafConfigs(basePath);
    this.users = new Users(basePath);
    this.write = new Write(basePath);
    this.setup = new Setup(basePath);
    this.sources = new Sources(basePath);
  }
}
