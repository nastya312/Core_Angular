import { TestBed } from '@angular/core/testing';

import { VidpageService } from './vidpage.service';

describe('VidpageService', () => {
  let service: VidpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VidpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
