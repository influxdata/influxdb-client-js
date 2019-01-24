import Auth from "./wrappers/auth";
import Buckets from "./wrappers/buckets";
import Labels from "./wrappers/labels";
import Links from "./wrappers/links";
import Organizations from "./wrappers/organizations";
import Scrapers from "./wrappers/scrapers";
import Tasks from "./wrappers/tasks";
import TelegrafConfigs from "./wrappers/telegrafConfigs";

export default class Client {
  public links: Links;
  public tasks: Tasks;
  public auth: Auth;
  public labels: Labels;
  public buckets: Buckets;
  public organizations: Organizations;
  public scrapers: Scrapers;
  public telegrafConfigs: TelegrafConfigs;

  constructor(basePath: string) {
    this.tasks = new Tasks(basePath);
    this.auth = new Auth(basePath);
    this.links = new Links(basePath);
    this.labels = new Labels(basePath);
    this.buckets = new Buckets(basePath);
    this.organizations = new Organizations(basePath);
    this.scrapers = new Scrapers(basePath);
    this.telegrafConfigs = new TelegrafConfigs(basePath);
  }
}
