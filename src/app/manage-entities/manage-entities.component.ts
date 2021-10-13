import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./../authentication.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

export interface Users {
  id: number;
  name: string;
  username: string;
  role: string;
  active: string;
}

@Component({
  selector: 'app-manage-entities',
  templateUrl: './manage-entities.component.html',
  styleUrls: ['./manage-entities.component.css']
})
export class ManageEntitiesComponent implements OnInit {
  
  usersRowDef: string[] = ['id', 'name', 'username', 'role', 'active'];
  usersData = [];
  
  newUserForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middle_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    last_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  });

  public usersTableReady = false;
  public showNewUserPopup = false;

  row!: Users;

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

  newUserProcess(){
    if(this.newUserForm.valid){
      this.authService.newUser(this.newUserForm.value).subscribe(
        (res) => {
          if(res.success){
            this.showNewUserPopup = false;
            this.usersTableReady = false;
            this.getUsers();
          }
        }
      )
    }
  }

  rowClicked(row:Users){
    this.row = row;
  }

  deleteUser(){
    this.authService.deleteUser(this.row.id).subscribe(
      (res) => {
        console.log(res);
        this.usersTableReady = false;
        this.getUsers();
      }
    );
  }

  editUser(){

  }
}
