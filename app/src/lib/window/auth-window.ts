import * as url from 'url';
import { BrowserWindow } from 'electron';
import { MyWindow } from './my-window';
import { frontPath, preloadPath } from 'src/constant';
import type { Emitter } from 'src/emitter/emitter';

export class AuthWindow extends MyWindow {
  protected config = {
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadPath,
    },
    frame: false,
    resizable: false,
    backgroundColor: '#333',
  };

  configure(): [BrowserWindow, string, Emitter[]] {
    const win = new BrowserWindow(this.config);
    const startUrl = `${
      process.env.ELECTRON_START_URL ??
      url.format({
        pathname: frontPath,
        protocol: 'file:',
        slashes: true,
      })
    }#/auth/login`;
    return [win, startUrl, []];
  }
}
