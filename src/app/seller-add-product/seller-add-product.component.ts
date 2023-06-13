import { product } from './../data-type';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessege:string|undefined;
  constructor(private product: ProductService,private route: ActivatedRoute, private routes: Router) { }


  ngOnInit(): void {

  }
  submit(data: product) {
    //console.warn(data)
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.addProductMessege="Product is succesfully added"
      }
      setTimeout(()=>this.addProductMessege=undefined,3000)
      setTimeout(() => {
        this.routes.navigate(['/seller-home'])
  }, 500);
    })
  }

}
