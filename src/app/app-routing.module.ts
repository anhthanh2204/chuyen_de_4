import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:no-unused-variable
import {PRODUCTComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {FooterComponent} from './footer/footer.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {BrandComponent} from './brand/brand.component';
import {LoginComponent} from './login/login.component';
import {CategoryComponent} from './category/category.component';
const routes: Routes = [
  {path:"product",component:PRODUCTComponent},
  {path:"cart",component:CartComponent},
  {path:"productdetail",component:ProductdetailComponent},
  {path:"brand",component:BrandComponent},
  {path:"login",component:LoginComponent},
  {path:"category",component:CategoryComponent},
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
