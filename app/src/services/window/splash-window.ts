import { splashPath } from "../../constant";
import { BrowserWindow } from "electron";
import * as url from "url";
import { MyWindow } from "./my-window";
import { preloadPath } from "../../constant";

export class SplashWindow implements MyWindow {
  configure(): [BrowserWindow, string] {
    const win = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: {
        preload: preloadPath,
      },
      frame: false,
      resizable: false,
      backgroundColor: "#333",
    });

    const startUrl = url.format({
      pathname: splashPath,
      protocol: "file:",
      slashes: true,
    });
    return [win, startUrl];
  }
}
