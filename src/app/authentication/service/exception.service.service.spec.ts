import { TestBed } from '@angular/core/testing';

import { ExceptionServiceService } from './exception.service.service';

describe('ExceptionServiceService', () => {
  let service: ExceptionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
