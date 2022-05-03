import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
 
  name: string = '';
  totalPrice = 0;
  constructor() { }

  AddInfo(name: string, totalPrice: number){
    this.name = name;
    this.totalPrice = totalPrice;
  }

  returnInfoName(): string{
    return this.name;
  }

  returnInfoPrice(): number {
    return this.totalPrice;
  }
}
