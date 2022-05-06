import { Component, OnInit, Output } from '@angular/core';
import {Centro} from '../listado-centros/listado-centros.component'

@Component({
  selector: 'app-selector-centro',
  //templateUrl: './selector-centro.component.html',
  template: `
  <input (keyup)="buscarCentro($event)" [value] = "centroSeleccionado?.nombre">
    <div *ngFor="let centro of centrosFiltrados">
      <p (click)="seleccionarCentro(centro)">{{centro.nombre}}</p>
    </div>
  `,
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros: Centro[] = [{nombre: "Fernando de Rojas"}, {nombre: "Elvira Lindo"}, {nombre: "San Jose"}, {nombre: "Martin Baro"}];
  centrosFiltrados: Centro[] = [];

  @Output()
  centroSeleccionado?: Centro = {nombre: ''};

  constructor() { }

  ngOnInit(): void {
  }

  buscarCentro($event: KeyboardEvent){
      let target = $event.target as HTMLInputElement;
      this.centrosFiltrados = this.centros.filter(centro => centro.nombre?.toLocaleLowerCase().includes(target.value.toLowerCase()));
  }

  seleccionarCentro(centro: Centro){
    this.centroSeleccionado = centro;
  }

}
