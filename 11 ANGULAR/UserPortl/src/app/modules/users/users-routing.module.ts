import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserListComponent } from './user-list/user-list.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
  { path: '', component:UserListComponent },
  {path:'add',component:AdduserComponent},
  {path:'edit/:id',component:EdituserComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
 