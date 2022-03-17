import { TestBed } from '@angular/core/testing';

import { ResolveWeatherService } from './resolve-weather.service';

describe('ResolveWeatherService', () => {
  let service: ResolveWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
