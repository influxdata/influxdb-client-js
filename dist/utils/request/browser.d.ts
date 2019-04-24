import { ServiceOptions, File } from '../../types';
import { Stream } from 'stream';
export declare class CancellationError extends Error {
}
export default function (orgID: string, basePath: string, baseOptions: ServiceOptions, query: string, extern?: File): {
    stream: Stream;
    cancel: () => void;
};
