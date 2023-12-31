import { order } from './../data-type';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit{
  orderData:order[]|undefined
  constructor(private product:ProductService){}
  ngOnInit(): void {
    this.getOrderList()
    
  }
  cancelOrder(orderId:number|undefined){
    setTimeout(() => {
      orderId && this.product.cancelOrder(orderId).subscribe((result)=>{
        this.getOrderList()
      })
    }, 1000);
  }
  getOrderList(){
    setTimeout(() => {
      this.product.orderList().subscribe((result)=>{
        this.orderData=result
      })
    }, 1000);
  }
  
}
