import { ProductService } from './../services/product.service';
import { product } from './../data-type';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  popularProducts:undefined|product[]
  trendyProducts:undefined|product[]
  constructor(private product:ProductService){}
  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      //console.warn(data);
      this.popularProducts=data;
      
    });
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data
    });
  }
  
}
