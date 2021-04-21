import { ipcMain } from "electron";
import * as url from "url";
import { BrowserWindow } from "electron"
import path from "path"
import { EVENTS } from "./events";


ipcMain.on(EVENTS.DEBUG, () => {
  console.log("debug")
})

ipcMain.on(EVENTS.OPEN_WINDOW.AUTH, () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    },
    frame: false
  })

  const startUrl = (process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, 'k42un0k0passwordmanager/index.html'),
    protocol: 'file:',
    slashes: true
  })) + "#/auth/login";
  win.loadURL(startUrl);
})

ipcMain.on(EVENTS.OPEN_WINDOW.USER_ACCOUNT_MANAGER, () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    },
    frame: false
  })

  const startUrl = (process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, 'k42un0k0passwordmanager/index.html'),
    protocol: 'file:',
    slashes: true
  })) + "#/auth/login";
  win.loadURL(startUrl);
})

ipcMain.on(EVENTS.OPEN_WINDOW.USER_ACCOUNT_MANAGER, () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    },
    frame: false
  })

  const startUrl = (process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, 'k42un0k0passwordmanager/index.html'),
    protocol: 'file:',
    slashes: true
  })) + "#/user-account-manager";
  win.loadURL(startUrl);
})
