import { TestBed } from '@angular/core/testing';

import { ToolbarServService } from './toolbar-serv.service';

describe('ToolbarServService', () => {
  let service: ToolbarServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolbarServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
