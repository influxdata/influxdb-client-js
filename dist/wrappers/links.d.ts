import { Routes } from '../api';
export default class {
    private service;
    constructor(basePath: string);
    getAll(): Promise<Routes>;
}
