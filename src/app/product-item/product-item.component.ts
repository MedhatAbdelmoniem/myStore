import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { CurrentProductService } from '../services/currentProduct/current-product.service'
import { CartDataService } from '../services/cartData/cart-data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Products = {
    id: 0,
    name:'',
    price: 0,
    description: '',
    url: '',
    amount: 0
  };
  liked:boolean = false;

  @Output() likedItem: EventEmitter<boolean> = new EventEmitter;

  selectedOption: number = 1;

  constructor(private currentProduct: CurrentProductService, private cartData: CartDataService) { }

  ngOnInit(): void {
  }

  changeProductList(): void {
    this.currentProduct.changeProduct(this.product);
  }
  addingToCart(): void {
    this.cartData.AddToCart(this.product.price * this.selectedOption,this.product, this.selectedOption);
    alert('added to cart');
  }

  like(){
    this.likedItem.emit(this.liked);
    this.liked = true;
  }

}
