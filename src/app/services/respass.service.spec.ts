import { TestBed } from '@angular/core/testing';

import { RespassService } from './respass.service';

describe('RespassService', () => {
  let service: RespassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
