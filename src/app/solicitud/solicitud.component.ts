import { SolicitudService } from './../solicitud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {id: 1, nombre: "Marta", apellidos: "Al\u00e1iz Crespo"};

  solicitudes: any ; // [{id: 1, nombre: "Marta", apellidos: "Al\u00e1iz Crespo"}, {id: 2, nombre: "Juan", apellidos: "Garcia Lopez"}, {id: 3, nombre: "Ana", apellidos: "Robles Sanz"}];
  invalido = false;
  fondo = 'yellow';

  constructor(private solicitudService: SolicitudService) {
    console.log('llamada al constructor');
    solicitudService.getSolicitudes().then(
      (data: any) => this.solicitudes = data.items.map((x: any) => x.fields )
      // console.log(data)
    );

   }

   eliminar(){
     console.log("==> Llamada al método eliminar");
     this.solicitud = {id: 0, nombre: "", apellidos: ""};
     console.log("solicitud.nombre = " + this.solicitud.nombre);
     console.log("solicitud.apellidos = " + this.solicitud.apellidos);
   }

   eliminarSolicitud(solicitud: any){
    console.log("==> Llamada al método eliminar");
    //this.solicitudes = this.solicitudes.filter(x => x.nombre != solicitud.nombre && x.apellidos != solicitud.apellidos);
    //this.solicitudes = this.solicitudes.filter(x => x.id != solicitud.id);
    console.log("solicitud.nombre = " + this.solicitud.nombre);
    console.log("solicitud.apellidos = " + this.solicitud.apellidos);
  }

   modificar(solicitud: {nombre: string, apellidos: string} ){
    console.log("solicitud.nombre = " + this.solicitud.nombre);
    console.log("solicitud.apellidos = " + this.solicitud.apellidos);
  }

  cambiarNombre($event: KeyboardEvent)
  {
    const elemento = $event.target as HTMLInputElement;
    this.solicitud.nombre = elemento.value;
    //console.log(elemento.value);
  }

  cambiarApellidos($event: KeyboardEvent)
  {
    const campoApellidos = $event.target as HTMLInputElement;
    this.solicitud.apellidos = campoApellidos.value;
    //console.log(campoApellidos.value);
  }

  enviar(solicitud: any){
  //  solicitud.id = this.solicitudes.length+1;
    //this.solicitudes.push(solicitud);
    console.log(this.solicitud);
  }

  getDisabled(){
    return (this.solicitud.nombre.length<3 || this.solicitud.apellidos.length<3)
  }

  ngOnInit(): void {
  }

}
