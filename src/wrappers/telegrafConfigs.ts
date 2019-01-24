import { Organization, TelegrafPluginConfig, TelegrafsApi } from "../api";

export default class {
  private service: TelegrafsApi;

  constructor(basePath: string) {
    this.service = new TelegrafsApi({basePath});
  }

  public async getAllByOrg(org: Organization): Promise<TelegrafPluginConfig[]> {
    if (!org.id) {
      throw new Error("organization must have an id");
    }

    const {data: {configurations}} = await this.service.telegrafsGet(org.id);

    return configurations || [];
  }

  public async getTOML(id: string): Promise<string> {
    const options = {
      headers: {
        Accept: "application/toml",
      },
    };

    const {data} = await this.service.telegrafsTelegrafIDGet(id, options);

    return data as string;
  }

  public async delete(id: string): Promise<Response> {
    const {data} = await this.service.telegrafsTelegrafIDDelete(id);

    return data as Response;
  }
}
