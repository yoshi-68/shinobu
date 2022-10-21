declare global {
    interface Window {
        electron: IElectron;
    }
}

export interface IElectron {
    logInfo: (...params: any[]) => {};
    counter: (count: number) => number;
}
