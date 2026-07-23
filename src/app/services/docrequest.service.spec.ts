import { TestBed } from '@angular/core/testing';

import { DocrequestService } from './docrequest.service';

describe('DocrequestService', () => {
  let service: DocrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
