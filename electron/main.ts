import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from "electron-devtools-installer";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.setMenuBarVisibility(false); //画面上部のメニューを削除する

  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, "../index.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";

  win.loadURL(appURL);

  if(!app.isPackaged) {
    win.webContents.openDevTools();
  }
};

app.on("window-all-closed", () => {
  if(process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  /* 
  ** React Developer Toolsのインストール
  **
  ** パッケージングする際はコメントアウトすること
  ** exeファイルがエラーになり実行できなくなる
  */
  // if(!app.isPackaged) {
  //   installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
  //     .then((name) => console.log(name))
  //     .catch((err) => console.log(err));
  // }
});
