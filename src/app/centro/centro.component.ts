import { Component, Input, OnInit } from '@angular/core';
import {Centro} from '../listado-centros/listado-centros.component'

const variable = "Hola";

@Component({
  selector: 'app-centro',
 // templateUrl: './centro.component.html',
  template: `
 <p>{{centro?.nombre}}</p>
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input()
  centro?: Centro

  constructor() { }

  ngOnInit(): void {
  }

}
