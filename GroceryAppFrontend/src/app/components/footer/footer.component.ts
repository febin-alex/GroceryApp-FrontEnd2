import { Component } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {



  categories:ICategory[]=[];

  


  constructor(private dataService:DataService){
    

    this.dataService.getCategories().subscribe((response:any)=>{
      this.categories=response;
    })
  }

}
