import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit{

  constructor(private api:ApiService){}


  products:any=[] 

  ngOnInit(): void {
   this.getProducts()
  }

getProducts(){
  this.api.getAllproductsAPI().subscribe
  ((item:any)=>{
    console.log(item);//array
    this.products=item
    
  })
}
  
  }

