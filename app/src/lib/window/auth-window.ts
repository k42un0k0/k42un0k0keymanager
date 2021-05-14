import * as url from 'url';
import { BrowserWindow } from 'electron';
import { frontPath, preloadPath } from '../../constant';
import { MyWindow } from './my-window';

export class AuthWindow extends MyWindow {
  protected config = {
    width: 800,
    height: 800,
    webPreferences: {
      preload: preloadPath,
    },
    frame: false,
    resizable: false,
    backgroundColor: '#333',
  };

  configure(): [BrowserWindow, string] {
    const win = new BrowserWindow(this.config);

    const startUrl = `${
      process.env.ELECTRON_START_URL ??
      url.format({
        pathname: frontPath,
        protocol: 'file:',
        slashes: true,
      })
    }#/auth/login`;
    return [win, startUrl];
  }
}
