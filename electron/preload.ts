import { Character, CharacterGroup, SearchResultOrganizations } from '@types';
import { contextBridge, ipcRenderer } from 'electron';

/**
 * Node.jsのAPIへのアクセスを登録する
 */
contextBridge.exposeInMainWorld('electron', {
  logInfo: (...params: unknown[]): void => {
    ipcRenderer.send('log-info', ...params);
  },
  getCharaData: async (): Promise<CharacterGroup> =>
    await ipcRenderer.invoke('get-chara-data'),
  seachOrganizations: async (
    team1Characters: Character[],
    currentPage: number,
    sortType: string
  ): Promise<SearchResultOrganizations> => {
    const result = await ipcRenderer.invoke(
      'search-Organizations',
      team1Characters,
      currentPage,
      sortType
    );
    return result;
  },
});
