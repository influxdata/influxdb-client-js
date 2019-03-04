import { User, Users, UsersApi } from "../api";

export default class {
  private service: UsersApi;

  constructor(basePath: string) {
    this.service = new UsersApi({ basePath });
  }

  public async me(): Promise<User> {
    const { data } = await this.service.meGet();

    return data;
  }

  public async getAllUsers(): Promise<Users> {
    const { data } = await this.service.usersGet();

    return data;
  }
}
