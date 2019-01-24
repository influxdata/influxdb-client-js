import Auth from "./wrappers/auth";
import Buckets from "./wrappers/buckets";
import Labels from "./wrappers/labels";
import Links from "./wrappers/links";
import Organizations from "./wrappers/organizations";
import Scrapers from "./wrappers/scrapers";
import Tasks from "./wrappers/tasks";
import TelegrafConfigs from "./wrappers/telegrafConfigs";
import Users from "./wrappers/users"

export default class Client {
  public links: Links;
  public tasks: Tasks;
  public auth: Auth;
  public labels: Labels;
  public buckets: Buckets;
  public organizations: Organizations;
  public scrapers: Scrapers;
  public telegrafConfigs: TelegrafConfigs;
  public users: Users;

  constructor(basePath: string) {
    this.auth = new Auth(basePath);
    this.buckets = new Buckets(basePath);
    this.labels = new Labels(basePath);
    this.links = new Links(basePath);
    this.organizations = new Organizations(basePath);
    this.scrapers = new Scrapers(basePath);
    this.tasks = new Tasks(basePath);
    this.telegrafConfigs = new TelegrafConfigs(basePath);
    this.users = new Users(basePath)
  }
}
