import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //1 dependancy injection
 constructor(private fb: FormBuilder, private api: ApiService,
    private route: Router) { }

//2-form group  ---html il Form tagil ([formGroup]="loginForm") then,thaze
    loginForm = this.fb.group({

//3-form array     
      email: [''],
      password: ['']
    
    })

//4 login function defind cheyikuka then,html butten-il (click)= "login()""
   login() {

      if (!this.loginForm.valid) {
        alert("please fill the form");  
      }
  
      else {
        
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;
        //ellam koode oru object akam
        const user = { email, password }


      //5---loginAPI creation (api.service.ts) il

   //6-apicall
        this.api.loginAPI(user).subscribe({
          next: (res: any) => {
            console.log(res);
            
           //wihslistnte an token varan
            sessionStorage.setItem("token",res.token)
            alert("Login Successfully")

  // success ayal allproductsilekk navigate cheyanam
            this.route.navigateByUrl('/')
  
          },
          error: (err: any) => {
            console.log(err);
            alert(err.error)
  
          }
  
        })
      }
    }
}


