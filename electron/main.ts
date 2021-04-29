import { app, BrowserWindow } from "electron"
import path from "path"
import { windowManager } from './singleton';

function main() {
  require('electron-reload')(path.join(__dirname, "main.js"), {
    electron: require('${__dirname}/../../node_modules/electron')
  });

  app.whenReady().then(() => {
    windowManager.createWindow("");
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      windowManager.createWindow("");
    }
  })
}

main()

require("./listener")
