import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
isLoginMode: boolean = false;
isLoading: boolean = false;


constructor(private authService: AuthService) {}


onSwitchMode() {
    this.isLoginMode =!this.isLoginMode;
}

onSubmit(form: NgForm){
    if (!form.valid) {
        return;
    } 
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if(this.isLoginMode) {

    } else {
        this.authService.signup(email, password).subscribe(data => {
        console.log(data);
        this.isLoading = false;
        }, err => {
        console.log(err);
        this.isLoading = false;
            });

    }
    form.reset();
}


}

