import {
  APIService,
  CreateOuterAccountInput,
  CreateOuterAccountMutation,
  CreateUserAccountInput,
  CreateUserAccountMutation,
  DeleteOuterAccountInput,
  DeleteOuterAccountMutation,
  DeleteUserAccountInput,
  DeleteUserAccountMutation,
  GetOuterAccountQuery,
  GetUserAccountQuery,
  ListOuterAccountsQuery,
  ListUserAccountsQuery,
  ModelOuterAccountConditionInput,
  ModelOuterAccountFilterInput,
  ModelUserAccountConditionInput,
  ModelUserAccountFilterInput,
  OnCreateOuterAccountSubscription,
  OnCreateUserAccountSubscription,
  OnDeleteOuterAccountSubscription,
  OnDeleteUserAccountSubscription,
  OnUpdateOuterAccountSubscription,
  OnUpdateUserAccountSubscription,
  SubscriptionResponse,
  SyncOuterAccountsQuery,
  SyncUserAccountsQuery,
  UpdateOuterAccountInput,
  UpdateOuterAccountMutation,
  UpdateUserAccountInput,
  UpdateUserAccountMutation,
} from './../../API.service';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'zen-observable-ts';

import { UserAccountRepository } from './user-account.repository';

describe('UserAccountRepository', () => {
  let service: UserAccountRepository;

  beforeEach(() => {
    const mockApiServie = jasmine.createSpyObj('APIService', ['ListUserAccounts']);
    mockApiServie.ListUserAccounts.and.returnValue(new Promise((resolve) => resolve({ items: [] })));
    mockApiServie.OnCreateUserAccountListener = Observable.of();
    TestBed.configureTestingModule({
      providers: [{ provide: APIService, useValue: mockApiServie }],
    });
    service = TestBed.inject(UserAccountRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
