import { TestBed } from '@angular/core/testing';

import { ClientcallService } from './clientcall.service';

describe('ClientcallService', () => {
  let service: ClientcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
