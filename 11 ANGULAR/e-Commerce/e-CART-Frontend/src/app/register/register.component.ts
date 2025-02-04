import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private fb: FormBuilder, private api: ApiService,
    private route: Router) { }
    //form group
  registerForm = this.fb.group({
    //form array
    username: [''],
    email: [''],
    password: ['']

  })

  register() {

    if (!this.registerForm.valid) {
      alert("please fill the form");
      
    }

    else {
      let username = this.registerForm.value.username;
      let email = this.registerForm.value.email;
      let password = this.registerForm.value.password;
      //ellam koode oru object akam
      const user = { username, email, password }

      //apicall
      this.api.registerAPI(user).subscribe({
        next: (res: any) => {
          console.log(res);
          alert("Register Successfully")

          this.route.navigateByUrl('user/login')

        },
        error: (err: any) => {
          console.log(err);
          alert(err.error)

        }

      })
    }
  }
}
