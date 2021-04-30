import { ipcMain } from "electron";
import { EVENTS } from "./events";
import { WindowEnum } from "./services/window-manager";
import { windowManager } from "./singleton";


ipcMain.on(EVENTS.DEBUG, (e) => {
  console.log(e);
  console.log("debug")
})

ipcMain.on(EVENTS.OPEN_WINDOW.AUTH, () => {
  return windowManager.createWindow(WindowEnum.auth);
})

ipcMain.on(EVENTS.OPEN_WINDOW.USER_ACCOUNT_MANAGER, () => {
  return windowManager.createWindow(WindowEnum.userAccountManager);
})
ipcMain.on(EVENTS.OPEN_WINDOW.MAIN, () => {
  return windowManager.createWindow(WindowEnum.main);
})

ipcMain.on(EVENTS.CLOSE, (e) => {
  windowManager.closeWindow(e.sender.id)
})
