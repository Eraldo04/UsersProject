import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Little-project';
  isLoginMode: boolean = Router.name === '' ? false : true; 
  orderby: string | undefined;


  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
  }
}
