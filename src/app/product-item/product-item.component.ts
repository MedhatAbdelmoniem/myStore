import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../interfaces/products.interface';

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
    url: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
