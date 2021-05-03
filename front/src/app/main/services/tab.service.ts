import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserAccount } from 'src/models';

export class Tab {
  title: string;
  active = false;
  userAccountID: string;
  constructor(private userAccount: UserAccount) {
    this.title = userAccount.name;
    this.userAccountID = userAccount.id;
  }

  activate(): void {
    this.active = true;
  }
  deactivate(): void {
    this.active = false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor() {}

  current = new BehaviorSubject<Tab | null>(null);
  tabs: Tab[] = [];
  createTab(userAccount: UserAccount): void {
    const tab = new Tab(userAccount);
    tab.activate();
    this.current.next(tab);
    this.tabs.forEach((t) => {
      t.deactivate();
    });
    this.tabs.push(tab);
  }
  clickTab(index: number): void {
    console.log('index ', index);
    this.tabs.forEach((tab, i) => {
      if (i === index) {
        tab.activate();
      } else {
        tab.deactivate();
      }
    });
  }
  closeTab(index: number): void {
    this.tabs.splice(index, 1);
  }
}
