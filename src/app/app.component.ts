import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';

  constructor(private router: Router){

  }

  navegarAlCentro(){
      this.router.navigate(['centro', 'idCentro'])
  }

}

