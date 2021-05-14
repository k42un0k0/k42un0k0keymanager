import type { BrowserWindow } from 'electron';

export abstract class MyWindow {
  protected abstract config: {
    width: number;
    height: number;
    webPreferences: {
      preload: string;
    };
    frame: boolean;
    backgroundColor: string;
  };

  abstract configure(): [BrowserWindow, string];
}
