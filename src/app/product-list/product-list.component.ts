import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Products } from '../interfaces/products.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Products[] = [];
  likes: number = 0;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data)=>{
      this.products = data;
    });
  }

  liking(liked: boolean){
    if(!liked){
      this.likes++;
    }
  }
}
