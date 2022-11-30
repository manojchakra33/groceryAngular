import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { RegProductComponent } from './reg-product/reg-product.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';


const routes: Routes = [
  {path:'addCategory',component:CategoryComponent},
  {path:'regproduct',component:RegProductComponent},
  {path:'product',component:UpdateproductComponent},
  {path:'admin',component:AdminComponent},
  {path:'register',component:RegisteruserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CategoryComponent]
