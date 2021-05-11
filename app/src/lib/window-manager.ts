import { BrowserWindow } from 'electron';
import { App } from './app';
import { AuthWindow } from './window/auth-window';
import { InitialWindow } from './window/initial-window';
import { MainWindow } from './window/main-window';
import { MyWindow } from './window/my-window';
import { SplashWindow } from './window/splash-window';
import { UserAccountManagerWindow } from './window/user-account-manager-window';

export enum WindowEnum {
  auth,
  main,
  userAccountManager,
}

export class WindowManager {
  windowMap: Map<number, BrowserWindow> = new Map();

  constructor(private app: App) {}

  createWindow(value: WindowEnum): Promise<void> {
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
        throw new Error('引数の値が不正です');
    }
    const [browser, url] = win.configure();
    this._pushWindow(browser);
    return browser.loadURL(url);
  }

  async initializeWindow(): Promise<void> {
    if (this.app.isProd) {
      const splash = new SplashWindow().configure();
      const initial = new InitialWindow().configure();
      this._pushWindow(splash[0]);
      this._pushWindow(initial[0]);
      initial[0].hide();
      splash[0].loadURL(splash[1]);
      await initial[0].loadURL(initial[1]);
      splash[0].close();
      initial[0].show();
    } else {
      const [browser, url] = new InitialWindow().configure();
      this._pushWindow(browser);
      await browser.loadURL(url);
    }
  }

  private _pushWindow(browser: BrowserWindow) {
    this.windowMap.set(browser.id, browser);
  }

  closeWindow(id: number): void {
    const win = this.windowMap.get(id);
    if (win == null) throw new Error('存在しないウィンドウです');
    win.close();
  }
}
