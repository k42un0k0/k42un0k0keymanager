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
  get getFromUrl(): (url: string) => Promise<string> {
    return window.main.iconService.getFromUrl;
  }
  get closeWindow(): () => Promise<void> {
    return window.main.windowManager.close;
  }

  constructor() {}
  openWindow(value: WindowEnum): Promise<void> {
    switch (value) {
      case WindowEnum.auth:
        return window.main.windowManager.auth();
      case WindowEnum.userAccountManager:
        return window.main.windowManager.userAccountManager();
      case WindowEnum.main:
        return window.main.windowManager.main();
    }
  }
}
