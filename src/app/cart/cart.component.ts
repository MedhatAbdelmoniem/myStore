import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products.interface';
import { CartDataService } from '../services/cartData/cart-data.service';
import { Router } from '@angular/router';
import { UserDataService } from '../services/userData/user-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name: string = '';
  products: Products[] = [];
  address: string = '';
  price:number = 0;
  constructor(private cartData: CartDataService, private router: Router, private userData: UserDataService) { 
    this.products = cartData.returnCartProducts();
    this.price = cartData.returnCartPrice();
    this.price =  parseFloat(this.price.toFixed(2));
  }

  ngOnInit(): void {
  }

  onChange(value: Event, product: Products):void {
    let price: number = 0;
    this.products.forEach(productItem => {
      price += productItem.price * productItem.amount;
    });
    this.cartData.updatePrice(price);
    this.price = this.cartData.returnCartPrice();
    this.price =  parseFloat(this.price.toFixed(2));
  }

  removeItem(product: Products): void {
    this.cartData.RemoveFromCart(product.price * product.amount, product);
    this.price = this.cartData.returnCartPrice();
    this.price =  parseFloat(this.price.toFixed(2));
  }
  Success(): void {
    
    if(this.products.length > 0){
      this.price =  parseFloat(this.price.toFixed(2));
      this.userData.AddInfo(this.name, this.price);
      this.router.navigateByUrl('/confirm')
    }
  }

}
