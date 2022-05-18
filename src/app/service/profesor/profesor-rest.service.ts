import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Profesor } from 'src/app/models/Profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorRestService {

  constructor(private http: HttpClient) { }

  public getAllProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>('http://localhost:8080/profesores/all');
  }

  public saveProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>('http://localhost:8080/profesores/save', profesor);
  }

  public updateProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.put<Profesor>('http://localhost:8080/profesores/update', profesor);
  }

  public deleteProfesor(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/profesores/delete/${id}`);
  }
}
