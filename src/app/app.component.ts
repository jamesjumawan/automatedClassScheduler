import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void{
    console.log("app component on init log");
    
  }

  isLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
}