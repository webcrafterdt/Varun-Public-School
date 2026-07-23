import { TestBed } from '@angular/core/testing';

import { SubjectallottedService } from './subjectallotted.service';

describe('SubjectallottedService', () => {
  let service: SubjectallottedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectallottedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
