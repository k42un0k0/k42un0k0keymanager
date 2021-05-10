import { TestBed } from '@angular/core/testing';

import { ElectronService } from './electron.service';

describe('ElectronService', () => {
  let service: ElectronService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Window, useValue: window }],
    });
    service = TestBed.inject(ElectronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
