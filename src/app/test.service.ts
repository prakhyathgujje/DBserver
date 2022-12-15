import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  link="http://localhost:3000/comments";
  inroute="http://localhost:1234/posts";
  link1="http://localhost:1234/comments";
 
  constructor(public httpclient:HttpClient){

}
getMethods(){
  return this.httpclient.get(this.link);
}
getMethods1(){
  return this.httpclient.get(this.inroute);
}
getMethods2(){
  return this.httpclient.get(this.link1);
}
getUsers(data:any){
  return this.httpclient.post(this.link1, data);
}
postUser(data:any){
  return this.httpclient.post(this.link,data);
}
  // constructor() { }
}
