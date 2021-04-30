import { Injectable } from '@angular/core';

export enum WindowEnum {
  auth,
  main,
  userAccountSetting,
}
@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  constructor() {}
  openWindow(value: WindowEnum) {
    switch (value) {
      case WindowEnum.auth:
        return window.main.window.auth();
      case WindowEnum.userAccountSetting:
        return window.main.window.userAccountManager();
      case WindowEnum.main:
        return window.main.window.main();
    }
  }
  closeWindow() {
    window.main.close();
  }
}
