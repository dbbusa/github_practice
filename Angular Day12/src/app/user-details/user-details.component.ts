import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute) { }

  user : any = null ;
  users = [
    {"userID":1,"userName":"Shaheer",Gender:"Male","designation":"Developer","PanNumber":"335454"},

   {"userID":2,"userName":"Ruchika",Gender:"Female","designation":"Senior Developer","PanNumber":"123456"},

   {"userID":3,"userName":"Anaya",Gender:"Female","designation":"Junior Developer","PanNumber":"75675"},

   {"userID":4,"userName":"Abir",Gender:"Male","designation":"Mean  stack Developer","PanNumber":"45647"},
   {"userID":5,"userName":"Mishti",Gender:"Female","designation":"Full stack Developer","PanNumber":"4354546"},
   {"userID":6,"userName":"Dev",Gender:"Male","designation":"Project Manager","PanNumber":"24343"},
   {"userID":7,"userName":"Sonakshi",Gender:"Female","designation":"Assistant Project Manager","PanNumber":"978654"},
   {"userID":8,"userName":"Soha",Gender:"Female","designation":"Hr Manager","PanNumber":"34354"},
   {"userID":9,"userName":"Ayush",Gender:"Male","designation":"Technical Assistant","PanNumber":"785678"},
   {"userID":10,"userName":"Shubh",Gender:"Male","designation":"Junior Executive","PanNumber":"575687"},
   

  ]
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(param=>{
      this.user = this.users[param['id']];
      console.log(this.user)
  })
  }

}
