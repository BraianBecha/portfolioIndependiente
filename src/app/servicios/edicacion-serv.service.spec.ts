import { TestBed } from '@angular/core/testing';

import { EdicacionServService } from './educacion-serv.service';

describe('EdicacionServService', () => {
  let service: EdicacionServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdicacionServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
