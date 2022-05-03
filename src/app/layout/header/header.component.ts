import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/services/cartData/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cart: CartDataService) { }
  productsInCart: number = 0;

  ngOnInit(): void {
    this.cart.numberChange.subscribe((number)=>{
      this.productsInCart = number;
    });
  }

}
