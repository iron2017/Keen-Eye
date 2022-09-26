import { Component, OnInit } from '@angular/core';
import categories from './Data/Categories';
import { Category } from './Interfaces/Category';
import { Product } from './Interfaces/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  category: Category[]= [];
  products: Product[]=[];
  title = 'App-Eye';
  ngOnInit(): void {
  this.category = categories
  console.log(this.category)
  }
onCate = function(){

console.log("dfdf")
  }
}
