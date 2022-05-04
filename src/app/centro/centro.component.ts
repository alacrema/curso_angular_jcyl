import { Component, OnInit } from '@angular/core';

const variable = "Hola";

@Component({
  selector: 'app-centro',
  //templateUrl: './centro.component.html',
  template: `
  <h2>Inserci&oacute;n de centro</h2>
  ${variable}
  `,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
