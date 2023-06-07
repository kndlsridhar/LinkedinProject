import { TestBed } from '@angular/core/testing';

import { MidlayerService } from './midlayer.service';

describe('MidlayerService', () => {
  let service: MidlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
