import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the FeedbackDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedbackDataProvider {
  url: string = "http://localhost:3000/feedback/";
  constructor(public http: HttpClient) {
    console.log('Hello FeedbackDataProvider Provider');
  }
  getAllFeedback() {
    return this.http.get(this.url);
  }
  getAllFeedbackById(id){
    return this.http.get(this.url+id);
    
  }
   addFeedback(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteFeedback(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateFeedback(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
