import { SplashWindow } from "./window/splash-window";
import { BrowserWindow } from "electron";
import { AuthWindow } from "./window/auth-window";
import { MainWindow } from "./window/main-window";
import { UserAccountManagerWindow } from "./window/user-account-manager-window";
import { MyWindow } from "./window/my-window";
import { InitialWindow } from "./window/initial-window";
import { App } from "./app";

export enum WindowEnum {
  auth,
  main,
  userAccountManager,
}

export class WindowManager {
  windowMap: Map<number, BrowserWindow> = new Map();

  constructor(private app: App) {}

  createWindow(value: WindowEnum) {
    let win: MyWindow;
    switch (value) {
      case WindowEnum.auth:
        win = new AuthWindow();
        break;
      case WindowEnum.main:
        win = new MainWindow();
        break;
      case WindowEnum.userAccountManager:
        win = new UserAccountManagerWindow();
        break;
      default:
        throw new Error("引数の値が不正です");
    }
    const [browser, url] = win.configure();
    this._pushWindow(browser);
    return browser.loadURL(url);
  }

  async initializeWindow() {
    if (this.app.isProd) {
      let splash = new SplashWindow().configure();
      let initial = new InitialWindow().configure();
      this._pushWindow(splash[0]);
      this._pushWindow(initial[0]);
      initial[0].hide();
      splash[0].loadURL(splash[1]);
      await initial[0].loadURL(initial[1]);
      splash[0].close();
      initial[0].show();
    } else {
      let [browser, url] = new InitialWindow().configure();
      this._pushWindow(browser);
      await browser.loadURL(url);
    }
  }

  private _pushWindow(browser: BrowserWindow) {
    this.windowMap.set(browser.id, browser);
  }

  closeWindow(id: number) {
    const win = this.windowMap.get(id);
    if (win == null) throw new Error("存在しないウィンドウです");
    win.close();
  }
}
