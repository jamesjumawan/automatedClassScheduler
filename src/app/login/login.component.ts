import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "./../authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formGroup = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService:AuthenticationService, private route:Router) {
    }

    ngOnInit(): void {
    }
	
    loginProcess(){
        if (this.formGroup.valid) {
            this.authService.login(this.formGroup.value).subscribe(
                    (result) => {
                        if (result.success) {
                        localStorage.setItem('token', result['token']);
                        this.route.navigate(["/"]);
                        } else {
                        alert(result.message);
                        }
                    }
                );
        }
    }
}