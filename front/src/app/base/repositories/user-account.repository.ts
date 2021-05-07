import {
  APIService,
  CreateUserAccountMutation,
  DeleteUserAccountInput,
  GetUserAccountQuery,
  ListUserAccountsQuery,
  UpdateUserAccountMutation,
} from '../../API.service';
import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { nonNullable } from 'lib';
import { AbstractRepository } from './abstract.repository';
import { UserAccount } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class UserAccountRepository extends AbstractRepository<UserAccount> {
  constructor(private apiService: APIService) {
    super(UserAccount);
  }

  userAccounts = new BehaviorSubject<UserAccount[]>([]);

  startSubscribe(): void {
    this._updateUserAccounts();
  }

  endSubscribe(): void {}

  private _updateUserAccounts(): void {
    from(this.getAll()).subscribe((list) => {
      this.userAccounts.next(list);
    });
  }
}
