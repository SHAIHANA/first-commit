import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { userModel } from '../../userModel';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
user: userModel = {} //To hold user Details
 constructor(private api: UserService,private route:Router,

  private paraId:ActivatedRoute){}//then id get cheyikanam.so onInit kodkanm
 
 
  ngOnInit(): void {  
    //get particular user id using ActivatedRoute
    this.paraId.params.subscribe((item:any)=>{
      console.log(item);
    //id ne mathram get cheyikan 
      const{id}=item;
      console.log(id);

  //Id vech particular userine get cheyyikanp0
      //get particular user details
      this.api.getAUserAPI(id).subscribe({
        next:(item:any)=>{
          console.log(item);
          this.user=item
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
      
    })
  }
 
 
 editUser(id:any){
  this.api.editUserAPI(id,this.user).subscribe({
    next:(item:any)=>{
console.log(item)
this.user=item
alert("User details Updated Successfully...")
this.route.navigateByUrl('/users')
    },
    error:(err:any)=>{
      console.log(err);
      
    }
    
    
    })
    console.log(this.user);
  }
  
  

}
