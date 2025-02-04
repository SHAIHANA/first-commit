import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  // array name aanu allproducts.this is a variable
  allproducts: any = []

  status: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getproducts()
  }
  getproducts() {
    this.api.getproductAPI().subscribe((item: any) => {
      // itethinte akathunn products ilot edthu
      console.log(item.products);

      // topile variabline ne anu ivde edukunath
      this.allproducts = item.products
      console.log(this.allproducts);
      this.status = true;

    })

  }

}
