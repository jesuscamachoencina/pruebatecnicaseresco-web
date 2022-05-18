import { TestBed } from '@angular/core/testing';

import { ProfesorRestService } from './profesor-rest.service';

describe('ProfesorRestService', () => {
  let service: ProfesorRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
