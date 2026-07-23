import { TestBed } from '@angular/core/testing';

import { MarkattendanceService } from './markattendance.service';

describe('MarkattendanceService', () => {
  let service: MarkattendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkattendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
