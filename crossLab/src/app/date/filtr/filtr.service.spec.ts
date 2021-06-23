import { TestBed } from '@angular/core/testing';

import { FiltrService } from './filtr.service';

describe('FiltrService', () => {
  let service: FiltrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
