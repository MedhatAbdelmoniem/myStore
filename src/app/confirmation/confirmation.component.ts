import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/userData/user-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string = '';
  price: number = 0;
  constructor(private userData: UserDataService) { }

  ngOnInit(): void {
    this.name = this.userData.returnInfoName();
    this.price = this.userData.returnInfoPrice();
  }

}
