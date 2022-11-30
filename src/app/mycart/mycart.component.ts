import { Component, Input, OnInit } from '@angular/core';
import Cart from '../Cart';
import Order from '../Order';
import Product from '../Product';
import User from '../User';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css'],
})
export class MycartComponent implements OnInit {
  @Input()
  username: string = '';

  constructor(private util: UtilService) {}

  productsInCart: any = [];

  totalCost: any = 0;

  ngOnInit(): void {
    let s = this.util.getCart(this.username);
    console.log('username' + this.username);
    s.subscribe((data) => {
      this.productsInCart = data;
      for (let l of this.productsInCart) {
        this.totalCost += l.cost;
      }
      console.log(this.totalCost);
    });
  }

  remove(userName: string, p: number) {
    console.log(userName);
    let s = this.util.removeFromCart(userName, p);
    s.subscribe((data) => {
      console.log(data);
    });
  }

  placeOrder(username: string, p: Product[]) {
    let order: Order = new Order(0, p, [], 0);
    let s = this.util.placeOrder(username, order);
    s.subscribe((data) => {
      console.log(data);
    });
  }
}
