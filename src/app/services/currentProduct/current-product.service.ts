import { Injectable } from '@angular/core';
import { Products } from 'src/app/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrentProductService {
  product: Products = {
    id: 0,
    name:'',
    price: 0,
    description: '',
    url: ''
  };
  constructor() { }
    changeProduct(product: Products): void{
      this.product = product;
    }

    getProduct(): Products{
      return this.product;
    }
}
