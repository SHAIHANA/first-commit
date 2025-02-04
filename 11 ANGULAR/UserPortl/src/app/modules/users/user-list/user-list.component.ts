import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { userModel } from '../../userModel';

import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // p: number = 1;//ngx pagination nte anu

  alluser: any = []//data array anu so[ ] kodthu
  
  //Search bar
  searchKey:string=""//this variable is to hold value from searchbox
user: any;

  constructor(private api: UserService) { }
  ngOnInit(): void {
    this.getusers()//ith thazathe functione anu
  }


  //get users
  getusers() {
    this.api.getUserAPI().subscribe({
      next: (item: any) => {
        console.log(item);//array of data kitum consolil

        //itemile oro datasine ellam molile all useril,  view/display akan
        this.alluser = item

      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }


  //delete from list
  deleteUser(id:any) {
    this.api.deleteUserAPI(id).subscribe({
      next: (item:any)=>{
        console.log(item);
        alert("Delete Successfull....")
        this.getusers()
        
      },
      error: (err: any)=>{
        console.log(err);

      }
    })
  }


  sortById(){
    this.alluser.sort((a:any,b:any)=>a.id-b.id)
  }

  sortByName(){
    this.alluser.sort((a:any,b:any)=>a.name.localeCompare(b.name))
    
  }
  
GeneratePDF(){
  //object for creation
  let userPDF= new jsPDF()
//TABLE HEAD
  let head =[['id','name','Email']]

  //TABLE BODY
  let body:any=[]

  //details edukanda path,,ith vech aanu bodykk akath ninn details edukkunath
  this.alluser.forEach((item:any) => {
    if(item.id!='1'){
      body.push([item.id,item.name,item.email])
    }
  });

  userPDF.text("All Users Details ",10,10)
  autoTable(userPDF,{head,body})
  userPDF.output("dataurlnewwindow")
  userPDF.save("AllUserList.pdf")

}






}
