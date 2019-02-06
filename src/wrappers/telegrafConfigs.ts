import { Organization, Telegraf, TelegrafPluginConfig, TelegrafRequest, TelegrafsApi } from "../api";

export default class {

  private service: TelegrafsApi;

  constructor(basePath: string) {
    this.service = new TelegrafsApi({basePath});
  }

  public async getAll(): Promise<TelegrafPluginConfig[]> {
    const {data: {configurations}} = await this.service.telegrafsGet("");
    return configurations || [];
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

  public async get(id: string): Promise<Telegraf> {
    const {data} = await this.service.telegrafsTelegrafIDGet(id);

    return data;
  }

  public async create(props: Telegraf): Promise<Telegraf> {
    const {data} = await this.service.telegrafsPost(props);

    return data;
  }

  public async update(id: string, props: Partial<Telegraf>): Promise<Telegraf> {
    const original = await this.get(id);
    const update = {...original, ...props} as TelegrafRequest;

    const {data: updated} = await this.service.telegrafsTelegrafIDPut(id, update);

    return updated;
  }

  public async delete(id: string): Promise <Response> {
    const {data} = await this.service.telegrafsTelegrafIDDelete(id);

    return data as Response;
  }
}
