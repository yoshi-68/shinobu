import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
    logInfo: (...params: any[]): void => {
        ipcRenderer.send("log-info", ...params);
    },
    counter: (count: number): number => {
        ipcRenderer.send("log-info", "count:", count);
        return count + 1;
    },
});
