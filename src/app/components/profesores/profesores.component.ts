import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfesorRestService } from 'src/app/service/profesor/profesor-rest.service';

import { Profesor } from 'src/app/models/Profesor';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.sass']
})
export class ProfesoresComponent implements OnInit {
  private idEliminacion: number;

  listaProfesores: Profesor[] = [];
  nuevoProfesor: Profesor = {nombre:'', apellido:'', materia:''};
  isNuevoProfesor: boolean = false;
  displayModal: boolean = false;

  constructor(private profesorService: ProfesorRestService, private spinner: NgxSpinnerService) {
    this.idEliminacion = 0;
  }

  ngOnInit(): void {
    this.spinner.show();
    this.profesorService.getAllProfesores().subscribe(respo => {
      this.listaProfesores = respo;
      setTimeout(() => this.spinner.hide(), 500);
    });
  }

  recargarDatos() {
    this.profesorService.getAllProfesores().subscribe(respo => {
      this.listaProfesores = respo;
      setTimeout(() => this.spinner.hide(), 500);
    });
  }

  editarProfesor(profesor: Profesor) {
    this.nuevoProfesor = JSON.parse(JSON.stringify(profesor));
    this.isNuevoProfesor = true;
  }

  eliminarProfesor(id: number) {
    this.idEliminacion = id;
    this.displayModal = true;
  }

  confirmarEliminar() {
    this.spinner.show();
    this.profesorService.deleteProfesor(this.idEliminacion).subscribe(() => {
      this.idEliminacion = 0;
      this.displayModal = false;
      this.recargarDatos();
    });
  }

  cancelarEliminar() {
    this.idEliminacion = 0;
    this.displayModal = false;
  }

  guardarProfesor() {
    this.spinner.show();
    if (this.nuevoProfesor.id) {
      this.profesorService.updateProfesor(this.nuevoProfesor).subscribe(resp => {
        this.recargarDatos();
        this.limpiarNuevo();
      });
    } else {
      this.profesorService.saveProfesor(this.nuevoProfesor).subscribe(resp => {
        this.recargarDatos();
        this.limpiarNuevo();
      });
    }
  }

  limpiarNuevo() {
    this.isNuevoProfesor = false;
    this.nuevoProfesor.id = undefined;
    this.nuevoProfesor.nombre = '';
    this.nuevoProfesor.apellido = '';
    this.nuevoProfesor.materia = '';
  }
}
