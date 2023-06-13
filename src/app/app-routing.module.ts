import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { PoliciesComponent } from './policies/policies.component';
import { TermsComponent } from './terms/terms.component';
import { HelthCentreComponent } from './helth-centre/helth-centre.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
//import { NotFoundComponent } from './not-found/not-found.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // route for home ..
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent, //route for seller..
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent, //route for sellerHome..
    canActivate: [AuthGuard]
  },
  {
    component:SellerAddProductComponent,
    path : 'seller-add-product',
    canActivate: [AuthGuard]
  },
  {
    component:SellerUpdateProductComponent,
    path : 'seller-update-product/:id',
    canActivate: [AuthGuard]
  },
  {
    component:SearchComponent,
    path : 'search/:query',
    canActivate: [AuthGuard]
  },
  {
    component:ProductDetailsComponent,
    path : 'details/:productId',
    canActivate: [AuthGuard]
  },
  {
    component:UserAuthComponent,
    path : 'user-auth',
    canActivate: [AuthGuard]

  },{
    component:CartPageComponent,
    path:'cart-page'
  },{
    component:CheckoutComponent,
    path:'checkout'
  },{
    component:MyOrdersComponent,
    path: 'my-orders'
  },{
    component:PoliciesComponent,
    path: 'policies'
  },{
    component:TermsComponent,
    path: 'terms'
  },{
    component:HelthCentreComponent,
    path: 'help'
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
