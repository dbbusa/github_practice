import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products';

  pname : any = ''
  pqty : any = ''
  pamount : any = ''
  pdiscount : any = (this.pamount * 5)/100
  

  total : any = 0
  datas : any = [] 
  product_list : any = {}
  submit() : void {
    this.total = (Number(this.pamount) - Number((this.pamount * 5)/100))
    console.log(this.total)
    this.product_list =  {
      name : this.pname,
      qty : this.pqty,
      amount : this.pamount,
      discount : (this.pamount * 5)/100,
      totals : this.total
    } 
    this.datas.push(this.product_list)
    console.log(this.datas)
  }

}
