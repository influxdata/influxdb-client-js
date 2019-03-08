import {DefaultApi} from '../api'

export default class {
  private service: DefaultApi

  constructor(basePath: string) {
    this.service = new DefaultApi({basePath})
  }

  public async signout(): Promise<Response> {
    const {data} = await this.service.signoutPost()

    return data
  }

  public async signin(username: string, password: string): Promise<Response> {
    const {data} = await this.service.signinPost(undefined, {
      auth: {username, password},
    })

    return data
  }
}
