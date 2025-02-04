import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit {

  constructor(private api: ApiService) {}

  cartItem:any=[]

  ngOnInit(): void {
   this.getCart()
  }
//display  cart
  getCart(){
    this.api.getCartAPI().subscribe({
      next: (res: any) => {
       console.log(res);
       this.cartItem=res
        
      },
      error: (err: any) => {
        console.log("Error:" + err);

      }
    })
  }

//delete cart

  deleteCart(id:any){
this.api.deleteCartAPI(id).subscribe({
next:(res:any)=>{
  console.log(res);
  
  //refresh akathe dlt avan
  this.getCart();
},
error:(err:any)=>{
  console.log(err);
  
}
})
  }
}




