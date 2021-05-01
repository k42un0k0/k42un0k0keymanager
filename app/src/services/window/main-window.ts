import { BrowserWindow } from 'electron';
import * as url from 'url';
import { MyWindow } from './my-window';
import { appPath, preloadPath } from '../../constant';

export class MainWindow implements MyWindow {
  configure(): [BrowserWindow, string] {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: preloadPath,
      },
      frame: false,
      backgroundColor: '#333',
    });

    const startUrl =
      (process.env.ELECTRON_START_URL ||
        url.format({
          pathname: appPath,
          protocol: 'file:',
          slashes: true,
        })) + '#/';
    return [win, startUrl];
  }
}
