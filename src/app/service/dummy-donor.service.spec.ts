import { TestBed } from '@angular/core/testing';

import { DummyDonorService } from './dummy-donor.service';

describe('DummyDonorService', () => {
  let service: DummyDonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyDonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
