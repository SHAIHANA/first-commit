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

}
