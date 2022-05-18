import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MegaMenuModule } from 'primeng/megamenu';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresAlumnosComponent } from './components/profesores-alumnos/profesores-alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoRestService } from './service/alumno/alumno-rest.service';
import { ProfesorRestService } from './service/profesor/profesor-rest.service';
import { ProfesorAlumnoRestService } from './service/profesorAlumno/profesor-alumno-rest.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    AlumnosComponent,
    ProfesoresAlumnosComponent
  ],
  imports: [
    MegaMenuModule,
    BrowserModule,
    TableModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    PickListModule,
    NgxSpinnerModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AlumnoRestService,
    ProfesorRestService,
    ProfesorAlumnoRestService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
