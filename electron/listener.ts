import { ipcMain } from "electron";
import { EVENTS } from "./events";
import { windowManager } from "./singleton";


ipcMain.on(EVENTS.DEBUG, (e) => {
  console.log(e);
  console.log("debug")
})

ipcMain.on(EVENTS.OPEN_WINDOW.AUTH, () => {
  return windowManager.createWindow("#/auth/login");
})

ipcMain.on(EVENTS.OPEN_WINDOW.USER_ACCOUNT_MANAGER, () => {
  return windowManager.createWindow("#/user-account-manager");
})
ipcMain.on(EVENTS.OPEN_WINDOW.MAIN, () => {
  return windowManager.createWindow("#/");
})

ipcMain.on(EVENTS.CLOSE, (e) => {
  windowManager.closeWindow(e.sender.id)
})
