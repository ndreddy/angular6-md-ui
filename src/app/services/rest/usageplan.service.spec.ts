import { TestBed, inject } from '@angular/core/testing';

import { UsageplanService } from './usageplan.service';

describe('UsageplanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsageplanService]
    });
  });

  it('should be created', inject([UsageplanService], (service: UsageplanService) => {
    expect(service).toBeTruthy();
  }));
});
