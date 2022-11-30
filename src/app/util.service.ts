import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryComponent } from './category/category.component';
import Product from './Product';
import Order from './Order';
import User from './User';
import UserForRegister from './UserForRegister';
import Login from './Login';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private http: HttpClient) {}

  public save1(category: any): Observable<any> {
    return this.http.get<any>('http://localhost:8085/regCategory/' + category);
  }
  public registerUser(user: UserForRegister) {
    return this.http.post<any>('http://localhost:8085/regUser/', user, {
      responseType: 'User' as 'json',
    });
  }

  public saveProduct(category: any, product: Product): Observable<any> {
    let c = this.http.put<any>(
      'http://localhost:8085/regProduct/' + category,
      product,
      { responseType: 'text' as 'json' }
    );
    console.log(c);
    return c;
  }

  public showCategory(): Observable<any> {
    return this.http.get<any>('http://localhost:8085/listCategory');
  }

  public getAllProduct() {
    return this.http.get<any>('http://localhost:8085/findAllproducts');
  }

  public updateProduct(p: Product) {
    return this.http.post('http://localhost:8085/updateProduct', p, {
      responseType: 'Product' as 'json',
    });
  }
  public deleteProduct(p: number) {
    return this.http.delete('http://localhost:8085/delProduct/' + p);
  }

  public getOrders(user: any) {
    this.http
      .get<Order[]>('http://localhost:8085/orderByUser/' + user)
      .subscribe((data) => {
        return data;
      });
  }

  validateUser(l: Login) {
    return this.http.post('http://localhost:8085/login', l, {
      responseType: 'Login' as 'json',
    });
  }

  addToCart(userName: string, producId: number) {
    return this.http.put(
      'http://localhost:8085/addToCart/' + userName + '/' + producId,
      { Response: 'text' as 'text' }
    );
  }

  getCart(userName: string) {
    return this.http.get('http://localhost:8085/getCartByUserName/' + userName);
  }

  removeFromCart(username: string, productId: number) {
    return this.http.delete(
      'http://localhost:8085/removeProductByProductId/' +
        username +
        '/' +
        productId
    );
  }

  placeOrder(username: string, order: Order) {
    return this.http.put('http://localhost:8085/place/' + username, order, {
      responseType: 'Order' as 'json',
    });
  }
}
