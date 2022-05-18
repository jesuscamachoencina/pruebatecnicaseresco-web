import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProfesoresAlumnos } from 'src/app/models/ProfesoresAlumnos';

@Injectable({
  providedIn: 'root'
})
export class ProfesorAlumnoRestService {

  constructor(private http: HttpClient) { }

  public getAlumnosPorProfesor(id: number): Observable<ProfesoresAlumnos[]> {
    return this.http.get<ProfesoresAlumnos[]>(`http://localhost:8080/profesoresAlumnos/${id}`);
  }

  public saveProfesorAlumno(profesorAlumno: ProfesoresAlumnos): Observable<ProfesoresAlumnos> {
    return this.http.post<ProfesoresAlumnos>('http://localhost:8080/profesoresAlumnos/save', profesorAlumno);
  }

  public deleteProfesorAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/profesoresAlumnos/delete/${id}`);
  }
}
