import { app, BrowserWindow } from "electron";
import path from "path";
import { windowManagerListener } from "./listener";
import { windowManager, ipcService } from "./singleton";

function main() {
  if (app.isPackaged) {
  } else {
    require("electron-reload")(path.join(__dirname, "main.js"), {
      electron: require(path.join(__dirname, "../../node_modules/electron")),
    });
  }

  app.whenReady().then(() => {
    ipcService.addEventListener(windowManagerListener);
    windowManager.initializeWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      windowManager.initializeWindow();
    }
  });
}

main();

require("./listener");
