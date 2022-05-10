import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { ListadoCentrosComponent } from './listado-centros/listado-centros.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { FilaSolicitudComponent } from './fila-solicitud/fila-solicitud.component';

let routes = [
  {path: '', component: SolicitudComponent},
  {path: 'centro/:centroId', component: CentroComponent},
  {path: 'centros', component: ListadoCentrosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    CentroComponent,
    ListadoCentrosComponent,
    SelectorCentroComponent,
    FilaSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
