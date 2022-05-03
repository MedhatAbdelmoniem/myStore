import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { CartDataService } from '../services/cartData/cart-data.service';
import { CurrentProductService } from '../services/currentProduct/current-product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product: Products = {
    id: 0,
    name:'',
    price: 0,
    description: '',
    url: '', 
    amount: 0
  };

  selectedOption: number = 1;
  constructor(private currentProduct: CurrentProductService, private cartData: CartDataService) {
    this.product = this.currentProduct.getProduct();
   }

  ngOnInit(): void {
    
  }
  addingToCart(): void {
    this.cartData.AddToCart(this.product.price * this.selectedOption,this.product, this.selectedOption);
    alert('added to cart');
  }

}
