import { BrowserWindow } from 'electron';
import * as url from 'url';
import { preloadPath, splashPath } from '../../constant';
import { MyWindow } from './my-window';

export class SplashWindow extends MyWindow {
  protected config = {
    width: 400,
    height: 300,
    webPreferences: {
      preload: preloadPath,
    },
    frame: false,
    resizable: false,
    backgroundColor: '#333',
  };

  configure(): [BrowserWindow, string] {
    const win = new BrowserWindow(this.config);

    const startUrl = url.format({
      pathname: splashPath,
      protocol: 'file:',
      slashes: true,
    });
    return [win, startUrl];
  }
}
