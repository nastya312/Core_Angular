import { TestBed } from '@angular/core/testing';

import { SerpageService } from './serpage.service';

describe('SerpageService', () => {
  let service: SerpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
