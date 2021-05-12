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

  public abstract configure(): [BrowserWindow, string];
}
