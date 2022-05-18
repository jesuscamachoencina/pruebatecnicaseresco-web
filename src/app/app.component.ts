import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  items: MegaMenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Gestión de personal',
        icon: 'pi pi-user',
        items: [[{
          label: 'Profesores',
          items: [{
            label: 'Gestionar Profesores',
            routerLink: ['/profesores']
          },
          {
            label: 'Gestionar alumnos asignados',
            routerLink: ['/profesoresAlumnos']
          }]
        }, {
          label: 'Alumnos',
          items: [{
            label: 'Gestionar Alumnos',
            routerLink: ['/alumnos']
          }]
        }]]
      }
    ];
  }
}
