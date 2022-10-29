import { contextBridge, ipcRenderer } from 'electron';
import { CharactersData } from 'types';

contextBridge.exposeInMainWorld('electron', {
    logInfo: (...params: any[]): void => {
        ipcRenderer.send('log-info', ...params);
    },
    getCharaData: async (): Promise<CharactersData> =>
        await ipcRenderer.invoke('get-chara-data'),
    counter: (count: number): number => {
        ipcRenderer.send('log-info', 'count:', count);
        return count + 1;
    },
});
