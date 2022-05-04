import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud = {nombre: "Marta", apellidos: "Al\u00e1iz Crespo", numeroAleatorio: "0"};
  invalido = false;
  fondo = 'yellow';

  constructor() {
    console.log('llamada al constructor');

    setInterval(() => {
      let numAleatorio = Math.random();
      this.solicitud.numeroAleatorio = '' + numAleatorio;
      //this.solicitud.nombre = '' + numAleatorio
      if(numAleatorio>0.5){
        this.invalido = true;
      }else{
        this.invalido = false;
      }

    }, 2000)




   }

   eliminar(){
     console.log("==> Llamada al método eliminar");
     this.solicitud = {nombre: "", apellidos: "", numeroAleatorio: "0"};
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

  enviar(){
    console.log(this.solicitud);
  }

  getDisabled(){
    return (this.solicitud.nombre.length<3 || this.solicitud.apellidos.length<3)
  }

  ngOnInit(): void {
  }

}
