import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(["/"])
  }
  
  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
}
