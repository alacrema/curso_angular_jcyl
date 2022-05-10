import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private httpClient: HttpClient) { }

  // getSolicitudes(){
  //   const accessToken = 'o8vlfcqXWB8344KCv5LruaXU9BKAmWWh0JRUbuNdgbA';
  //    return this.httpClient.get(
  //    `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
  //     .toPromise().then((data: any) => data.items.map((x: any) => x.fields));
  //   //return this.httpClient.get(
  //   //  `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`);

  // }

  getSolicitudes(){
    const accessToken = 'o8vlfcqXWB8344KCv5LruaXU9BKAmWWh0JRUbuNdgbA';
     return this.httpClient.get(
     `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`).pipe(map((data: any) => data.items.map((x: any) => x.fields)))
    //return this.httpClient.get(
    //  `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`);

  }

}
