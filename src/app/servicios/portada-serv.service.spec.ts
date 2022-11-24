import { TestBed } from '@angular/core/testing';

import { PortadaServService } from './portada-serv.service';

describe('PortadaServService', () => {
  let service: PortadaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortadaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
