import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor() { }

  getSolicitudes(){
    return [{id: 1, nombre: "Marta", apellidos: "Al\u00e1iz Crespo"}, {id: 2, nombre: "Juan", apellidos: "Garcia Lopez"}, {id: 3, nombre: "Ana", apellidos: "Robles Sanz"}];
  }

}
