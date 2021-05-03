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
  constructor() {}
  openWindow(value: WindowEnum): Promise<void> {
    switch (value) {
      case WindowEnum.auth:
        return window.main.window.auth();
      case WindowEnum.userAccountManager:
        return window.main.window.userAccountManager();
      case WindowEnum.main:
        return window.main.window.main();
    }
  }
  closeWindow(): void {
    window.main.close();
  }
}
