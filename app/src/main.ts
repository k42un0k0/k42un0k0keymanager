import { app, BrowserWindow } from 'electron';
import { iconServiceListener, windowManagerListener } from './listener';
import { ipcService, windowManager } from './singleton';
import { loadElectronReload } from './unsafe';

function main(): void {
  if (!app.isPackaged) {
    loadElectronReload();
  }

  void app.whenReady().then(() => {
    ipcService.addEventListener({
      ...windowManagerListener,
      ...iconServiceListener,
    });
    void windowManager.initializeWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      void windowManager.initializeWindow();
    }
  });
}

main();
