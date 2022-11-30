import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Order from '../Order';
import Product from '../Product';
import { UtilService } from '../util.service';
import OrderForIterate from './orderForIterate';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // @Input()
 user:String="gill";
 orders:any;


 totalCost:number=0;
 constructor(private http:HttpClient) { }

 ngOnInit(): void {
     this.getOrders(this.user);          
 }


 public getOrders(user:any):any{
   this.orders= this.http.get<Order[]>("http://localhost:8085/orderByUser/"+user).subscribe(data=>{
    this.orders=data}) 
 }
 
 addTotalCost(cost:number){
    this.totalCost+=cost
 }
 totalCostZero(){
    this.totalCost=0
 }

}
