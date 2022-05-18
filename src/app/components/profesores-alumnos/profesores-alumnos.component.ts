import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlumnoRestService } from 'src/app/service/alumno/alumno-rest.service';
import { ProfesorRestService } from 'src/app/service/profesor/profesor-rest.service';
import { ProfesorAlumnoRestService } from 'src/app/service/profesorAlumno/profesor-alumno-rest.service';

import { Alumno } from 'src/app/models/Alumno';
import { ProfesoresAlumnos } from 'src/app/models/ProfesoresAlumnos';
import { RelacionProfesorAlumnos } from 'src/app/models/RelacionProfesorAlumnos';

@Component({
  selector: 'app-profesores-alumnos',
  templateUrl: './profesores-alumnos.component.html',
  styleUrls: ['./profesores-alumnos.component.sass']
})
export class ProfesoresAlumnosComponent implements OnInit {
  private someRowExpanded: boolean[] = [];

  listaRelacion: RelacionProfesorAlumnos[] = [];
  listaAlumnosAsignados: Alumno[][] = [];
  listaAlumnosNoAsignados: Alumno[][] = [];

  constructor(private profesoresAlumnosService: ProfesorAlumnoRestService, private alumnoService: AlumnoRestService, private profesorService: ProfesorRestService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.cargarRelaciones();
  }

  async cargarRelaciones() {
    this.spinner.show();
    const response = await this.profesorService.getAllProfesores().toPromise();
    if (response) {
      let i = 0;
      for (const profesor of response) {
        this.listaRelacion.push({ profesor, relacion: [] });
        this.someRowExpanded.push(false);
        this.listaAlumnosAsignados.push([]);
        this.listaAlumnosNoAsignados.push([]);
        if (profesor.id) {
          const resp = await this.profesoresAlumnosService.getAlumnosPorProfesor(profesor.id).toPromise();
          if (resp) {
            for (const relacion of resp) {
              this.listaRelacion[i].relacion.push({ idRelacion: relacion.id, alumno: relacion.alumno });
              this.listaAlumnosAsignados[i].push(relacion.alumno);
            };
          }
        }
        i++;
      };
    }
    setTimeout(() => this.spinner.hide(), 500);
  }

  cargarAlumnos(index: number) {
    if (this.someRowExpanded[index]) {
      this.someRowExpanded[index] = false;
      this.listaAlumnosNoAsignados[index] = [];
    } else {
      this.someRowExpanded[index] = true;
      this.spinner.show();
      this.alumnoService.getAllAlumnos().subscribe(resp => {
        this.listaAlumnosNoAsignados[index] = resp.filter(alumno => !this.listaAlumnosAsignados[index].find(a => a.id === alumno.id));
        setTimeout(() => this.spinner.hide(), 500);
      });
    }
  }

  buscarIndice(relacion: RelacionProfesorAlumnos) {
    return this.listaRelacion.findIndex(rel => rel === relacion);
  }

  async saveRelacion(items: Alumno[], relacion: RelacionProfesorAlumnos) {
    this.spinner.show();
    for (const alumno of items) {
      const profesorAlumno: ProfesoresAlumnos = { profesor: relacion.profesor, alumno };
      await this.profesoresAlumnosService.saveProfesorAlumno(profesorAlumno).toPromise();
      await this.recargarRelaciones();
    }
    setTimeout(() => this.spinner.hide(), 500);
  }

  async deleteRelacion(items: Alumno[], relacion: RelacionProfesorAlumnos) {
    this.spinner.show();
    for (const alumno of items) {
      const idRelacion: number | undefined = relacion.relacion.find(rel => rel.alumno.id === alumno.id)?.idRelacion;
      if (idRelacion) {
        await this.profesoresAlumnosService.deleteProfesorAlumno(idRelacion).toPromise();
        await this.recargarRelaciones();
      }
    }
    setTimeout(() => this.spinner.hide(), 500);
  }

  async recargarRelaciones() {
    this.listaRelacion = [];
    const response = await this.profesorService.getAllProfesores().toPromise();
    if (response) {
      let i = 0;
      for (const profesor of response) {
        this.listaRelacion.push({ profesor, relacion: [] });
        if (profesor.id) {
          const resp = await this.profesoresAlumnosService.getAlumnosPorProfesor(profesor.id).toPromise();
          if (resp) {
            for (const relacion of resp) {
              this.listaRelacion[i].relacion.push({ idRelacion: relacion.id, alumno: relacion.alumno });
            };
          }
        }
        i++;
      };
    }
  }
}
