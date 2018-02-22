import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { Row } from 'ionic-angular/components/grid/row';

/*
  Generated class for the CartDetailDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartDetailDataProvider {
  url: string = "http://localhost:3000/cart_detail/";
  constructor(public http: HttpClient) {
    console.log('Hello CartDetailDataProvider Provider');
  }
  getAllCart_detail() {
    return this.http.get(this.url);
  }
  getAllCart_detailId(id){
    return this.http.get(this.url+id);
  }
   addCart_detail(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteCart_detail(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateCart_detail(id, item) {
     let body = JSON.stringify(item);
    //  return this.http.put(this.url + id +"/"+ id1,body, { headers: new HttpHeaders().set('Accept', 'application/json') });
     return this.http.put(this.url + id ,body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
