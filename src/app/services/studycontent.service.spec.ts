import { TestBed } from '@angular/core/testing';

import { StudycontentService } from './studycontent.service';

describe('StudycontentService', () => {
  let service: StudycontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudycontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
