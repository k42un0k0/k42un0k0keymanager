import * as url from 'url';
import { BrowserWindow } from 'electron';
import { MyWindow } from './my-window';
import { frontPath, preloadPath } from 'src/constant';

export class UserAccountManagerWindow extends MyWindow {
  protected config = {
    width: 800,
    height: 600,
    webPreferences: {
      preload: preloadPath,
    },
    frame: false,
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
    }#/user-account-manager`;
    return [win, startUrl];
  }
}
