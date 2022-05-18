import { Alumno } from './Alumno';
import { Profesor } from './Profesor';

export interface RelacionProfesorAlumnos {
  profesor: Profesor,
  relacion: { idRelacion?: number, alumno: Alumno }[]
}
