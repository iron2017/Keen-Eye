import { Component, OnInit } from '@angular/core';
import categories from 'src/app/Data/Categories';
import { Category } from 'src/app/Interfaces/Category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category: Category[]= [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.category = categories
    console.log(this.category)
    
    }
    onCate = () =>{
  
      this.router.navigateByUrl('/product');
      }
}
