import { BrowserWindow } from 'electron';

export interface MyWindow {
  config: {
    width: number;
    height: number;
    webPreferences: {
      preload: string;
    };
    frame: boolean;
    backgroundColor: string;
  };
  configure(): [BrowserWindow, string];
}
