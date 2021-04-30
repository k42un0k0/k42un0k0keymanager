import { join } from 'path';
import { BrowserWindow } from "electron";
import * as url from "url";

export class WindowManager {
  windowMap: Map<number, BrowserWindow> = new Map;

  createWindow(path: string) {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: join(__dirname, "../preload.js")
      },
      frame: false,
    })

    const startUrl = (process.env.ELECTRON_START_URL || url.format({
      pathname: join(__dirname, '../k42un0k0passwordmanager/index.html'),
      protocol: 'file:',
      slashes: true
    })) + path;
    this.windowMap.set(win.id, win);
    return win.loadURL(startUrl);
  }

  closeWindow(id: number) {
    const win = this.windowMap.get(id);
    if (win == null) throw new Error("存在しないウィンドウです")
    win.close();
  }
}
