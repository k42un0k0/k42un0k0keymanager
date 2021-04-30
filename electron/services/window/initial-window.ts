import { BrowserWindow } from 'electron';
import * as url from 'url';
import { MyWindow } from './my-window';
import { appPath, preloadPath } from '../../constant';

export class InitialWindow implements MyWindow {
  configure(): [BrowserWindow, string] {
    const win = new BrowserWindow({
      width: 400,
      height: 300,
      webPreferences: {
        preload: preloadPath,
      },
      frame: false,
      resizable: false,
    });

    const startUrl =
      (process.env.ELECTRON_START_URL ||
        url.format({
          pathname: appPath,
          protocol: 'file:',
          slashes: true,
        })) + '#/initial';
    return [win, startUrl];
  }
}
