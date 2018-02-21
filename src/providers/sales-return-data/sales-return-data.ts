import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/*
  Generated class for the SalesReturnDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SalesReturnDataProvider {
  url: string = "http://localhost:3000/sales_return/";
  constructor(public http: HttpClient) {
    console.log('Hello SalesReturnDataProvider Provider');
  }

  getAllSales_return() {

    return this.http.get(this.url);
  }
  getSales_returnById(id) {

    return this.http.get(this.url+id);
  }
   addSales_return(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteSales_return(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateSales_return(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
