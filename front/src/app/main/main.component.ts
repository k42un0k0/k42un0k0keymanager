import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { OuterAccount, UserAccount } from 'src/models';
import { OuterAccountRepository } from '../base/repositories/outer-account.repository';
import { UserAccountRepository } from '../base/repositories/user-account.repository';
import { nonNullable } from 'lib';
import { SidebarItem } from './components/sidebar/sidebar.component';
import { Tab, TabService } from './services/tab.service';
import { MatDialog } from '@angular/material/dialog';
import { AccountEditorComponent } from './components/account-editor/account-editor.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  open = false;
  get tabLength(): number {
    return this.tabService.tabs.length;
  }

  sidebarItems: Observable<SidebarItem[]> = this.userAccountRepository.list.pipe(
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
      return this.tabService.current.pipe(
        filter((tab): tab is Tab => tab != null),
        map((t) => {
          return v.filter((item) => item.id === t.userAccount.id);
        })
      );
    })
  );
  userAccount!: UserAccount;
  constructor(
    private userAccountRepository: UserAccountRepository,
    private outerAccountRepository: OuterAccountRepository,
    private tabService: TabService,
    private dialog: MatDialog
  ) {
    this.tabService.current.pipe(filter((v): v is Tab => v != null)).subscribe((tab) => {
      this.userAccount = tab.userAccount;
    });
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
}
