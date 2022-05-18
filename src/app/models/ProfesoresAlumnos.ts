import { Alumno } from './Alumno';
import { Profesor } from './Profesor';

export interface ProfesoresAlumnos {
  id?: number,
  profesor: Profesor,
  alumno: Alumno
}
