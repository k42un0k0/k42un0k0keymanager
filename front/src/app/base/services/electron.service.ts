import { Injectable } from '@angular/core';

export enum WindowEnum {
  auth,
  main,
  userAccountManager,
}
@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  constructor(private window: Window) {}
  get getFromUrl(): (url: string) => Promise<string> {
    return this.window.main.iconService.getFromUrl;
  }
  get closeWindow(): () => Promise<void> {
    return this.window.main.windowManager.close;
  }

  openWindow(value: WindowEnum): Promise<void> {
    switch (value) {
      case WindowEnum.auth:
        return this.window.main.windowManager.auth();
      case WindowEnum.userAccountManager:
        return this.window.main.windowManager.userAccountManager();
      case WindowEnum.main:
        return this.window.main.windowManager.main();
    }
  }
}
