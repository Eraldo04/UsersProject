import { MyDataService } from './../my-data.service';
import { Component, Output } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public get MyDataService(): MyDataService {
    return this.apicallservice;
  }


  @Output() listUsers!: any[];

  

  constructor(private apicallservice: MyDataService ) { }


  ngOnInit(): void {
    this.fetchUsers();
  }
  
  fetchUsers() {
    this.apicallservice.getUsers().subscribe((data: any) => {
      this.listUsers = data;
      console.log('Data requested ...');
      console.log(this.listUsers);

      // //Populate the employee list from array with objects
      // for (let i = 0; i < this.listEmployees.length; i++) {
      //   this.usersList.push({
      //     id: this.listUsers[i].id,
      //     name: this.listUsers[i].name,
      //     username: this.listUsers[i].username,
      //     street: this.listUsers[i].address.street,
      //     suite: this.listUsers[i].address.suite,
      //     zipcode: this.listUsers[i].address.zipcode,
      //   });
      // }
    });
  }


  onDetailsShow(id: string) {
    //Get the user based on id
    let currentUser = this.listUsers.find((user) => {return user.id === id})
    console.log(currentUser);
    //Fulfill data with specified id

  }


}


