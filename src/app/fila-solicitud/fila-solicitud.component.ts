import { SolicitudComponent } from './../solicitud/solicitud.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fila-solicitud',
  //templateUrl: './fila-solicitud.component.html',
  template: `
    {{solicitud.nombre}}&nbsp;{{solicitud.apellidos}}
    &nbsp;<input type="button" (click)="eliminarSolicitud(solicitud)" value="Eliminar"  />
  `,
  styleUrls: ['./fila-solicitud.component.css']
})
export class FilaSolicitudComponent implements OnInit {

  @Input()
  solicitud: any

  @Output()
  solicitudEliminada = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  eliminarSolicitud(solicitud: any){
      this.solicitudEliminada.emit(solicitud);
  }

}
