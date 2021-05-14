import * as url from 'url';
import { BrowserWindow } from 'electron';
import { MyWindow } from './my-window';
import { frontPath, preloadPath } from 'src/constant';

export class InitialWindow extends MyWindow {
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

    const startUrl = `${
      process.env.ELECTRON_START_URL ??
      url.format({
        pathname: frontPath,
        protocol: 'file:',
        slashes: true,
      })
    }#/initial`;
    return [win, startUrl];
  }
}
