import { BrowserWindow } from "electron";
import { AuthWindow } from "./window/auth-window";
import { MainWindow } from "./window/main-window";
import { UserAccountManagerWindow } from "./window/user-account-manager-window";
import { MyWindow } from "./window/my-window";
import { InitialWindow } from "./window/initial-window";

export enum WindowEnum {
  auth,
  main,
  userAccountManager,
  initial
}

export class WindowManager {
  windowMap: Map<number, BrowserWindow> = new Map;

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
      case WindowEnum.initial:
        win = new InitialWindow();
        break;
      default:
        throw new Error("引数の値が不正です")
    }
    const [browser, url] = win.configure();
    this.windowMap.set(browser.id, browser);
    return browser.loadURL(url);
  }

  closeWindow(id: number) {
    const win = this.windowMap.get(id);
    if (win == null) throw new Error("存在しないウィンドウです")
    win.close();
  }
}
