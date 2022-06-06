import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


//  const baseurl: string = `https://stark-oasis-25068.herokuapp.com/api/`;
const baseurl: string = `http://localhost:3000/api/`;
// const baseurl: string = `http://scheduler.rf.gd/api/api/`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http:HttpClient) { }


    isLoggedIn(): boolean{
      var token = localStorage.getItem('token');
      if(token != null){
        var expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) < expiry;
      }
      else{
        return false;
      }
    }


    login(data: any): Observable<any> {
      return this.http.post(baseurl + `users/login`, data);
    }
    getUsers(): Observable<any>{
      return this.http.get(baseurl + 'users');
    }
    newUser(data: any): Observable<any>{
      return this.http.post(baseurl + 'users', data);
    }
    deleteUser(id:number): Observable<any>{
      return this.http.delete(baseurl + 'users/' + id);
    }
    updateUser(data:any): Observable<any>{
      return this.http.patch(baseurl + 'users', data);
    }

    getInstructors(): Observable<any>{
      return this.http.get(baseurl + 'instructors');
    }

    generate(): Observable<any>{
      return this.http.post(baseurl + 'algorithm/test', null);
    }
    generateReal(): Observable<any>{
      return this.http.post(baseurl + 'algorithm', null);
    }
}