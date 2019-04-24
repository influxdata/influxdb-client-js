interface Saga<T> {
    action: () => Promise<T>;
    rollback: (result?: T) => Promise<void>;
    result?: T;
}
declare function saga<T>(sagas: Saga<T>[]): Promise<Array<T>>;
export default saga;
