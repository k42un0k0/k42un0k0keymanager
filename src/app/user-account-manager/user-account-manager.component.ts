import { UserAccountRepository } from './../base/repositories/user-account.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account-manager',
  templateUrl: './user-account-manager.component.html',
  styleUrls: ['./user-account-manager.component.scss']
})
export class UserAccountManagerComponent implements OnInit {

  constructor(private userAccountRepository: UserAccountRepository) { }

  ngOnInit(): void {
  }

  userAccounts = this.userAccountRepository.userAccounts;

  closeWindow() {
    window.close();
  }
}
