import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-centros',
  //templateUrl: './listado-centros.component.html',
  template: `
  <h2>Listado de centros</h2>
    <div *ngFor="let centro of centros">
      <app-centro [centro]="centro"></app-centro>
    </div>
  `,
  styleUrls: ['./listado-centros.component.css']
})
export class ListadoCentrosComponent implements OnInit {

  centros: Centro[] = [{nombre: "Fernando de Rojas"}, {nombre: "Elvira Lindo"}, {nombre: "San Jose"}, {nombre: "Martin Baro"}];

  constructor() { }

  ngOnInit(): void {
  }

}

export class Centro{
  nombre?: string
}
