import { TestBed } from '@angular/core/testing';
import { Observable } from 'zen-observable-ts';

import { UserAccountRepository } from './user-account.repository';
import { APIService } from 'src/app/API.service';
import { TestModule } from 'src/app/test/test.module';

describe('UserAccountRepository', () => {
  let service: UserAccountRepository;

  beforeEach(() => {
    const mockApiServie: any = {};
    mockApiServie.ListUserAccounts = jest.fn().mockReturnValue(new Promise((resolve) => resolve({ items: [] })));
    mockApiServie.OnCreateUserAccountListener = Observable.of();
    TestBed.configureTestingModule({
      providers: [{ provide: APIService, useValue: mockApiServie }],
      imports: [TestModule],
    });
    service = TestBed.inject(UserAccountRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
