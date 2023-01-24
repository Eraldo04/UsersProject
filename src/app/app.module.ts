import { loadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component'; 

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailsComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AuthComponent,
    loadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
