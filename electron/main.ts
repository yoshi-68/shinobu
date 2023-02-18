import { Character, CharacterGroup, SearchResultOrganizations } from '@types';
import { BrowserWindow, app, ipcMain } from 'electron';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';
import * as appLogger from 'electron-log';
import * as path from 'path';
import * as url from 'url';

import { getCharaData } from './modules/charaData';
import { fetchOrganizations } from './modules/fetchOrganizations';
import { toOneLine } from './modules/format';
import { MAXIMUM_LOG_FILE_SIZE } from './settings';

appLogger.transports.file.maxSize = MAXIMUM_LOG_FILE_SIZE;
const isPackaged = app.isPackaged;

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    const mainWindow = BrowserWindow.getAllWindows()[0];
    const args = commandLine.slice(1);
    mainWindow.webContents.send('args', args);
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 780,
    height: 1000,
    minHeight: 800,
    minWidth: 780,
    icon: path.join(__dirname, '../icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    autoHideMenuBar: true,
  });

  appLogger.info('ウインドウ生成の情報:', toOneLine(win.getBounds()));

  appLogger.info('ウインドウ生成の情報:', toOneLine(win.getBounds()));

  const appURL = isPackaged
    ? url.pathToFileURL(path.join(__dirname, '../index.html')).toString()
    : 'http://localhost:3000';

  win.loadURL(appURL);
  appLogger.info('ウインドウ生成が完了');

  if (!isPackaged) {
    win.webContents.openDevTools();
  }
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    appLogger.info(
      `********** アプリケーション終了: version ${app.getVersion()} **********`
    );
    app.quit();
  }
});

process.on('uncaughtException', (error: Error) => {
  appLogger.error('予期しないエラーが発生:', error);
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
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  /*
   * DevToolのショートカットキー: Ctrl + Shift + I
   * パッケージングの際はコメントアウトをする
   */
  // await installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS]);
});

//----------------------------------------
// IPC通信
//----------------------------------------
ipcMain.on('log-info', (event: Event, ...params: unknown[]): void =>
  appLogger.info(...params)
);
ipcMain.handle(
  'get-chara-data',
  async (event: Event): Promise<CharacterGroup> => {
    const characterGroup = await getCharaData();
    return characterGroup;
  }
);
ipcMain.handle(
  'search-Organizations',
  async (
    event,
    teamCharacters: Character[],
    currentPage: number,
    sortType: string
  ): Promise<SearchResultOrganizations> => {
    return await fetchOrganizations(teamCharacters, currentPage, sortType);
  }
);
