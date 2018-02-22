import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/Rx";


/*
  Generated class for the CartDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartDataProvider {
  url: string = "http://localhost:3000/cart/";
  url1:string="http://localhost:3000/cart_id/";
  constructor(public http: HttpClient) {
    console.log('Hello CartDataProvider Provider');
  }
  getCartidByUsername(id){
    return this.http.get(this.url1 + id);
  }
  getAllCart() {
    return this.http.get(this.url);
  }
  getAllCartId(id){
    return this.http.get(this.url+id);
  }
   addCart(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteCart(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateCart(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
