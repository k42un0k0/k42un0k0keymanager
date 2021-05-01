import {
  APIService,
  CreateOuterAccountInput,
  CreateOuterAccountMutation,
  GetOuterAccountQuery,
  ListOuterAccountsQuery,
  ModelIDInput,
  ModelOuterAccountFilterInput,
  UpdateOuterAccountInput,
  UpdateOuterAccountMutation,
} from '../../API.service';
import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { nonNullable } from '../utils/nonNullable';
import { ZenObservable } from 'zen-observable-ts';

@Injectable({
  providedIn: 'root',
})
export class OuterAccountRepository {
  userAccountID?: string;
  get currentUserFilter(): ModelOuterAccountFilterInput {
    return { userAccountID: { eq: this.userAccountID } };
  }
  constructor(private apiService: APIService) {}

  outerAcconts = new BehaviorSubject<NonNullable<NonNullable<ListOuterAccountsQuery['items']>[0]>[]>([]);
  createSub?: ZenObservable.Subscription;
  updateSub?: ZenObservable.Subscription;
  startSubscribe(): void {
    this._updateOuterAccounts();
  }

  endSubscribe(): void {}

  private _updateOuterAccounts(): void {
    from(this.apiService.ListOuterAccounts(this.currentUserFilter)).subscribe((list) => {
      this.outerAcconts.next(nonNullable.arrayItem(nonNullable.array(list.items)));
    });
  }

  get(id: string): Promise<GetOuterAccountQuery> {
    return this.apiService.GetOuterAccount(id);
  }

  update(input: UpdateOuterAccountInput): Promise<UpdateOuterAccountMutation> {
    return this.apiService.UpdateOuterAccount(input);
  }

  create(input: CreateOuterAccountInput): Promise<CreateOuterAccountMutation> {
    return this.apiService.CreateOuterAccount(input);
  }
}
