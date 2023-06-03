import { Character, CharacterGroup, SearchResultOrganizations } from "@types";
import { BrowserWindow, app, ipcMain } from "electron";
// import installExtension, {
//   REACT_DEVELOPER_TOOLS,
//   REDUX_DEVTOOLS,
// } from 'electron-devtools-installer';
import * as appLogger from "electron-log";
import * as path from "path";
import * as url from "url";

import { getCharaData } from "./modules/charaData";
import { fetchOrganizations } from "./modules/fetchOrganizations";
import { toOneLine } from "./modules/format";
import { MAXIMUM_LOG_FILE_SIZE } from "./settings";

appLogger.transports.file.maxSize = MAXIMUM_LOG_FILE_SIZE;
const isPackaged = app.isPackaged;

/**
 * 多重起動をさせない。
 * すでにアプリを起動している場合は、そのアプリにフォーカスを合わせる。
 */
const detectionOfMultipleActivations = () => {
  const gotTheLock = app.requestSingleInstanceLock();

  if (!gotTheLock) app.quit();

  app.on("second-instance", (event, commandLine) => {
    let mainWindow = BrowserWindow.getAllWindows()[0];

    if (!mainWindow) {
      // 既存のウィンドウがない場合は新しいウィンドウを作成する
      mainWindow = createWindow();
    }

    const args = commandLine.slice(1);
    mainWindow.webContents.send("args", args);
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });
};

detectionOfMultipleActivations(); // 多重起動をさせない。

/**
 * アプリのウインドウを生成する。
 *
 * @returns {void}
 */
const createWindow = () => {
  const win = new BrowserWindow({
    width: 780,
    height: 800,
    minHeight: 800,
    minWidth: 780,
    icon: path.join(__dirname, "../icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: true
    },
    autoHideMenuBar: true
  });

  appLogger.info("ウインドウ生成の情報:", toOneLine(win.getBounds()));

  const appURL = isPackaged
    ? url.pathToFileURL(path.join(__dirname, "../index.html")).toString()
    : "http://localhost:3000";

  win.loadURL(appURL);
  appLogger.info("ウインドウ生成が完了");

  if (!isPackaged) {
    win.on("ready-to-show", () => {
      win.webContents.openDevTools();
    });
    // React Developer Toolsのインストールに時間がかかるので、注意が必要。
    // installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS]);
  }

  return win;
};

//----------------------------------------
// アプリのイベントハンドラ
//----------------------------------------
app.on("window-all-closed", () => {
  appLogger.info(
    `********** アプリケーション終了: version ${app.getVersion()} **********`
  );
  if (process.platform !== "darwin") return;
  app.quit();
});

process.on("uncaughtException", (error: Error) => {
  appLogger.error("予期しないエラーが発生:", error);
  appLogger.error(
    `********** アプリケーション異常終了: version ${app.getVersion()} **********`
  );
  app.quit();
});

app.whenReady().then(async () => {
  appLogger.info(
    `********** アプリケーション起動: version ${app.getVersion()} **********`
  );

  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

//----------------------------------------
// IPC通信
//----------------------------------------

/**
 * ログのinfoレベルを出力する。
 */
ipcMain.on("log-info", (event: Event, ...params: unknown[]): void =>
  appLogger.info(...params)
);
ipcMain.handle("get-chara-data", async (): Promise<CharacterGroup> => {
  return await getCharaData();
});

/**
 * 防衛突破編成の検索を行う。
 *
 * @returns {Promise<SearchResultOrganizations>} 防衛突破編成の結果
 */
ipcMain.handle(
  "search-Organizations",
  async (
    event,
    teamCharacters: Character[],
    currentPage: number,
    sortType: string
  ): Promise<SearchResultOrganizations> => {
    return await fetchOrganizations(teamCharacters, currentPage, sortType);
  }
);
