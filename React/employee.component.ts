import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  eId  = ''
  eName = ''
  eAddress = ''
  Male = ''
  Female = ''
  gender = {
    value : 'Male'
  }
  eHobbies = ''
  date = ''
  employee : any = []
  data : any = {};

  submit() : void{  
    this.data  = {
    Id : this.eId,
    Name : this.eName,
    Address : this.eAddress,
    Gender : this.gender,
    Hobbies : this.eHobbies,
    Date : this.date
    };
    this.employee.push(this.data)
     console.log(this.employee)
  }
  constructor() {  }
 
  ngOnInit(): void {
  }
}
