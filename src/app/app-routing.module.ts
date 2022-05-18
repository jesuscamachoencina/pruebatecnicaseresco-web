import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresAlumnosComponent } from './components/profesores-alumnos/profesores-alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

const routes: Routes = [
  {
    path: 'profesores', component: ProfesoresComponent
  },
  {
    path: 'profesoresAlumnos', component: ProfesoresAlumnosComponent
  },
  {
    path: 'alumnos', component: AlumnosComponent
  },
  { path: '**', redirectTo: '/profesoresAlumnos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
