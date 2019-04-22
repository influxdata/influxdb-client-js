import { OnboardingRequest, OnboardingResponse } from '../api';
import { ServiceOptions } from '../types';
interface IStatus {
    allowed: boolean;
}
export default class {
    private service;
    private serviceOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    create(props: OnboardingRequest): Promise<OnboardingResponse>;
    status(): Promise<IStatus>;
}
export {};
