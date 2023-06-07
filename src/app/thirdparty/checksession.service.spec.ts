import { TestBed } from '@angular/core/testing';

import { ChecksessionService } from './checksession.service';

describe('ChecksessionService', () => {
  let service: ChecksessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecksessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
