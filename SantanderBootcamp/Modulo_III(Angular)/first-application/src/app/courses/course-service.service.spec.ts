import { TestBed } from '@angular/core/testing';

import { CourseService } from './course-service.service';

describe('CourseServiceService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
