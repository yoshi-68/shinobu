import { contextBridge, ipcRenderer } from "electron";
import { charaData } from "types";

contextBridge.exposeInMainWorld("electron", {
    logInfo: (...params: any[]): void => {
        ipcRenderer.send("log-info", ...params);
    },
    getCharaData: async (): Promise<charaData[]> =>
        await ipcRenderer.invoke("get-chara-data"),
    counter: (count: number): number => {
        ipcRenderer.send("log-info", "count:", count);
        return count + 1;
    },
});
