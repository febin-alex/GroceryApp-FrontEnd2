import { Component } from '@angular/core';

import { ICategory } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  
  categories:ICategory[]=[];

  
  constructor(private dataService:DataService){
    //To get all Categories
    this.dataService.getCategories().subscribe((response:any)=>{
      this.categories=response;
         })
  }

}
