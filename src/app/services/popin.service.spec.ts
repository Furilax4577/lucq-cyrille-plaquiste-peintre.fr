import { TestBed } from '@angular/core/testing';

import { PopinService } from './popin.service';

describe('PopinService', () => {
  let service: PopinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
