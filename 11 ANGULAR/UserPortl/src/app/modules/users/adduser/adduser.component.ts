import { Component } from '@angular/core';
import { userModel } from '../../userModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  user: userModel = {} //variablr for  hold user Details

  constructor(private api: UserService,private route:Router){}//,private koduthath path change avan an add user success ayal userlist pagelekk return ponam
  addUser() {
    this.api.addUserAPI(this.user).subscribe({
      next:(item:any)=>{
        console.log(item);
        alert("User added successfully...")
        this.route.navigateByUrl('/users')
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

  console.log(this.user);
 }



}

