export declare class Deferred {
    promise: Promise<any>;
    resolve: (...rest: any[]) => void;
    reject: (error: Error) => void;
    constructor();
}
