import type { BrowserWindow } from 'electron';
import { AuthWindow } from './auth-window';
import { InitialWindow } from './initial-window';
import { MainWindow } from './main-window';
import { UserAccountManagerWindow } from './user-account-manager-window';
import type { Emitter } from 'src/lib/emitter/emitter';
import type { EmitterManager } from 'src/lib/emitter/emitter-manager';

export enum WindowEnum {
  auth = 0,
  main = 1,
  userAccountManager = 2,
}

export class WindowManager {
  windowMap = new Map<number, BrowserWindow>();

  constructor(private readonly emitterManager: EmitterManager) {}

  async createWindow(value: WindowEnum): Promise<void> {
    const [browser, url, emitters] = this._getWindowConfig(value);
    this.emitterManager.addEmitters(browser.id, emitters);
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

  private _getWindowConfig(value: WindowEnum): [BrowserWindow, string, Emitter[]] {
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
