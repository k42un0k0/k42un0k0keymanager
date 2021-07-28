import type { BrowserWindow } from 'electron';
import { AuthWindow } from './window/auth-window';
import { InitialWindow } from './window/initial-window';
import { MainWindow } from './window/main-window';
import { UserAccountManagerWindow } from './window/user-account-manager-window';
import type { Emitter } from 'src/emitter/emitter';
import type { EmitterManager } from 'src/lib/emitter-manager';

export enum WindowEnum {
  auth = 0,
  main = 1,
  userAccountManager = 2,
}

export class WindowManager {
  windowMap = new Map<number, BrowserWindow>();

  private createListeners: ((window: BrowserWindow) => void)[] = [];

  constructor(private readonly emitterManager: EmitterManager) {}

  addEventListener(event: 'create', listener: (window: BrowserWindow) => void): void {
    this.createListeners.push(listener);
  }

  removeEventListener(event: 'create', listener: (window: BrowserWindow) => void): void {
    this.createListeners = this.createListeners.filter((v) => v !== listener);
  }

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
