import { TestBed } from '@angular/core/testing';

import { AssignhomeworkService } from './assignhomework.service';

describe('AssignhomeworkService', () => {
  let service: AssignhomeworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignhomeworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
