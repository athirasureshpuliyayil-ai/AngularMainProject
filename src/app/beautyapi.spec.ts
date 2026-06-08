import { TestBed } from '@angular/core/testing';

import { Beautyapi } from './beautyapi';

describe('Beautyapi', () => {
  let service: Beautyapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Beautyapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
