import { TestBed } from '@angular/core/testing';

import { WindowService } from './window.service';

describe('WindowService', () => {
  let service: WindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Window, useValue: window }],
    });
    service = TestBed.inject(WindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
