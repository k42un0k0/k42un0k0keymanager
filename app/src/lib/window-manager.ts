import type { BrowserWindow } from 'electron';
import type { App } from './app';
import { AuthWindow } from './window/auth-window';
import { InitialWindow } from './window/initial-window';
import { MainWindow } from './window/main-window';
import { SplashWindow } from './window/splash-window';
import { UserAccountManagerWindow } from './window/user-account-manager-window';

export enum WindowEnum {
  auth = 0,
  main = 1,
  userAccountManager = 2,
}

export class WindowManager {
  windowMap = new Map<number, BrowserWindow>();

  constructor(private readonly app: App) {}

  async createWindow(value: WindowEnum): Promise<void> {
    const [browser, url] = this._getWindowConfig(value);
    await this._createWindow(browser, url);
  }

  async initializeWindow(): Promise<void> {
    if (this.app.isProd) {
      const splash = new SplashWindow().configure();
      const initial = new InitialWindow().configure();
      this._pushWindow(splash[0]);
      this._pushWindow(initial[0]);
      initial[0].hide();
      void splash[0].loadURL(splash[1]);
      await initial[0].loadURL(initial[1]);
      splash[0].close();
      initial[0].show();
    } else {
      const [browser, url] = new InitialWindow().configure();
      this._pushWindow(browser);
      await browser.loadURL(url);
    }
  }

  closeWindow(id: number): void {
    const win = this.windowMap.get(id);
    if (win == null) throw new Error('存在しないウィンドウです');
    win.close();
  }

  private _pushWindow(browser: BrowserWindow): void {
    this.windowMap.set(browser.id, browser);
  }

  private async _createWindow(browser: BrowserWindow, url: string): Promise<void> {
    this._pushWindow(browser);
    return browser.loadURL(url);
  }

  private _getWindowConfig(value: WindowEnum): [BrowserWindow, string] {
    switch (value) {
      case WindowEnum.auth:
        return new AuthWindow().configure();
      case WindowEnum.main:
        return new MainWindow().configure();
      case WindowEnum.userAccountManager:
        return new UserAccountManagerWindow().configure();
      default:
        throw new Error('引数の値が不正です');
    }
  }
}
