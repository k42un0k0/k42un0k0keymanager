import { Component } from '@angular/core';
import { ElectronService } from 'src/app/base/electron/electron.service';
import { ExportService } from 'src/app/base/electron/export.service';
import { OuterAccountRepository } from 'src/app/base/repositories/outer-account.repository';
import { UserAccountRepository } from 'src/app/base/repositories/user-account.repository';
import { OuterAccount, UserAccount } from 'src/models';

@Component({
  selector: 'app-user-account-manager',
  templateUrl: './user-account-manager.component.html',
  styleUrls: ['./user-account-manager.component.scss'],
})
export class UserAccountManagerComponent {
  userAccounts = this.userAccountRepository.list;

  constructor(
    private userAccountRepository: UserAccountRepository,
    private outerAccountRepository: OuterAccountRepository,
    private electronService: ElectronService,
    private exportService: ExportService
  ) {}

  closeWindow(): void {
    this.electronService.close();
  }
  async exportUnko(): Promise<void> {
    const userlist: UserAccount[] = await this.userAccountRepository.getAll();
    const data: [UserAccount, OuterAccount[]][] = await Promise.all(
      userlist.map(async (user) => {
        const outers = await this.outerAccountRepository.getAllByUserAcountID(user.id);
        return [user, outers] as [UserAccount, OuterAccount[]];
      })
    );

    const result =
      'accountname, provider name, userid, password\n' +
      data
        .reduce((acc, datum) => {
          return acc.concat(
            datum[1].reduce((unko, outer) => {
              if (outer == null) return unko;
              return [...unko, [datum[0].name, outer.providerName, outer.userId, outer.password].join(',')];
            }, [] as any[])
          );
        }, [] as any[])
        .join('\n');
    this.exportService.export(result);
  }
}
