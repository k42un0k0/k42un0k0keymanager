import { APIService, ListUserAccountsQuery } from '../../API.service';
import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { nonNullable } from '../utils/nonNullable';

@Injectable({
  providedIn: 'root',
})
export class UserAccountRepository {
  constructor(private apiService: APIService) {
    this.updateUserAccounts();
    this.apiService.OnCreateUserAccountListener.subscribe(() => {
      this.updateUserAccounts();
    });
  }

  userAccounts = new BehaviorSubject<NonNullable<ListUserAccountsQuery['items']>>([]);

  updateUserAccounts() {
    from(this.apiService.ListUserAccounts()).subscribe((list) => {
      this.userAccounts.next(nonNullable.array(list.items));
    });
  }
}
