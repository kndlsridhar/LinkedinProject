import { TestBed } from '@angular/core/testing';

import { InputvalidaService } from './inputvalida.service';

describe('InputvalidaService', () => {
  let service: InputvalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputvalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
