import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/*
  Generated class for the SalesOrderDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SalesOrderDataProvider {
  url: string = "http://localhost:3000/sales_order/";
  constructor(public http: HttpClient) {
    console.log('Hello SalesOrderDataProvider Provider');
  }
  getAllSales_order() {

    return this.http.get(this.url);
  }
  getAllSales_OrderById(id){
    return this.http.get(this.url+id);
  }
   addSales_order(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteSales_order(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateSales_order(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }


}
