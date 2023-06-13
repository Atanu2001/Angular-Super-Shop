import { ProductService } from './../services/product.service';
import { product } from './../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product
  productMessage: undefined | string
  

  constructor(private route: ActivatedRoute, private routes: Router, private product: ProductService) { }

  ngOnInit(): void {

    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId);
    //we are checking that the productId is null or not//
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.warn(data);
      this.productData = data

    });

  }
  submit(data: product) {
    console.warn(data);
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = "Product has been updated"
      }
        setTimeout(() => {
          this.routes.navigate(['/seller-home'])
    }, 2000);
      
    });

    setTimeout(() => {
      this.productMessage = undefined
    }, 3000)
  }
}


