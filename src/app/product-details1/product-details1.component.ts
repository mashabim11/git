import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products1 } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details1',
  templateUrl: './product-details1.component.html',
  styleUrls: ['./product-details1.component.css']
})
export class ProductDetails1Component implements OnInit {

  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.product = products1.find(product => product.id === productIdFromRoute);
  }

}