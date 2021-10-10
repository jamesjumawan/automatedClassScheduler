import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
    constructor(private http:HttpClient) { }
    
    login(data: any): Observable<any> {
        console.log("i am server");
        return this.http.post(`https://stark-oasis-25068.herokuapp.com/users/login`, data);
    }
}