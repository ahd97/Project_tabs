import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  url:string="http://localhost:3000/users/";
  url1:string="http://localhost:3000/login/";

  constructor(public http: HttpClient) {
    console.log('Hello UserDataProvider Provider');
  }
  getAllUsers(){

    return this.http.get(this.url);
   }
   getAllUserById(id){
    return this.http.get(this.url+id);
    
  }
 addUsers(item){
   let body=JSON.stringify(item);
   return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }
 deleteUser(id){
   return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }
 updateUser(id,item){
   let body=JSON.stringify(item);
   return this.http.put(this.url+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }
 login(item){
  let body=JSON.stringify(item);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }
}
