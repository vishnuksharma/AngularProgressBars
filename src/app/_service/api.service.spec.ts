import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ApiService]
    });
  });
 
  it('should be created Api service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should be call to getBars and get dynemic response', inject([ApiService], (service: ApiService) => {
    return service.getBars().subscribe( data => {
      expect(data).not.toEqual(jasmine.any(Array));
    });
  }));

  it('should be call to getBars and check inside response', inject([ApiService], (service: ApiService) => {
    return service.getBars().subscribe( data => {
      expect(data.buttons).toEqual(jasmine.any(Array));
      expect(data.bars).toEqual(jasmine.any(Array));
      expect(data.limit).toEqual(jasmine.any(Number));
    });
  }));
});
