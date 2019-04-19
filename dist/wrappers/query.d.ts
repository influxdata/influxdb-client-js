import { ServiceOptions } from '../types';
import { Stream } from 'stream';
export default class {
    private basePath;
    private baseOptions;
    constructor(basePath: string, baseOptions: ServiceOptions);
    execute(orgID: string, query: string, extern?: File): {
        stream: Stream;
        cancel: () => void;
    };
}
