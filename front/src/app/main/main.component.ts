import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CHANNELS, IUpdateMessageService, nonNullable } from 'lib';
import { from, Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AccountEditorComponent } from './components/account-editor/account-editor.component';
import { SidebarItem } from './components/sidebar/sidebar.component';
import { Tab, TabService } from './services/tab.service';
import { ElectronListener } from 'src/app/base/electron/utils/electron-listener';
import { UserAccountService } from 'src/app/base/models/userAccount.service';
import { OuterAccountRepository } from 'src/app/base/repositories/outer-account.repository';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { UpdateMessageService } from 'src/app/main/listener/update-message.service';
import { AutoElectronListener } from 'src/app/utils/autoUnlisten.decorator';
import { WINDOW } from 'src/app/utils/token';
import { UserAccount } from 'src/models';

@Component({
  selector: 'app-main',
  template: `
    <app-tabbar class="is-window-frame" (clickHome)="_onClickHome()"></app-tabbar>
    <div class="content">
      <div class="sidebar">
        <app-sidebar [open]="open || tabLength === 0" [sidebarItems]="sidebarItems"></app-sidebar>
      </div>
      <div class="account-list">
        <app-account-card
          *ngFor="let account of outerAccounts | async"
          [account]="account"
          (click)="_OpenEditDialog(account.id)"
        ></app-account-card>
        <button
          class="button"
          (click)="_OpenDialog()"
          mat-mini-fab
          color="primary"
          aria-label="Example icon button with a menu icon"
        >
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./main.component.scss'],
})
@AutoElectronListener
export class MainComponent {
  listener: ElectronListener<IUpdateMessageService>;
  open = false;
  get tabLength(): number {
    return this.tabService.tabs.length;
  }

  sidebarItems: Observable<SidebarItem[]> = this.userAccountRepository.list.pipe(
    mergeMap((v) => {
      async function asyncFilter(array, asyncCallback) {
        const bits = await Promise.all(array.map(asyncCallback));
        return array.filter((_, i) => bits[i]);
      }
      return from(asyncFilter(v, (i) => this.userAccountService.hasKey(i)));
    }),
    map((value) => {
      return value.map((v) => {
        return {
          title: nonNullable.string(v?.name),
          onClick: () => {
            this.tabService.createOrActivateTab(v as UserAccount);
          },
        };
      });
    })
  );

  outerAccounts = this.outerAccountRepository.list.pipe(
    mergeMap((v) => {
      return this.tabService.current$.pipe(
        filter((tab): tab is Tab => tab != null),
        map((t) => {
          return v.filter((item) => item.userAccount.id === t.userAccount.id);
        })
      );
    })
  );
  userAccount!: UserAccount;
  constructor(
    @Inject(WINDOW) private window: Window,
    private userAccountRepository: UserAccountRepository,
    private userAccountService: UserAccountService,
    private outerAccountRepository: OuterAccountRepository,
    private tabService: TabService,
    private dialog: MatDialog
  ) {
    this.tabService.current$.pipe(filter((v): v is Tab => v != null)).subscribe((tab) => {
      this.userAccount = tab.userAccount;
    });
    this.listener = new ElectronListener(this.window).listen(CHANNELS.updateMessageService, new UpdateMessageService());
  }

  _onClickHome(): void {
    this.open = !this.open;
  }

  _OpenDialog(): void {
    const dialogRef = this.dialog.open(AccountEditorComponent, {
      data: { userAccount: this.userAccount },
      width: '500px',
      panelClass: 'custom-modalbox',
    });
  }

  _OpenEditDialog(outerAccountID: string): void {
    const dialogRef = this.dialog.open(AccountEditorComponent, {
      data: { userAccount: this.userAccount, outerAccountID },
      width: '500px',
      panelClass: 'custom-modalbox',
    });
  }
}
