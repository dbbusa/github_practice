import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  d = new Date()
  name = ''
  description = ''
  date = this.d.getDate() + "-" + (this.d.getMonth() + 1) + "-" + this.d.getFullYear()
  url = ''
  value : boolean = false
 
  public addFile(event: any) {
    if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.url = event.target.result;
                this.value = true;
            }
            reader.readAsDataURL(event.target.files[0]);
        }
  }
  @Output() postnotify = new  EventEmitter<any>();
  postList : any = [];
  data : any= {};
  submit() : void{
    this.data = {
      PName : this.name,
      PDescription : this.description,
      PDate : this.date,
      PUrl : this.url
    }
    this.postList.push(this.data)
    console.log(this.data)
    
  }

  likeList : any = []
  likePost(get : any) : void{
      this.likeList.push(get)
      console.log(this.likeList)
      this.postnotify.emit(this.likeList)
  }

  
  constructor() { }

  
  ngOnInit(): void {
  }

}
