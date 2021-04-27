import { APIService, ListUserAccountsQuery } from '../../API.service';
import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountRepository {

  constructor(private apiService: APIService) {
    this._updateUserAccounts();
    this.apiService.OnCreateUserAccountListener.subscribe(() => {
      this._updateUserAccounts();
    })
  }

  userAccounts = new BehaviorSubject<ListUserAccountsQuery["items"]>([]);

  private _updateUserAccounts() {
    from(this.apiService.ListUserAccounts()).subscribe((list) => {
      this.userAccounts.next(list.items);
    })
  }
}
