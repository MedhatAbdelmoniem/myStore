import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../interfaces/products.interface';
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
    url: ''
  };

  selectedOption: number = 1;
  constructor(private currentProduct: CurrentProductService) {
    this.product = this.currentProduct.getProduct();
   }

  ngOnInit(): void {
    
  }

}
