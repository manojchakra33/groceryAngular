import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Category from '../Category';
import Product from '../Product';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private util: UtilService) {}
  @Input()
  username: string = '';

  signinflag: boolean = false;
  usernameflag: boolean = true;

  flagHome: boolean = true;

  productId: any;
  productName: any;
  cost: any;
  discount: any;
  category: any;
  description: any;
  rating: any;
  image: any;

  categories: Category[] = [];
  products: any;
  pro: Product = new Product(0, '', 0, 0, '', 0, '');
  UpdateResponse: any = '';

  ngOnInit(): void {
    if (this.username == '') {
      this.signinflag = true;
      this.usernameflag = false;
    }

    let products = this.util.getAllProduct();
    products.subscribe((data) => {
      this.products = data;
    });
    console.log(this.products);

    // let s = this.util.showCategory();
    // s.subscribe((data) => (this.categories = data));
    // // console.log(this.categories);
  }

  clickRegister() {
    this.flagHome = false;
  }

  @Output()
  emitter = new EventEmitter<any>();

  mycart(u: string) {
    this.emitter.emit(u);
    console.log(u);
  }

  addToCart(userName: string, producId: number) {
    let s = this.util.addToCart(userName, producId);
    s.subscribe((data) => {
      console.log(data);
    });
  }
}
