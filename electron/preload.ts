import { CharacterGroup } from '@types';
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  logInfo: (...params: any[]): void => {
    ipcRenderer.send('log-info', ...params);
  },
  getCharaData: async (): Promise<CharacterGroup> =>
    await ipcRenderer.invoke('get-chara-data'),
});
