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

  isSame(tab: Tab): boolean {
    return this.userAccountID === tab.userAccountID;
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
  createOrActivateTab(userAccount: UserAccount): void {
    const tab = new Tab(userAccount);
    let existTab = false;
    this.tabs.forEach((t) => {
      if (tab.isSame(t)) {
        t.activate();
        existTab = true;
      } else {
        t.deactivate();
      }
    });
    if (existTab) {
      return;
    }
    tab.activate();
    this.current.next(tab);
    this.tabs.push(tab);
  }

  clickTab(index: number): void {
    this.tabs.forEach((tab, i) => {
      if (i === index) {
        tab.activate();
        this.current.next(tab);
      } else {
        tab.deactivate();
      }
    });
  }
  closeTab(index: number): void {
    this.tabs.splice(index, 1);
  }
}
