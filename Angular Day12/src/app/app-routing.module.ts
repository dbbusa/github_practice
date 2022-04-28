import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'User',component:UserListComponent,
    children:[
      {path: 'UserDetail',component:UserDetailsComponent},
      {path:"id",component:UserDetailsComponent}
    ]
  },
  {path:'',redirectTo:'User',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
