import { MyDataService } from './../my-data.service';
import { Component, NgModule } from '@angular/core';
import { UserModel } from './user-model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private api: MyDataService) {}
  userLists!: UserModel[]

  onUserCreate(users: UserModel) {
    this.api.postUsers(users).subscribe((res: any) => {
      console.log("User created")
    });
  }
}
