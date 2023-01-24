import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}



@Injectable({providedIn: 'root'})

export class AuthService { 

    constructor(private http: HttpClient) {}
    signup(email: string, password: string) {
       return  this.http.post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcAcvLS1tEnZj-Nt6OHE1Jz12puE0UUpM',
        {
                'email': email,
                'password': password,
                returnSecureToken: true
        }

        );
    }


    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDcAcvLS1tEnZj-Nt6OHE1Jz12puE0UUpM',
            {
                'email': email,
                'password': password,
                returnSecureToken: true
            }
        );
    }

 }