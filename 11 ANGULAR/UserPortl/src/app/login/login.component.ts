import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
    Useremail : string="";
   Userpassword : string="";
     
constructor(private route:Router,private adminApi:AdminService){}//adminApi-->dependandy injection from backend admin service


 login(){

  //backend
  this.adminApi.authentication().subscribe((item:any)=>{
    console.log(item);//[0]{id:1 email:admin...,password:123}
   const {email,password,adminName}=item //item  array anenkil ulla value[0] pole kodkanam,portil /users/1 kodthal object ayt kitm.then, admin.service.ts il /user/1 kodthu,so object ay
   console.log(email,password);
   
   
   if(this.Useremail==email && this.Userpassword==password){
    this.route.navigateByUrl('/dashboard')
    alert("Login Success")
    sessionStorage.setItem("Name",adminName)
   }
   else{
    alert("In correct details")
   }
  })
  

//front-nend
   console.log(this.Useremail,this.Userpassword);

  if(this.Useremail && this.Userpassword){
    this.route.navigateByUrl('/dashboard')
    alert("Login Success")

  }
  else{
    alert("Please fill the form")
  }
  
 }

  }
