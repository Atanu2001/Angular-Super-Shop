import { ProductService } from './../services/product.service';
import { signUp, Login, product, cart } from './../data-type';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true;
  authError: string = ""
  constructor(private user: UserService,private product:ProductService) {

  }
  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: signUp) {
    this.user.userSignUp(data)
  }

  Login(data: Login) {
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result) => {
      //console.warn("apple", result);
      if (result) {
        this.authError = "Please enter valid user details"
      } else {
        this.localCartToRemoteCart()
      }

    })

  }

  openSignUp() {
    this.showLogin = false
  }
  openLogin() {
    this.showLogin = true
  }

  localCartToRemoteCart() {
    let data = localStorage.getItem('localCart')//   getItem('localCart');
    let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
     

    
   // console.warn(localStorage);
    if (data) {
      let cartDataList: product[] = JSON.parse(data);
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
    
      cartDataList.forEach((product: product,index) => {
        let cartData: cart = {
          ...product,
          productId: product.id,
          userId
        }
        delete cartData.id
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result)=>{
            if(result){
              console.warn("item stored in DB");
            }
          })
        }, 500);
        if(cartDataList.length===index+1){
          localStorage.removeItem('localCart')
        }
      })
      
    }
    setTimeout(() => {
      this.product.getCartList(userId)
      //console.warn(userId);
      
    }, 2000);

    
  }

}
