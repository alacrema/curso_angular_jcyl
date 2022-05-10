import { SolicitudComponent } from './../solicitud/solicitud.component';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Centro} from '../listado-centros/listado-centros.component'

const variable = "Hola";

@Component({
  selector: 'app-centro',
 // templateUrl: './centro.component.html',
  template: `
 <p>{{centro?.nombre}}</p>
 <app-solicitud></app-solicitud>
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input()
  centro?: Centro

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(x => console.log(x))
   }

  ngOnInit(): void {
  }

}
