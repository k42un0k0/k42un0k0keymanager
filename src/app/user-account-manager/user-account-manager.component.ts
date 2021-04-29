import { UserAccountRepository } from './../base/repositories/user-account.repository';
import { APIService } from './../API.service';
import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/models';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
