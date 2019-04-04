export default class {
    private service;
    constructor(basePath: string);
    signout(): Promise<Response>;
    signin(username: string, password: string): Promise<Response>;
}
