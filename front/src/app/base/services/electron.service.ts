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
  getFromUrl = window.main.iconService.getFromUrl;
  closeWindow = window.main.windowManager.close;

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
