import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication.service';

import { UnauthedGuard } from './unauthed.guard';

describe('UnauthedGuard', () => {
  let guard: UnauthedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AuthenticationService, useValue: {} }],
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(UnauthedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
