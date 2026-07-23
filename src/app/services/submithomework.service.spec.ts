import { TestBed } from '@angular/core/testing';

import { SubmithomeworkService } from './submithomework.service';

describe('SubmithomeworkService', () => {
  let service: SubmithomeworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmithomeworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
