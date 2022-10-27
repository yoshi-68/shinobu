import { charactersData } from "types";

declare global {
    interface Window {
        electron: IElectron;
    }
}

export interface IElectron {
    logInfo: (...params: any[]) => void;
    getCharaData: () => Promise<charactersData>;
    counter: (count: number) => number;
}
