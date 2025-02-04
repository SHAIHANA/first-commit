import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  
  //thaze ulla path page-not-found in pakaram kodukunathan
  //specific pagelot redirect cheyyan
  //ivde redirectTo:'' --> koduthath login pagelot povan an
  {path:'**',redirectTo:''} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
