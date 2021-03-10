import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductList1Component } from './product-list1/product-list1.component';
import { ProductDetails1Component } from './product-details1/product-details1.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { ProductDetails2Component } from './product-details2/product-details2.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CategoryListComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-list1', component: ProductList1Component },
      { path: 'product-list2', component: ProductList2Component },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'products1/:productId', component: ProductDetails1Component },
      { path: 'products2/:productId', component: ProductDetails2Component },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoryListComponent,
    ProductList1Component,
    ProductDetails1Component,
    ProductList2Component,
    ProductDetails2Component,
    LikeComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/