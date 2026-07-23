import { TestBed } from '@angular/core/testing';

import { LeaveapplicationService } from './leaveapplication.service';

describe('LeaveapplicationService', () => {
  let service: LeaveapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
