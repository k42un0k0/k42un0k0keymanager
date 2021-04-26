import { ipcMain } from "electron";
import { EVENTS } from "./events";
import { windowManager } from "./singleton";


ipcMain.on(EVENTS.DEBUG, (e) => {
  console.log(e);
  console.log("debug")
})

ipcMain.on(EVENTS.OPEN_WINDOW.AUTH, () => {
  windowManager.createWindow("#/auth/login");
})

ipcMain.on(EVENTS.OPEN_WINDOW.USER_ACCOUNT_MANAGER, () => {
  windowManager.createWindow("#/user-account-manager");
})
