import { app, BrowserWindow } from 'electron';
import path from 'path';
import { iconServiceListener, windowManagerListener } from './listener';
import { ipcService, windowManager } from './singleton';

function main() {
  if (!app.isPackaged) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('electron-reload')(path.join(__dirname, 'main.js'), {
      electron: require(path.join(__dirname, '../../node_modules/electron')),
    });
  }

  app.whenReady().then(() => {
    ipcService.addEventListener({
      ...windowManagerListener,
      ...iconServiceListener,
    });
    windowManager.initializeWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      windowManager.initializeWindow();
    }
  });
}

main();

require('./listener');
