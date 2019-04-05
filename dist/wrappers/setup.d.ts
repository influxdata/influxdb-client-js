import { OnboardingRequest, OnboardingResponse } from '../api';
interface IStatus {
    allowed: boolean;
}
export default class {
    private service;
    constructor(basePath: string);
    create(props: OnboardingRequest): Promise<OnboardingResponse>;
    status(): Promise<IStatus>;
}
export {};
