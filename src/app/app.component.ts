import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Little-project';
  orderby: string | undefined;

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated =!user ? false : true;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
}
}
