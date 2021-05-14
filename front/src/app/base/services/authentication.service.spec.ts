import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { TestModule } from 'src/app/__tests__/test.module';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
