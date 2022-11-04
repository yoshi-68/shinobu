import { CharactersData } from 'types';

declare global {
  interface Window {
    electron: IElectron;
  }
}

export interface IElectron {
  logInfo: (...params: any[]) => void;
  getCharaData: () => Promise<CharactersData>;
  counter: (count: number) => number;
}
