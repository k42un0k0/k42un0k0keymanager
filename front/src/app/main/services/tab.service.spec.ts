import { TestBed } from '@angular/core/testing';

import { Tab, TabService } from './tab.service';
import { createScheduler } from 'src/app/__tests__/createScheduler';
import { UserAccount } from 'src/models';

describe('main/services/TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createOrActivateTab', () => {
    it('create a tab', () => {
      const scheduler = createScheduler();
      scheduler.run(({ expectObservable, cold, flush }) => {
        const userAccount = new UserAccount({ name: 'a', OuterAccounts: [] });
        const tab = new Tab(userAccount);
        const throttle = 'x';
        cold(throttle, { x: userAccount }).subscribe((a) => {
          service.createOrActivateTab(a);
        });

        tab.activate();
        expectObservable(service.current$).toBe(throttle, { x: tab });
        flush();
        expect(service.tabs).toEqual([tab]);
      });
    });

    it('create tab and deactivate other tabs', () => {
      const scheduler = createScheduler();
      scheduler.run(({ expectObservable, cold, flush }) => {
        const userAccount1 = new UserAccount({ name: 'a', OuterAccounts: [] });
        const userAccount2 = new UserAccount({ name: 'b', OuterAccounts: [] });
        const tab1 = new Tab(userAccount1);
        const tab2 = new Tab(userAccount2);
        const throttle = 'x-y';
        cold(throttle, { x: userAccount1, y: userAccount2 }).subscribe((a) => {
          service.createOrActivateTab(a);
        });

        tab2.activate();
        expectObservable(service.current$).toBe(throttle, { x: tab1, y: tab2 });
        flush();
        expect(service.tabs).toEqual([tab1, tab2]);
      });
    });

    it('activate the tab', () => {
      const scheduler = createScheduler();
      scheduler.run(({ expectObservable, cold, flush }) => {
        const userAccount1 = new UserAccount({ name: 'a', OuterAccounts: [] });
        const userAccount2 = new UserAccount({ name: 'b', OuterAccounts: [] });
        const tab1 = new Tab(userAccount1);
        const tab2 = new Tab(userAccount2);
        const throttle = 'x-y-z';
        cold(throttle, { x: userAccount1, y: userAccount2, z: userAccount1 }).subscribe((a) => {
          service.createOrActivateTab(a);
        });

        tab1.activate();
        expectObservable(service.current$).toBe(throttle, { x: tab1, y: tab2, z: tab1 });
        flush();
        expect(service.tabs).toEqual([tab1, tab2]);
      });
    });
  });

  it('clickTab', () => {
    expect(service).toBeTruthy();
  });

  it('closeTab', () => {
    expect(service).toBeTruthy();
  });
});
