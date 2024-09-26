import { TestBed } from '@angular/core/testing';

import { CardbuttonsService } from './cardbuttons.service';

describe('CardbuttonsService', () => {
  let service: CardbuttonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardbuttonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
