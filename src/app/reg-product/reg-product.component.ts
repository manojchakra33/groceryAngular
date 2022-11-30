import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Category from '../Category';
import Product from '../Product';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-reg-product',
  templateUrl: './reg-product.component.html',
  styleUrls: ['./reg-product.component.css']
})
export class RegProductComponent implements OnInit {
t: any;

  constructor( private util:UtilService) { }
  productName:any;
  cost:any;
  discount:any;
  category:any;
  description:any;
  rating:any;
  image:any;
  status:string="";


 
  categories:Category[]=[]; 

  

  ngOnInit(): void {
    let s=this.util.showCategory();
    s.subscribe((data)=>this.categories=data);
    console.log(this.categories);
     
  }

  public registerProduct(f:NgForm){
  let  product:Product=new Product(0,this.productName,this.cost,this.discount,this.description,this.rating,this.image);     
        let s= this.util.saveProduct(this.category,product);
       
        console.log(product)
        s.subscribe((data)=>this.status=data)
        alert(this.status);
        console.log(this.status)

  }

  public update(e:any){
        this.category=e;
  }
   
}
