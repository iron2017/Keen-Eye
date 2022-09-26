import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { ProductsComponent } from './Pages/products/products.component';

const r: Routes = [
  { path: '', component: CategoriesComponent },

  { path: 'product-detail', component: ProductDetailsComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'category', component: CategoriesComponent },
   
];

@NgModule({
  imports: [  RouterModule.forRoot(r)
    
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
