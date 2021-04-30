import { APIService, ListUserAccountsQuery } from '../../API.service';
import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { nonNullable } from '../utils/nonNullable';
import { ZenObservable } from "zen-observable-ts";

@Injectable({
  providedIn: 'root'
})
export class UserAccountRepository {
  constructor(private apiService: APIService) {
  }

  userAccounts = new BehaviorSubject<NonNullable<ListUserAccountsQuery["items"]>>([]);

  createSub?: ZenObservable.Subscription;
  updateSub?: ZenObservable.Subscription;
  startSubscribe(owner: string) {
    this._updateUserAccounts();
  }

  endSubscribe() {
  }

  private _updateUserAccounts() {
    from(this.apiService.ListUserAccounts()).subscribe((list) => {
      this.userAccounts.next(nonNullable.array(list.items));
    })
  }

  get(id: string) {
    return this.apiService.GetUserAccount(id);
  }

  update(input: { id: string, name: string, _version: number }) {
    return this.apiService.UpdateUserAccount(input);
  }

  create(input: { name: string, token: string }) {
    return this.apiService.CreateUserAccount(input);
  }

}