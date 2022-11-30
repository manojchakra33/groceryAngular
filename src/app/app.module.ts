import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { RegProductComponent } from './reg-product/reg-product.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UtilService } from './util.service';
import { ListcategoryComponent } from './listcategory/listcategory.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddressComponent } from './address/address.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { SignupSigninComponent } from './signup-signin/signup-signin.component';
import { MycartComponent } from './mycart/mycart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,

    RegProductComponent,
    routingComponents,
    CategoryComponent,
    ListcategoryComponent,
    UpdateproductComponent,
    AddressComponent,
    ItemsComponent,
    OrdersComponent,
    HomeComponent,
    HomecontentComponent,
    AboutusComponent,
    RegisteruserComponent,
    SignupSigninComponent,
    MycartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
