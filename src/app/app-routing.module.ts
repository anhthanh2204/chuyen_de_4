import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:no-unused-variable
import {PRODUCTComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';

import {BodyComponent} from './body/body.component';


import {ProductdetailComponent} from './productdetail/productdetail.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {path:"product",component:PRODUCTComponent},
  {path:"cart",component:CartComponent},
  {path:"productdetail",component:ProductdetailComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:BodyComponent},
];

@NgModule({
  declarations:[
    // PRODUCTComponent,
    // CartComponent,
    // HeaderComponent,
    // BodyComponent,
    // FooterComponent,
    // ProductdetailComponent,
    // BrandComponent,
    // LoginComponent,
    // CategoryComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
