import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/Rx";
/*
  Generated class for the ProductDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductDataProvider {
  url: string = "http://localhost:3000/products/";
  url1:string="http://localhost:3000/product_category_route/";
  constructor(public http: HttpClient) {
    console.log('Hello ProductDataProvider Provider');
  }
  getAllProduct() {
    return this.http.get(this.url);
  }
  getProductById(id){
    return this.http.get(this.url+id);
  }
  getProductByCategoryId(id){
    return this.http.get(this.url1+id);
  }
   addProduct(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteProduct(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateProduct(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
