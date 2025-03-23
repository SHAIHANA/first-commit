import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  //2--res variable
  products: any[] = [];
//variable creation for display
product: any = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getwishlist()
  }
  //display---->2 
  getwishlist() {
    if (sessionStorage.getItem('token')) {
      this.api.getwishlistAPI().subscribe({
        next: (res: any) => {
          console.log(res);
          //
          // 1--ee res nne oru variable ilekk pass cheyikanam enit athine venm cardil pass cheyan,topil products:any=[] //2 then ee res ne thaze assign cheyka
          //3---res assign
          this.products = res
          //4--enit ee productsine wishlist html il ngFor kodkanam
        },
        error: (err: any) => {
          console.log("Error:" + err);

        }
      })
    }
  }

//delete ----->3
deleteProduct(id:any){
  this.api.deletewishlistAPI(id).subscribe({
    next:(res:any)=>{
      console.log(res);
     
    //refresh akathe spotil dlt avan
      this.getwishlist()
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}



 //Add to cart ---Same from viewproduct.component.ts

 addtoCart(product: any) {

  if (sessionStorage.getItem("token")) {
    product.quantity=1
    this.api.addToCartAPI(this.product).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res)
      },
      error: (err: any) => {
        alert(err.error)
        console.log(err);

      }
    })
  }
  else {
    alert("Please login")
  }
}
}


