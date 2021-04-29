import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OuterAccount, UserAccount } from 'src/models';
import { UserAccountRepository } from '../base/repositories/user-account.repository';
import { nonNullable } from '../base/utils/nonNullable';
import { SidebarItem } from './components/sidebar/sidebar.component';
import { TabItem } from './components/tab/tab.component';
import { TabService } from './services/tab.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private userAccountRepository: UserAccountRepository, private tabService: TabService) { }

  open: boolean = false;

  onClickHome() {
    this.open = !this.open;
  }

  sidebarItems: Observable<SidebarItem[]> = this.userAccountRepository.userAccounts.pipe(map((value) => {
    return value.map((v) => {
      return { title: nonNullable.string(v?.name), onClick: () => { this.tabService.createTab(v as UserAccount) } }
    })
  }))

  account: OuterAccount = {
    id: "",
    providerName: "Twitter",
    iconPath: "",
    userId: "k42un0k0",
    link: "",
    password: "",
  }
}
