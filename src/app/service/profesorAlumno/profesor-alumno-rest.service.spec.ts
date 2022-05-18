import { TestBed } from '@angular/core/testing';

import { ProfesorAlumnoRestService } from './profesor-alumno-rest.service';

describe('ProfesorAlumnoRestService', () => {
  let service: ProfesorAlumnoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorAlumnoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
