import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post';
 
  // url = ''
  
  // public addFile(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //           var reader = new FileReader();
  //           reader.onload = (event: any) => {
  //               this.url = event.target.result;
  //           }
  //           reader.readAsDataURL(event.target.files[0]);
  //       }
  // }

  show = false;
  shows(){
    this.show = true;
  }

  postItem : Array<any> = [];
  postserve(postItems: Array<any>){
    this.postItem = postItems
  } 
}

