import { Component, OnInit } from '@angular/core';
import { products1 } from '../products';
@Component({
  selector: 'app-product-list1',
  templateUrl: './product-list1.component.html',
  styleUrls: ['./product-list1.component.css']
})
export class ProductList1Component {
  products = products1;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  remove(index: number){
     products1.splice(index - 1, 1)
  }
}