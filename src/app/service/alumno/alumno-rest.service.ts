import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Alumno } from 'src/app/models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoRestService {

  constructor(private http: HttpClient) { }

  public getAllAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>('http://localhost:8080/alumnos/all');
  }

  public saveAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>('http://localhost:8080/alumnos/save', alumno);
  }

  public updateAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>('http://localhost:8080/alumnos/update', alumno);
  }

  public deleteAlumno(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/alumnos/delete/${id}`);
  }
}
