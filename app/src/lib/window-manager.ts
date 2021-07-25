import type { BrowserWindow } from 'electron';
import type { App } from './app';
import { AuthWindow } from './window/auth-window';
import { InitialWindow } from './window/initial-window';
import { MainWindow } from './window/main-window';
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
    await browser.loadURL(url);
  }

  initializeWindow(): void {
    const [initialBrowser, initialUrl] = new InitialWindow().configure();

    void initialBrowser.loadURL(initialUrl);
    initialBrowser.once('ready-to-show', () => {
      initialBrowser.show();
      initialBrowser.reload();
    });
  }

  closeWindow(id: number): void {
    const win = this.windowMap.get(id);
    if (win == null) throw new Error('存在しないウィンドウです');
    win.close();
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
