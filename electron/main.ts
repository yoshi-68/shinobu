import { BrowserWindow, app, ipcMain, session } from 'electron';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';
import * as appLogger from 'electron-log';
import * as path from 'path';
import { CharactersData } from 'types';
import * as url from 'url';

import { MAXIMUM_LOG_FILE_SIZE } from '../settings';
import { getCharaData } from './modules/charaData';
import { toOneLine } from './modules/format';

appLogger.transports.file.maxSize = MAXIMUM_LOG_FILE_SIZE;
const isPackaged = app.isPackaged;

const createWindow = () => {
  const winParam = {
    width: 800,
    height: 1000,
    minHeight: 800,
    minWidth: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  };

  const win = new BrowserWindow(winParam);
  win.setMenuBarVisibility(false); //画面上部のメニューを削除する

  appLogger.info('ウインドウ生成の情報:', toOneLine(winParam));

  const appURL = isPackaged
    ? url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
      })
    : 'http://localhost:3000';

  if (!isPackaged) win.webContents.openDevTools();

  win.loadURL(appURL);
  appLogger.info('ウインドウ生成が完了');
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

const logInfo = (event: Event, ...params: any[]): void =>
  appLogger.info(...params);

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
ipcMain.on('log-info', logInfo);
ipcMain.handle(
  'get-chara-data',
  async (event: Event): Promise<CharactersData> => {
    const charaData = await getCharaData();
    return charaData;
  }
);
