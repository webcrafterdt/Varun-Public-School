import { TestBed } from '@angular/core/testing';

import { LactureService } from './lacture.service';

describe('LactureService', () => {
  let service: LactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
