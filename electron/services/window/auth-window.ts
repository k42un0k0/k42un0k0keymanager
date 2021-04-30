import { BrowserWindow } from 'electron';
import * as url from 'url';
import { MyWindow } from './my-window';
import { appPath, preloadPath } from '../../constant';

export class AuthWindow implements MyWindow {
  configure(): [BrowserWindow, string] {
    const win = new BrowserWindow({
      width: 800,
      height: 800,
      webPreferences: {
        preload: preloadPath,
      },
      frame: false,
      resizable: false,
      backgroundColor: '#333',
    });

    const startUrl =
      (process.env.ELECTRON_START_URL ||
        url.format({
          pathname: appPath,
          protocol: 'file:',
          slashes: true,
        })) + '#/auth/login';
    return [win, startUrl];
  }
}
