import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http:HttpClient) { }

    login(data: any): Observable<any> {
      return this.http.post(`https://stark-oasis-25068.herokuapp.com/api/users/login`, data);
    }
    getUsers(): Observable<any>{
      return this.http.get('https://stark-oasis-25068.herokuapp.com/api/users');
    }
    newUser(data: any): Observable<any>{
      return this.http.post('https://stark-oasis-25068.herokuapp.com/api/users', data);
    }
}