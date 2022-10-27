import { charaData } from "types";

declare global {
    interface Window {
        electron: IElectron;
    }
}

export interface IElectron {
    logInfo: (...params: any[]) => void;
    getCharaData: () => Promise<charaData[]>;
    counter: (count: number) => number;
}
