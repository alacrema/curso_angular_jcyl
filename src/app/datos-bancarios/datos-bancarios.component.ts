import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  //templateUrl: './datos-bancarios.component.html',
  template: `
    <br/><br/>
    <form (ngSubmit)="enviar(f)" #f="ngForm" >
      <label>Entidad</label>
      <input name="entidad" ngModel required minlength="4" maxlength="4" />
      <br/><br/>
      <label>Sucursal</label>
      <input name="sucursal" ngModel required minlength="4" maxlength="4" />
      <br/><br/>
      <label>DC</label>
      <input name="dc" ngModel required minlength="2" maxlength="2" />
      <br/><br/>
      <label>Cuenta</label>
      <input name="cuenta" ngModel required minlength="10" maxlength="10" />
      <br/><br/>
      <button [disabled]="f.invalid">Enviar</button>
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
      // if(f.errors){
      //   console.log(f.errors);
      // }
  }

}
