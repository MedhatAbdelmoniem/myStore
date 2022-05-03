import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Products } from 'src/app/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  totalPrice: number = 0;
  productsInCart: Products[] = [];
  check: boolean = false;
  ProductsInCartCounter: number = 0;
  numberChange: Subject<number> = new Subject<number>();
  constructor() {}

  AddToCart(price:number , product: Products, amount: number):void {
      this.productsInCart.forEach(productInCart => {
          if(product.name === productInCart.name){
            this.totalPrice -= productInCart.price * productInCart.amount;
            productInCart.amount = amount;
            this.totalPrice += productInCart.price * productInCart.amount;
            this.check = true;
          }
      });
      if(this.check){
        this.check = false;
        return;
      }
      product.amount = amount;
      this.productsInCart.push(product);
      this.totalPrice += price;
    
      this.ProductsInCartCounter++;
      this.numberChange.next(this.ProductsInCartCounter);
  }
  returnCartProducts():Products[] {
    return this.productsInCart;
  }

  returnCartPrice():number {
    return this.totalPrice;
  }

  updatePrice(price: number) {
    this.totalPrice = price;
  }

  RemoveFromCart(price:number , product: Products):void {
    const index: number = this.productsInCart.indexOf(product);
    this.productsInCart.splice(index, 1);
    this.totalPrice -= price;
    this.ProductsInCartCounter--;
    this.numberChange.next(this.ProductsInCartCounter);
  }
}
