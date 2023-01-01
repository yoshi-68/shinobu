import { CharacterGroup, SearchResultOrganizations } from './types';

declare global {
  interface Window {
    electron: IElectron;
  }
}

export interface IElectron {
  logInfo: (...params: unknown[]) => void;
  getCharaData: () => Promise<CharacterGroup>;
  seachOrganizations: (
    team1Characters: Character[],
    currentPage: number,
    sortType: string
  ) => Promise<SearchResultOrganizations>;
}
