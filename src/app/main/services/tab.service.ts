import { Injectable } from '@angular/core';
import { UserAccount } from 'src/models';

export class Tab {
  title: string;
  active: boolean = false;
  constructor(public userAccount: UserAccount) {
    this.title = userAccount.name;
  }
}

@Injectable({
  providedIn: "root"
})
export class TabService {

  constructor() { }

  tabs: Tab[] = [];
  createTab(userAccount: UserAccount) {
    this.tabs.push(new Tab(userAccount))
  }
  clickTab(index: number) {
    this.tabs.forEach((tab, i) => {
      if (i === index) tab.active = true;
      tab.active = false
    });
  }
  closeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
