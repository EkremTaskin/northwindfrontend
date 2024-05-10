import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories:Category[] = [];
  currentCategory:Category;

  constructor(private categoryService:CategoryService){

  }

  ngOnInit():void{
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((response)=>{
      this.categories = response.data
    })
  }

  setCurrentCategory(category:Category){
   this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
