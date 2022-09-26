import { Component, OnInit } from '@angular/core';
import products from 'src/app/Data/Products';
import { Product } from 'src/app/Interfaces/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product[]= [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.product = products 
    console.log(this.product)
    
    }
    onCate = () =>{
  
      this.router.navigateByUrl('/product-detail');
      }

}
