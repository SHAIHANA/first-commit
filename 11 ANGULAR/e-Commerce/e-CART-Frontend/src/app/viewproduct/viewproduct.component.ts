import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements

  OnInit {
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  //variable creation for display
  product: any = []

  ngOnInit(): void {
    this.viewProduct()
  }

  //get id from [params]
  viewProduct() {
    this.route.params.subscribe((res: any) => {
      console.log(res);
      const { id } = res
      console.log(id);
      this.api.viewProductAPI(id).subscribe((res: any) => {
        console.log(res);
        this.product = res

      })

    })
  }



  //Add to wishlist ----->1
  addTowishlist(product: any) {
    if (sessionStorage.getItem("token")) {
      this.api.addTowishlistAPI(this.product).subscribe({
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



  //Add to cart

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
