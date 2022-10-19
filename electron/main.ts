import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
import AppLog from "electron-log";
import installExtension, {
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS,
} from "electron-devtools-installer";


const isPackaged = app.isPackaged;

const windowWidthSize = 1000;
const windowHeightSize = 1000;


const createWindow = () => {
    const winParam = {
        width: windowWidthSize,
        height: windowHeightSize,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    };

    const win = new BrowserWindow(winParam);

    win.setMenuBarVisibility(false); //画面上部のメニューを削除する

    const appURL = isPackaged
        ? url.format({
              pathname: path.join(__dirname, "../index.html"),
              protocol: "file:",
              slashes: true,
          })
        : "http://localhost:3000";

    win.loadURL(appURL);

    if (!isPackaged) {
        win.webContents.openDevTools();
    }

    AppLog.info(
        `ウインドウ生成情報: { width: ${winParam.width}, height: ${winParam.height}, isPackaged: ${isPackaged} }`
    );
};

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    /*
     ** React Developer Toolsのインストール
     **
     ** パッケージングする際はコメントアウトすること
     ** exeファイルがエラーになり実行できなくなる
     */
    // if(!isPackaged) {
    //   installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
    //     .then((name) => console.log(name))
    //     .catch((err) => console.log(err));
    // }
});
