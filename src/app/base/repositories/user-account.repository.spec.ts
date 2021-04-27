import { TestBed } from '@angular/core/testing';

import { UserAccountRepository } from './user-account.repository';

describe('UserAccountRepository', () => {
  let service: UserAccountRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAccountRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
