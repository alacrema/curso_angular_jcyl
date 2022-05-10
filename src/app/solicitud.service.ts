import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private httpClient: HttpClient) { }

  getSolicitudes(){
    const accessToken = 'o8vlfcqXWB8344KCv5LruaXU9BKAmWWh0JRUbuNdgbA';
    return this.httpClient.get(
    `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
     .toPromise();

  //  return [{id: 1, nombre: "Marta", apellidos: "Al\u00e1iz Crespo"}, {id: 2, nombre: "Juan", apellidos: "Garcia Lopez"}, {id: 3, nombre: "Ana", apellidos: "Robles Sanz"}];
  }

}
