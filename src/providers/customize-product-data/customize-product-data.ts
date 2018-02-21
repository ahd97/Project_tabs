import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomizeProductDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomizeProductDataProvider {
  url: string = "http://localhost:3000/customize_product/";
  constructor(public http: HttpClient) {
    console.log('Hello CustomizeProductDataProvider Provider');
  }
  getAllCustomize_product() {
    return this.http.get(this.url);
  }
  getAllCustomize_productById(id){
    return this.http.get(this.url+id);
  }
   addCustomize_product(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteCustomize_product(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateCustomize_product(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
