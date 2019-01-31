import { OnboardingRequest, OnboardingResponse, SetupApi } from "../api";

interface IStatus {
  allowed: boolean;
}

export default class {
  private service: SetupApi;

  constructor(basePath: string) {
    this.service = new SetupApi({ basePath });
  }

  public async create(props: OnboardingRequest): Promise<OnboardingResponse> {
    const {data: response} = await this.service.setupPost(props);

    return response;
  }

  public async status(): Promise<IStatus> {
    const {data} = await this.service.setupGet();

    return {allowed: !!data.allowed};
  }
}
