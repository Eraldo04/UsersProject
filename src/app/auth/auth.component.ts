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
error: string | undefined;

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
        this.error = 'An error occurred';
        console.log(err);
        switch(err.error.error.message) {
            case 'EMAIL_EXISTS':
                this.error = 'Email already exists';
        }
        this.isLoading = false;
            });

    }
    form.reset();
}


}

