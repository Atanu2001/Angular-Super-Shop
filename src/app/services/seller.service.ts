
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'  //this import is done to call the http service 
import { signUp, Login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
//import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError= new EventEmitter<boolean>(false);
  
  constructor(private http: HttpClient, private router: Router) { }//(making instance of HttpClient) 

  userSignup(data: signUp) {
    //console.warn(data.email,data.name)
     this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
      console.warn(result)
      if(result){
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['seller-home']);
      }
      //this.isSellerLoggedIn.next(true);
      
      //console.warn("result", result)
    })

    // return false
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])

    }
  }

  userLogin(data: Login) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }
    ).subscribe((result: any) => {
      console.warn(result)
      if (result && result.body && result.body.length===1){
        this.isLoginError.emit(false)
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
        
      }else{
        console.warn("login failed");
        this.isLoginError.emit(true)
      }
    })


  }

}








