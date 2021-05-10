import { Component } from '@angular/core';
import { UserAccountRepository } from '../base/repositories/user-account.repository';
import { ElectronService } from '../base/services/electron.service';

@Component({
  selector: 'app-user-account-manager',
  templateUrl: './user-account-manager.component.html',
  styleUrls: ['./user-account-manager.component.scss'],
})
export class UserAccountManagerComponent {
  userAccounts = this.userAccountRepository.list;

  constructor(private userAccountRepository: UserAccountRepository, private electronService: ElectronService) {}

  closeWindow(): void {
    this.electronService.closeWindow();
  }
}
