import { ElectronService } from 'src/app/base/services/electron.service';
import { UserAccountRepository } from './../base/repositories/user-account.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account-manager',
  templateUrl: './user-account-manager.component.html',
  styleUrls: ['./user-account-manager.component.scss'],
})
export class UserAccountManagerComponent implements OnInit {
  userAccounts = this.userAccountRepository.userAccounts;

  constructor(private userAccountRepository: UserAccountRepository, private electronService: ElectronService) {}

  ngOnInit(): void {}

  closeWindow(): void {
    this.electronService.closeWindow();
  }
}
