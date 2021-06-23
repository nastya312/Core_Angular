import { TestBed } from '@angular/core/testing';

import { AddvidService } from './addvid.service';

describe('AddvidService', () => {
  let service: AddvidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddvidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
