import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  userList= [{"userID":1,"userName":"Shaheer"},
  {"userID":2,userName:"Ruchika"},
  {"userID":3,userName:"Anaya"},
  {"userID":4,userName:"Abir"},
  {"userID":5,userName:"Mishti"},
  {"userID":6,userName:"Dev"},
  {"userID":7,userName:"Sonakshi"},
  {"userID":8,userName:"Soha"},
  {"userID":9,userName:"Ayush"},
  {"userID":10,userName:"Shubh"}]
  ngOnInit(): void {
  }

}
