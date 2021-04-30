import {
  APIService,
  CreateUserAccountMutation,
  GetUserAccountQuery,
  ListUserAccountsQuery,
  UpdateUserAccountMutation,
} from '../../API.service';
import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { nonNullable } from '../utils/nonNullable';
import { ZenObservable } from 'zen-observable-ts';

@Injectable({
  providedIn: 'root',
})
export class UserAccountRepository {
  constructor(private apiService: APIService) {}

  userAccounts = new BehaviorSubject<NonNullable<ListUserAccountsQuery['items']>>([]);

  createSub?: ZenObservable.Subscription;
  updateSub?: ZenObservable.Subscription;
  startSubscribe(owner: string): void {
    this._updateUserAccounts();
  }

  endSubscribe(): void {}

  private _updateUserAccounts(): void {
    from(this.apiService.ListUserAccounts()).subscribe((list) => {
      this.userAccounts.next(nonNullable.array(list.items));
    });
  }

  get(id: string): Promise<GetUserAccountQuery> {
    return this.apiService.GetUserAccount(id);
  }

  update(input: { id: string; name: string; _version: number }): Promise<UpdateUserAccountMutation> {
    return this.apiService.UpdateUserAccount(input);
  }

  create(input: { name: string; token: string }): Promise<CreateUserAccountMutation> {
    return this.apiService.CreateUserAccount(input);
  }
}
