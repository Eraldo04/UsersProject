import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { Component, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
isLoginMode: boolean = false;
@Output() error: string | undefined;

constructor(private authService: AuthService, private router: Router) {}


onSwitchMode() {
    this.isLoginMode =!this.isLoginMode;
}

onSubmit(form: NgForm){
    if (!form.valid) {
        return;
    } 
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>; 


    if(this.isLoginMode) {
      authObs = this.authService.login(email, password);
}
else {
       authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(data => {
        console.log(data);
        this.router.navigate(['/home']);
    }, 
    err => {
        this.error = 'An error occurred';
        console.log(err);
        switch(err.error.error.message) {
            case 'EMAIL_EXISTS':
                this.error = 'Email already exists';
                break;  
                case 'INVALID_PASSWORD':
                    this.error = 'Password Incorrect';  
                    break;  
                    case 'EMAIL_NOT_FOUND':
                        this.error = 'Email not Registered';  
                        break;
        }
}
    );

    form.reset();
}


}

