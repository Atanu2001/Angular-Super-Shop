import { ProductService } from './../services/product.service';
import { product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import {faTrash,faEdit}  from '@fortawesome/free-solid-svg-icons';
 

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
productList:undefined|product[];
productMessege:undefined|string;
icon = faTrash;
updateIcon=faEdit;
  constructor(private product : ProductService){}

  ngOnInit(): void {
    this.deleteProdcutList();
  }

  deleteProduct(id:number){
    console.warn("test id",id)
    this.product.deleteProduct(id).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.productMessege="Product is deleted";
        this.deleteProdcutList()

        
      }
    })

    setTimeout(() => {
      this.productMessege=undefined
    }, 3000);
  }

  deleteProdcutList(){
    this.product.productList().subscribe((result)=>{
      console.warn(result)
      if(result){
        this.productList=result;
      }
    })
  }

}
