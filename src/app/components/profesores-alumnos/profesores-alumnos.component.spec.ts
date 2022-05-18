import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresAlumnosComponent } from './profesores-alumnos.component';

describe('ProfesoresAlumnosComponent', () => {
  let component: ProfesoresAlumnosComponent;
  let fixture: ComponentFixture<ProfesoresAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
