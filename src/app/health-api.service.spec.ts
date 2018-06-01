import { TestBed, inject } from '@angular/core/testing';

import { HealthApiService } from './health-api.service';

describe('HealthApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthApiService]
    });
  });

  it('should be created', inject([HealthApiService], (service: HealthApiService) => {
    expect(service).toBeTruthy();
  }));
});
