import { TestBed } from '@angular/core/testing';

import { AlumnoRestService } from './alumno-rest.service';

describe('AlumnoRestService', () => {
  let service: AlumnoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
