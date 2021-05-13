import { app as electronApp, BrowserWindow } from 'electron';
import path from 'path';
import { cipherServiceListener, iconServiceListener, keyServiceListener, windowManagerListener } from './listener';
import { registerAutoReload } from './reload';
import { ipcService, windowManager } from './singleton';
function main(): void {
  registerAutoReload(path.join(__dirname, '..'));
  ipcService.addEventListener({
    ...windowManagerListener,
    ...iconServiceListener,
    ...cipherServiceListener,
    ...keyServiceListener,
  });
  void electronApp.whenReady().then(() => {
    void windowManager.initializeWindow();
  });

  electronApp.on('browser-window-created', (_, browserWindow) => {
    windowManager.windowMap.set(browserWindow.id, browserWindow);
  });

  electronApp.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      electronApp.quit();
    }
  });

  electronApp.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      void windowManager.initializeWindow();
    }
  });
}

main();
