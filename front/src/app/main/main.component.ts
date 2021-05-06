import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
  account: OuterAccount = {
    id: '',
    providerName: 'Twitter',
    iconPath: '',
    userId: 'k42un0k0',
    link: '',
    password: '',
  };
  open = false;
  userAccountID = '';
  get tabLength(): number {
    return this.tabService.tabs.length;
  }

  sidebarItems: Observable<SidebarItem[]> = this.userAccountRepository.userAccounts.pipe(
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

  outerAccounts = this.outerAccountRepository.outerAcconts.pipe(
    map((v) => {
      return v.filter((i): i is NonNullProperty<typeof v[0], 'userAccount'> => true);
    })
  );
  constructor(
    private userAccountRepository: UserAccountRepository,
    private outerAccountRepository: OuterAccountRepository,
    private tabService: TabService,
    private dialog: MatDialog
  ) {
    this.tabService.current.pipe(filter((v): v is Tab => v != null)).subscribe((tab) => {
      console.log(tab);
      outerAccountRepository.userAccountID = tab.userAccountID;
      outerAccountRepository.startSubscribe();
      this.userAccountID = tab.userAccountID;
    });
  }

  _onClickHome(): void {
    this.open = !this.open;
  }

  _OpenDialog(): void {
    const dialogRef = this.dialog.open(AccountEditorComponent, {
      data: { userAccountID: this.userAccountID },
      width: '500px',
      panelClass: 'custom-modalbox',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.outerAccountRepository.startSubscribe();
    });
  }
}
