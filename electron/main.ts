import { BrowserWindow, app, ipcMain } from "electron";
import installExtension, {
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS,
} from "electron-devtools-installer";
import * as appLogger from "electron-log";
import * as path from "path";
import * as url from "url";

import { getCharaData } from "./modules/charaData";
import { toOneline } from "./modules/format";
import { maximumLogFileSize } from "./settings";

appLogger.transports.file.maxSize = maximumLogFileSize;
const isPackaged = app.isPackaged;
const charactersData = new Array();

const createWindow = () => {
    const winParam = {
        width: 1000,
        height: 1000,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    };

    const win = new BrowserWindow(winParam);
    win.setMenuBarVisibility(false); //画面上部のメニューを削除する

    appLogger.info("ウインドウ生成の情報:", toOneline(winParam));

    const appURL = isPackaged
        ? url.format({
              pathname: path.join(__dirname, "../index.html"),
              protocol: "file:",
              slashes: true,
          })
        : "http://localhost:3000";

    if (!isPackaged) win.webContents.openDevTools();

    win.loadURL(appURL);
    appLogger.info("ウインドウ生成が完了");
};

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        appLogger.info(
            `********** アプリケーション終了: version ${app.getVersion()} **********`
        );
        app.quit();
    }
});

process.on("uncaughtException", (error: Error) => {
    appLogger.error("予期しないエラーが発生:", error);
    appLogger.error(
        `********** アプリケーション異常終了: version ${app.getVersion()} **********`
    );
    app.quit();
});

const logInfo = (event: Event, ...params: any[]): void =>
    appLogger.info(...params);

app.whenReady().then(() => {
    appLogger.info(
        `********** アプリケーション起動: version ${app.getVersion()} **********`
    );

    //ipcイベントリスナー
    ipcMain.on("log-info", logInfo);

    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    getCharaData(appLogger, charactersData);

    /*
     ** React Developer Toolsのインストール
     **
     ** パッケージングする際はコメントアウトすること
     ** exeファイルがエラーになり実行できなくなる
     */
    // if (!isPackaged) {
    //     installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
    //         .then((name) => console.log(name))
    //         .catch((err) => console.log(err));
    // }
});
