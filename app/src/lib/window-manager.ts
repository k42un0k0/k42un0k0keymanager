import type { BrowserWindow } from 'electron';
import type { App } from './app';
import { AuthWindow } from './window/auth-window';
import { InitialWindow } from './window/initial-window';
import { MainWindow } from './window/main-window';
import { SplashWindow } from './window/splash-window';
import { UserAccountManagerWindow } from './window/user-account-manager-window';

export enum WindowEnum {
  auth = 'auth',
  main = 'main',
  userAccountManager = 'userAccountManager',
}

export class WindowManager {
  public windowMap = new Map<number, BrowserWindow>();

  public constructor(private readonly app: App) {}

  public async createWindow(value: WindowEnum): Promise<void> {
    switch (value) {
      case WindowEnum.auth:
        await this._createWindow(...new AuthWindow().configure());
        break;
      case WindowEnum.main:
        await this._createWindow(...new MainWindow().configure());
        break;
      case WindowEnum.userAccountManager:
        await this._createWindow(...new UserAccountManagerWindow().configure());
        break;
      default:
        throw new Error('引数の値が不正です');
    }
  }

  public async initializeWindow(): Promise<void> {
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

  public closeWindow(id: number): void {
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
}
