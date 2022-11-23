import { contextBridge, ipcRenderer } from 'electron';
import { Guards } from 'types';

contextBridge.exposeInMainWorld('electron', {
  logInfo: (...params: any[]): void => {
    ipcRenderer.send('log-info', ...params);
  },
  getCharaData: async (): Promise<Guards> =>
    await ipcRenderer.invoke('get-chara-data'),
});
