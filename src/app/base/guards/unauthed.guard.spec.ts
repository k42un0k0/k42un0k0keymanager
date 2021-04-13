import { TestBed } from '@angular/core/testing';

import { UnauthedGuard } from './unauthed.guard';

describe('UnauthedGuard', () => {
  let guard: UnauthedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
