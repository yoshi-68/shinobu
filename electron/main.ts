import * as cheerio from "cheerio";
import { BrowserWindow, app, ipcMain, net, session } from "electron";
import installExtension, {
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS,
} from "electron-devtools-installer";
import appLogger from "electron-log";
import * as path from "path";
import * as superagent from "superagent";
import * as url from "url";

import { jsonOneline } from "./modules/format";
import { charaDataURL, maximumLogFileSize, userAgent } from "./settings";

appLogger.transports.file.maxSize = maximumLogFileSize;
const isPackaged = app.isPackaged;

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

    appLogger.info("ウインドウ生成の情報:", jsonOneline(winParam));

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

const getCharaData = async () => {
    appLogger.info("キャラデータの取得を開始");
    const characters = new Array();
    superagent
        .get(charaDataURL)
        .set("User-Agent", userAgent)
        .end((err, res: superagent.Response) => {
            const $ = cheerio.load(res.text);
            const charaRawData = $("#char_selected").children("input");
            charaRawData.each((index, element) => {
                const attr = element["attribs"];
                const charaData = {
                    id: attr["value"],
                    name: attr["data-name"],
                    charaImage: attr["data-img"],
                    type: attr["data-type"],
                    position: attr["data-position"],
                };

                characters.push(charaData);
            });

            appLogger.info("キャラデータ:", jsonOneline(characters));
            appLogger.info("キャラデータの取得を完了");

            return characters;
        });
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

    getCharaData();

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
