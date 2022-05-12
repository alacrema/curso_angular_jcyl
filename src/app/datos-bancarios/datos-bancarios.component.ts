import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  //templateUrl: './datos-bancarios.component.html',
  template: `
    <br/><br/>
    <form [formGroup]="formGroup" >
      <label>Entidad</label>
      <input name="entidad" required minlength="4" maxlength="4" formControlName="entidad" />
      <br/><br/>
      <label>Sucursal</label>
      <input name="sucursal" required minlength="4" maxlength="4" formControlName="sucursal" />
      <br/><br/>
      <label>DC</label>
      <input name="dc" required minlength="2" maxlength="2" formControlName="dc" />
      <br/><br/>
      <label>Cuenta</label>
      <input name="cuenta" required minlength="10" maxlength="10" formControlName="cuenta" />
      <br/><br/>
      <div *ngIf="formGroup.invalid">
          {{formGroup.controls['sucursal'].errors | json}}
      </div>
      <button [disabled]="formGroup.invalid" (click)="enviar()" >Enviar</button>
    </form>
  `,
  styleUrls: ['./datos-bancarios.component.css']
})
export class DatosBancariosComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({entidad: new FormControl(''), sucursal: new FormControl('0000', [Validators.required, this.miValidador]), dc: '', cuenta: ''});
   }

  ngOnInit(): void {
  }


  enviar(){
      console.log(this.formGroup);
      // if(f.errors){
      //   console.log(f.errors);
      // }
  }

  miValidador(formControl: FormControl){
      return formControl.value === '0000' ? {error: 'valor incorrecto'} : null;
  }

}
