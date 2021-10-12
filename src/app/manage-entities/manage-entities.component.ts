import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthenticationService } from "./../authentication.service";

export interface Users {
  id: number;
  name: string;
  username: number;
  role: number;
  active: string;
}

@Component({
  selector: 'app-manage-entities',
  templateUrl: './manage-entities.component.html',
  styleUrls: ['./manage-entities.component.css']
})
export class ManageEntitiesComponent implements OnInit {

  public usersTableReady = false;

  usersRowDef: string[] = ['id', 'name', 'username', 'role', 'active'];
  usersData = [];

  constructor(private authService:AuthenticationService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  

  getUsers(){
    this.authService.getUsers().subscribe(
        (res) => {
        this.usersData = res['data'];
        },
        (err) => {
        console.log(err);
        this.usersData = [];
        }
    );
    this.usersTableReady = true;
  }
}