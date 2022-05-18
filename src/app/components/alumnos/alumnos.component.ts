import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlumnoRestService } from 'src/app/service/alumno/alumno-rest.service';

import { Alumno } from 'src/app/models/Alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.sass']
})
export class AlumnosComponent implements OnInit {
  private idEliminacion: number;

  listaAlumnos: Alumno[] = [];
  nuevoAlumno: Alumno = {nombre:'', apellido:'', curso:''};
  isNuevoAlumno: boolean = false;
  displayModal: boolean = false;

  constructor(private alumnoService: AlumnoRestService, private spinner: NgxSpinnerService) {
    this.idEliminacion = 0;
  }

  ngOnInit(): void {
    this.spinner.show();
    this.alumnoService.getAllAlumnos().subscribe(respo => {
      this.listaAlumnos = respo;
      setTimeout(() => this.spinner.hide(), 500);
    });
  }

  recargarDatos() {
    this.alumnoService.getAllAlumnos().subscribe(respo => {
      this.listaAlumnos = respo;
      setTimeout(() => this.spinner.hide(), 500);
    });
  }

  editarAlumno(alumno: Alumno) {
    this.nuevoAlumno = JSON.parse(JSON.stringify(alumno));
    this.isNuevoAlumno = true;
  }

  eliminarAlumno(id: number) {
    this.idEliminacion = id;
    this.displayModal = true;
  }

  confirmarEliminar() {
    this.spinner.show();
    this.alumnoService.deleteAlumno(this.idEliminacion).subscribe(() => {
      this.idEliminacion = 0;
      this.displayModal = false;
      this.recargarDatos();
    });
  }

  cancelarEliminar() {
    this.idEliminacion = 0;
    this.displayModal = false;
  }

  guardarAlumno() {
    this.spinner.show();
    if (this.nuevoAlumno.id) {
      this.alumnoService.updateAlumno(this.nuevoAlumno).subscribe(resp => {
        this.recargarDatos();
        this.limpiarNuevo();
      });
    } else {
      this.alumnoService.saveAlumno(this.nuevoAlumno).subscribe(resp => {
        this.recargarDatos();
        this.limpiarNuevo();
      });
    }
  }

  limpiarNuevo() {
    this.isNuevoAlumno = false;
    this.nuevoAlumno.id = undefined;
    this.nuevoAlumno.nombre = '';
    this.nuevoAlumno.apellido = '';
    this.nuevoAlumno.curso = '';
  }

}
