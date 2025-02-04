import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


   msg :string ="Welcome to Login Page"
   value :boolean=true;
   num:Number=343


   loginImg:string="assets/my-icon.svg"
   
btnClick(){
  alert("Button clicked" )
}

}
