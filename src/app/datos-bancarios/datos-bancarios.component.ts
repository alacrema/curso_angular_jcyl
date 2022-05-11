import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  //templateUrl: './datos-bancarios.component.html',
  template: `
    <br/><br/>
    <form (ngSubmit)="enviar(f)" #f="ngForm" >
      <label>Entidad</label>
      <input name="entidad" ngModel />
      <br/><br/>
      <label>Sucursal</label>
      <input name="sucursal" ngModel/>
      <br/><br/>
      <label>DC</label>
      <input name="dc" ngModel/>
      <br/><br/>
      <label>Cuenta</label>
      <input name="cuenta" ngModel/>
      <br/><br/>
      <button>Enviar</button>
    </form>
  `,
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  enviar(f: NgForm){
      console.log(f);
  }

}
