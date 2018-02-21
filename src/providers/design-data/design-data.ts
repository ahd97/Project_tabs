import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/*
  Generated class for the DesignDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DesignDataProvider {
  url: string = "http://localhost:3000/design/";
  constructor(public http: HttpClient) {
    console.log('Hello DesignDataProvider Provider');
  }
  getAllDesign() {
    return this.http.get(this.url);
  }
  getAllDesignById(id){
    return this.http.get(this.url+id);
  }
   addDesign(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteDesign(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateDesign(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
