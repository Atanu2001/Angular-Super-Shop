import { SellerService } from './services/seller.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecom-project';
  constructor(private seller : SellerService){

  }
  
}
