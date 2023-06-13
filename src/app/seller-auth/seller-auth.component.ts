//import { Login } from './../data-type';
import { SellerService } from './../services/seller.service';
import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { signUp,Login } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService) {}
  showLogin= false;
  authError : string='';
  ngOnInit(): void {
    
      this.seller.reloadSeller()
    
  }

  signUp(data: signUp): void {
    console.warn(data)
      this.seller.userSignup(data);
    
    
  }

  Login(data: signUp): void {
    //console.warn(data)
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not correct";
      }
    })
  }

  openLogin(){
    this.showLogin=true
  }

  openSignUp(){
    this.showLogin=false
  }

}
