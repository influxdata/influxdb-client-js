import Tasks from "./wrappers/tasks"
import Auth from "./wrappers/auth"
import Links from "./wrappers/links"

export default class Client {
  public links: Links
  public tasks: Tasks
  public auth: Auth

  constructor(basePath: string) {
    this.tasks = new Tasks(basePath)
    this.auth = new Auth(basePath)
    this.links = new Links(basePath)
  }
}