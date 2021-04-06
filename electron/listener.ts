import { ipcMain } from "electron";


ipcMain.on("debug", () => {
    console.log("debug")
})