import { TestBed } from '@angular/core/testing';

import { StarWarDataService } from './star-war-data.service';

describe('StarWarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarWarDataService = TestBed.get(StarWarDataService);
    expect(service).toBeTruthy();
  });
});
